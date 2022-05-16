/* ============================================================================================== */
/*                                                                                                */
/* Copyright 2021 Kris HEYSE                                                                      */
/*                                                                                                */
/* Licensed under the Apache License, Version 2.0 (the "License");                                */
/* you may not use this file except in compliance with the License.                               */
/* You may obtain a copy of the License at                                                        */
/*                                                                                                */
/* http://www.apache.org/licenses/LICENSE-2.0                                                     */
/*                                                                                                */
/* Unless required by applicable law or agreed to in writing, software                            */
/* distributed under the License is distributed on an "AS IS" BASIS,                              */
/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                       */
/* See the License for the specific language governing permissions and                            */
/* limitations under the License.                                                                 */
/*                                                                                                */
/* ============================================================================================== */


// CONSTANTS
// =================================================================================================

const DEFAULT_COMMAND_HOT_KEYS = {

    // loop
    cmdLoop: 'Alt+Shift+L',
    cmdLoopStep: '+',
    cmdLoopMultiSteps: '*',

    // zoom
    cmdZoomFit: 'Alt+Shift+F',
    cmdZoomOne: 'Alt+Shift+1',
    cmdZoomMax: 'Alt+Shift+M',

    // show/hide coordinates
    cmdShowCoordinates: 'Alt+Shift+C',

    // show/hide shadow
    cmdShowShadow: 'Alt+Shift+S',

    // export
    cmdExport: 'Alt+Shift+E',
};

const DEFAULT_ARTWORK_PROPS = {

    renderer: 'p2d',            // string: renderer => 'p2d', 'svg', 'webgl'

    size: '297mm 210mm',        // string: space separated css width/height values or paper format
                                // eg: '297mm 210mm' | '500px 250px' | 'A4' | 'LETTER'

    orientation: null,          // string: 'unchanged' (no change) | 'landscape' | 'portrait'
                            
    drawingUnits: 'mm',         // string: 'px' | 'mm' | 'cm' | 'in'

    exportPPI: 300,             // number: export resolution
    
    zoomMax: 5.0,               // number: maximum zoom
    zoomMin: 0.1,               // number: minimum zoom => can change to fit on screen
    zoomInc: 0.01,              // number: zoom / scroll step size

    screenPPI: 96,              // number: screen resolution (be aware of pixel density)
    screenPadding: '15mm',      // string: space between artwork and window/screen border

    shadowVisible: true,                    // boolean: shadow visible
    shadowColor: 'rgba(64, 64, 64, 0.5)',   // string: shadow color (css notation)
    shadowX: '0mm',                         // string: eg: '1cm' | 10mm
    shadowY: '6mm',                         // string: eg: '0.4in' | 10mm
    shadowBlur: '5mm',                      // string: eg: '5mm'

    wallpaperBackground: '#888888',         // string: artwork container background
    canvasColor: 'none',                    // string: svg element color (not exported)

    outputFileName: 'aw-S@seed-D@date-L@loops',     // string: output file name
                                                    // @seed == current seed value
                                                    // @date == date & time
                                                    // @loops == number of loops made (frameCount)
                                                    // eg: artwork-@seed-@date-@loops
                                                    // =>  name    seed   date    time  loops
                                                    // =>  artwork-1234-20190513-161132-10000

    saveInfoText: false,        // if true, save text file with info about the artwork
                                // contains: width, height, resolution, seed, noiseSeed, ...
                
    xyDisplay: true,            // boolean: display mouse coordinates on artwork hover
    xyDecimals: 2,              // number: number of decimals for mouse cooordinates display

    seed: null,                 // number: random seed (null == random seed number)
    noiseSeed: null,            // number: noise seed (null == random seed number) 
    simplexSeed: null,          // number: simplex seed (null = random seed number)

    multiLoopSteps: 10,             // number: number of loops for multi loop => key: alt + X

    disableFriendlyErrors: true,    // boolean: friendly errors or not

    commandHotKeys: {},             // object: see const DEFAULT_COMMAND_HOT_KEYS

    showPane: true,                 // boolean: show / hide command/info pane
    showPropertiesInPane: true,     // boolean: show / hide info properties
    showHotkeysInPane: false,       // boolean: show / hide info hotkeys
};


// P5 CLASS PROPERTIES
// =================================================================================================

// used when creating more then one artwork at the same time
p5.__aw_array = [];
p5.__aw_comments_removed = false;


// P5 CLASS METHODS
// =================================================================================================

p5.extend = (srcObj, proto = true, forceOverride = false) => {

    const tgtObj = proto ? p5.prototype : p5;

    for (let key in srcObj) {

        if (tgtObj.hasOwnProperty(key) && !forceOverride) {

            console.warn(

                `${tgtObj} already has a property/method called "${key}".\n` +
                `If you did override it on purpose, you can just ignore this warning \n` +
                `or use the forceOverride option to avoid future warnings. Otherwise, try\n` +
                `to rename your new "${key}" property/method.`
            );
        }

        tgtObj[key] = srcObj[key];
    }
};


// OVERRIDES
// =================================================================================================

// createCanvas

p5.prototype.createCanvas = function($_createCanvas) {

    return function(arg1, arg2, arg3, props = {}) {

        let cvs;

        this.__p5mode = true;

        this.__aw = null;

        if (
            (arguments.length === 2 && typeof arg2 === 'object') || 
            (arguments.length === 3 && typeof arg3 === 'object')
        ) {

            let sizeArray = [];

            this.__p5mode = false;
            
            if (arguments.length === 2) {

                this.__props = { ...DEFAULT_ARTWORK_PROPS, ...arg2 };

                if (arg1.toUpperCase() in this.PAPER_SIZE) {

                    sizeArray = this.PAPER_SIZE[arg1.toUpperCase()];

                } else {

                    throw new Error('Invalid size argument');
                }

            } else {

                this.__props = { ...DEFAULT_ARTWORK_PROPS, ...arg3 };
                sizeArray = [arg1, arg2];
            }

            p5.disableFriendlyErrors = this.__props.disableFriendlyErrors;

            this.__renderer = this.__props.renderer == null ? this.P2D : this.__props.renderer;

            this.__exportPPI = this.__props.exportPPI;
            this.__cssScreenPPI = this.__props.screenPPI / (Math.ceil(window.devicePixelRatio) || 1);

            this.__units = this.__props.drawingUnits;
            this.__screenPadding = this.__props.screenPadding;

            this.__cvsWidth = this.__toUnits(sizeArray[0], this.__units, this.__exportPPI);
            this.__cvsHeight = this.__toUnits(sizeArray[1] || sizeArray[0], this.__units, this.__exportPPI);
            this.__orientation = this.__props.orientation;

            if (this.__orientation && this.__orientation.toLowerCase() === this.PORTRAIT) {

                let tmp = Math.min(this.__cvsWidth, this.__cvsHeight);
                this.__cvsHeight = Math.max(this.__cvsWidth, this.__cvsHeight);
                this.__cvsWidth = tmp;

            } else if (this.__orientation && this.__orientation.toLowerCase() === this.LANDSCAPE) {

                let tmp = Math.min(this.__cvsWidth, this.__cvsHeight);
                this.__cvsWidth = Math.max(this.__cvsWidth, this.__cvsHeight);
                this.__cvsHeight = tmp;
            }
            
            this.__zoomMin = this.__props.zoomMin;
            this.__zoomMinCurrent = this.__zoomMin;
            this.__zoomMax = this.__props.zoomMax;
            this.__zoomInc = this.__props.zoomInc;

            this.__shadowVisible = !!this.__props.shadowVisible;
            this.__shadowColor = this.__props.shadowColor;
            this.__shadowX = this.__toUnits(this.__props.shadowX, this.__units, this.__cssScreenPPI);
            this.__shadowY = this.__toUnits(this.__props.shadowY, this.__units, this.__cssScreenPPI);
            this.__shadowBlur = this.__toUnits(this.__props.shadowBlur, this.__units, this.__cssScreenPPI);

            this.__seed = this.__props.seed
                ? this.__props.seed
                : Math.floor(Math.random() * (10000 - 1000) + 1000);
                
            this.__noiseSeed = this.__props.noiseSeed
                ? this.__props.noiseSeed
                : Math.floor(Math.random() * (10000 - 1000) + 1000);

            this.__simplexSeed = this.__props.simplexSeed
                ? this.__props.simplexSeed
                : Math.floor(Math.random() * (10000 - 1000) + 1000);

            this.__wallpaperBackground = this.__props.wallpaperBackground;
            this.__canvasColor = this.__props.canvasColor;

            this.__outputFileName = this.__props.outputFileName;
            this.__saveInfoText = this.__props.saveInfoText;

            this.__xyDisplay = this.__props.xyDisplay;
            this.__xyDecimals = this.__props.xyDecimals;

            this.__multiLoopSteps = this.__props.multiLoopSteps;
            this.__initialNumberOfLoops = this.__props.initialNumberOfLoops;

            this.__cmdHotKeys = { ...DEFAULT_COMMAND_HOT_KEYS, ...this.__props.commandHotKeys };

            this.__showPane = this.__props.showPane;
            this.__showPropertiesInPane = this.__props.showPropertiesInPane;
            this.__showHotkeysInPane = this.__props.showHotkeysInPane;
            
            // -----------------------------------------------------------------------------------------

            p5.__aw_array.push(this);
            this.__idx = p5.__aw_array.length - 1;

            this.__initArtwork();
            this.__initUnitScale();

            if (this.__renderer === this.SVG) {

                cvs = $_createCanvas.call(this, this.__cvsWidth, this.__cvsHeight, this.__renderer);
                cvs.svg.setAttribute('width', `${this.__cvsWidth}${this.__units}`);
                cvs.svg.setAttribute('height', `${this.__cvsHeight}${this.__units}`);

            } else {

                if (this.__renderer === this.WEBGL) this.smooth();
                cvs = $_createCanvas.call(this, this.__cvsPxWidth, this.__cvsPxHeight, this.__renderer);
            }

            cvs.parent(this.__aw.id);

            this.__cvs = this.__renderer === this.SVG ? this.canvas.svg : this.canvas;
            this.__cvs.classList.add('canvas');

            if (this.__renderer === this.WEBGL) {

                this.setAttributes('antialias', true);
            }

            if (this.drawingContext.imageSmoothingEnabled) this.drawingContext.imageSmoothingEnabled = true;
            if (this.drawingContext.imageSmoothingQuality) this.drawingContext.imageSmoothingQuality = 'high';

            this.__initPanZoom();
            this.__initMouseEventListeners();
            this.__initShadow();
            this.__initXYPane();
            this.__initHotKeys();
            this.__initCmdPane();

            this.randomSeed(this.__seed);
            this.noiseSeed(this.__noiseSeed);
            this.simplexSeed(this.__simplexSeed);


            // if multiple artworks, recalculate and reposition

            if (this.__idx > 0) {
                
                p5.__aw_array.forEach((aw) => {

                    if (aw.__cvs != null) aw.__initPanZoom();
                });
            }


            // looping

            this.noLoop();
            if (!this._loop && this.__initialNumberOfLoops === 0) this.__printInfo = true;

            this.__setGlobalProperties();

            if (this.__renderer === this.P2D) this.drawingContext.scale(this.__unitScale, this.__unitScale);

            this.__updateTweakPanePlayBtn();

        } else {

            cvs = $_createCanvas.apply(this, arguments);
        }

        return cvs;
    }

}(p5.prototype.createCanvas);


// resizeCanvas
// should you feel the need to cut your canvas in half while painting ;)

p5.prototype.resizeCanvas = function($_resizeCanvas) {

    return function(w, h, noRedraw = false) {

        if (!this.__p5mode) {

            if (this.__seed) this.randomSeed(this.__seed);
            if (this.__noiseSeed) this.noiseSeed(this.__noiseSeed);
            if (this.__simplexSeed) this.simplexSeed(this.__simplexSeed);
    
            this.__cvsWidth = w;
            this.__cvsHeight = h;
    
            this.__cvsPxWidth = Math.floor(this.__cvsWidth * this.__uMult);
            this.__cvsPxHeight = Math.floor(this.__cvsHeight * this.__uMult);

            $_resizeCanvas.call(this, this.__cvsPxWidth, this.__cvsPxHeight, noRedraw)
    
            this.__initPanZoom();

            this.__setGlobalProperties();

            if (this.__renderer === this.P2D) this.drawingContext.scale(this.__unitScale, this.__unitScale);

        } else {
    
            $_resizeCanvas.apply(this, arguments);
        }
    }

}(p5.prototype.resizeCanvas);


// resetMatrix

p5.prototype.resetMatrix = function($_resetMatrix) {

    return function() {

        $_resetMatrix.call(this);

        if (!this.__p5mode) {

            this.__setGlobalProperties();

            if (this.__renderer === this.P2D) this.drawingContext.scale(this.__unitScale, this.__unitScale);
        }
    }

}(p5.prototype.resetMatrix);


// redraw 

p5.prototype.redraw = function($_redraw) {

    return function(n) {
        
        $_redraw.call(this, n);
        
        if (!this.__p5mode) {

            this.printArtworkInfo();
        }
    }

}(p5.prototype.redraw);


// randomSeed

p5.prototype.randomSeed = function($_randomSeed) {

    return function(s) {

        $_randomSeed.call(this, s);
        this.__seed = s;
        this.__updateSeed();
    }
}(p5.prototype.randomSeed);


// noiseSeed

p5.prototype.noiseSeed = function($_noiseSeed) {

    return function(s) {

        $_noiseSeed.call(this, s);
        this.__noiseSeed = s;
        this.__updateNoiseSeed();
    }
}(p5.prototype.noiseSeed);

// !!!
// !!! see p5.plus.js
// !!!

// p5.prototype.simplexSeed = function($_simplexSeed) {

//     return function(s) {

//         $_simplexSeed.call(this, s);
//         this.__simplexSeed = s;
//         this.__updateSimplexSeed();
//     }
// }(p5.prototype.simplexSeed);


// loop

p5.prototype.loop = function($_loop) {

    return function(s) {

        $_loop.call(this);
        this.__updateTweakPanePlayBtn();
        this.__updateLoops();
    }

}(p5.prototype.loop);


// noLoop

p5.prototype.noLoop = function($_noLoop) {

    return function() {

        $_noLoop.call(this);
        this.__updateTweakPanePlayBtn();
        this.__updateLoops();
    }
    
}(p5.prototype.noLoop);


// frameRate

p5.prototype.frameRate = function($_frameRate) {

    return function(fr) {

        $_frameRate.call(this, fr);
        this.__updateTweakPaneFrameRate();
    }
    
}(p5.prototype.frameRate);
