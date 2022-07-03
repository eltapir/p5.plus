(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    function ___$insertStyle(css) {
        if (!css || typeof window === 'undefined') {
            return;
        }
        const style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML = css;
        document.head.appendChild(style);
        return css;
    }

    ___$insertStyle("/* ============================================================================================== */\n/*                                                                                                */\n/* Copyright 2022 Kris HEYSE                                                                      */\n/*                                                                                                */\n/* Licensed under the Apache License, Version 2.0 (the \"License\");                                */\n/* you may not use this file except in compliance with the License.                               */\n/* You may obtain a copy of the License at                                                        */\n/*                                                                                                */\n/* http://www.apache.org/licenses/LICENSE-2.0                                                     */\n/*                                                                                                */\n/* Unless required by applicable law or agreed to in writing, software                            */\n/* distributed under the License is distributed on an \"AS IS\" BASIS,                              */\n/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                       */\n/* See the License for the specific language governing permissions and                            */\n/* limitations under the License.                                                                 */\n/*                                                                                                */\n/* ============================================================================================== */\n@font-face {\n  font-family: system-sans;\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"system-ui\"), local(\"-apple-system\"), local(\"BlinkMacSystemFont\"), local(\"Segoe UI\"), local(\"Liberation Sans\"), local(\"Roboto\"), local(\"Oxygen-Sans\"), local(\"Ubuntu\"), local(\"Cantarell\"), local(\"Noto Sans\"), local(\"Droid Sans\"), local(\"Helvetica Neue\"), local(\"sans-serif\");\n}\n@font-face {\n  font-family: system-mono;\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"ui-monospace\"), local(\"Cascadia Mono\"), local(\"Segoe UI Mono\"), local(\"Liberation mono\"), local(\"Ubuntu Mono\"), local(\"Roboto Mono\"), local(\"Menlo\"), local(\"Monaco\"), local(\"Consolas\"), local(\"monospace\");\n}\n:root {\n  --font-family-sans: system-sans;\n  --font-family-mono: system-mono;\n  --multiple-artwork-gap-size: 3px;\n  --wallpaper-background: #444;\n  --xy-wrapper-height: 2.0rem;\n  --xy-pane-bgcolor: rgba(55, 55, 55, 0.25);\n  --xy-pane-font-size: 0.7rem;\n  --xy-pane-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);\n  --xy-pane-border-radius: 1000px;\n  --xy-pane-padding: 0.35rem 0.50rem 0.25rem;\n  --xy-pane-label-bgcolor: #555;\n  --xy-pane-label-color: #bbb;\n  --xy-pane-info-width: 12rem;\n  --xy-pane-info-bgcolor: #666;\n  --xy-pane-info-color: #fff;\n  --xy-pane-gap: 2px;\n  --burger-width: 1.2rem;\n  --burger-height: 1rem;\n  --burger-padding-top: 0.75rem;\n  --burger-padding-bottom: var(--burger-padding-top);\n  --burger-padding-right: 0.75rem;\n  --burger-padding-left: var(--burger-padding-right);\n  --burger-slice-height: 0.125rem;\n  --burger-color: #ddd;\n  --burger-cross-color: #b55;\n  --burger-animation-speed: 300ms;\n  --cmd-pane-color: #ccc;\n  --cmd-pane-bgcolor: #3e3f44;\n  --cmd-pane-width: 280px;\n  --cmd-pane-padding: var(--burger-padding-left);\n  --cmd-pane-padding-top: calc(2 * var(--burger-padding-top) + var(--burger-height));\n  --cmd-pane-slide-speed: var(--burger-animation-speed);\n  --tp-base-background-color: hsla(230, 7%, 17%, 1.00);\n  --tp-base-shadow-color: hsla(0, 0%, 0%, 0.20);\n  --tp-button-background-color: hsla(230, 7%, 70%, 1.00);\n  --tp-button-background-color-active: hsla(230, 7%, 85%, 1.00);\n  --tp-button-background-color-focus: hsla(230, 7%, 80%, 1.00);\n  --tp-button-background-color-hover: hsla(230, 7%, 75%, 1.00);\n  --tp-button-foreground-color: hsla(230, 7%, 17%, 1.00);\n  --tp-container-background-color: hsla(230, 7%, 75%, 0.10);\n  --tp-container-background-color-active: hsla(230, 7%, 75%, 0.25);\n  --tp-container-background-color-focus: hsla(230, 7%, 75%, 0.20);\n  --tp-container-background-color-hover: hsla(230, 7%, 75%, 0.15);\n  --tp-container-foreground-color: hsla(230, 7%, 75%, 1.00);\n  --tp-groove-foreground-color: hsla(230, 7%, 75%, 0.10);\n  --tp-input-background-color: hsla(230, 7%, 75%, 0.10);\n  --tp-input-background-color-active: hsla(230, 7%, 75%, 0.25);\n  --tp-input-background-color-focus: hsla(230, 7%, 75%, 0.20);\n  --tp-input-background-color-hover: hsla(230, 7%, 75%, 0.15);\n  --tp-input-foreground-color: hsla(230, 7%, 75%, 1.00);\n  --tp-label-foreground-color: hsla(230, 7%, 75%, 0.70);\n  --tp-monitor-background-color: hsla(230, 7%, 0%, 0.20);\n  --tp-monitor-foreground-color: hsla(230, 7%, 75%, 0.70);\n}\n\n/* ============================================================================================== */\n/*                                                                                                */\n/* Copyright 2022 Kris HEYSE                                                                      */\n/*                                                                                                */\n/* Licensed under the Apache License, Version 2.0 (the \"License\");                                */\n/* you may not use this file except in compliance with the License.                               */\n/* You may obtain a copy of the License at                                                        */\n/*                                                                                                */\n/* http://www.apache.org/licenses/LICENSE-2.0                                                     */\n/*                                                                                                */\n/* Unless required by applicable law or agreed to in writing, software                            */\n/* distributed under the License is distributed on an \"AS IS\" BASIS,                              */\n/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                       */\n/* See the License for the specific language governing permissions and                            */\n/* limitations under the License.                                                                 */\n/*                                                                                                */\n/* ============================================================================================== */\n*,\n::after,\n::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  outline: 0;\n}\n\nhtml {\n  font-family: var(--font-family-sans);\n  font-size: 16px;\n}\n\nhtml,\nbody {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n\nbody {\n  -webkit-overflow-scrolling: touch;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg,\nsvg,\nvideo,\ncanvas {\n  display: block;\n  font-size: 0;\n}\n\nimg,\nvideo {\n  height: auto !important;\n  max-width: 100% !important;\n}\n\n/* ============================================================================================== */\n/*                                                                                                */\n/* Copyright 2022 Kris HEYSE                                                                      */\n/*                                                                                                */\n/* Licensed under the Apache License, Version 2.0 (the \"License\");                                */\n/* you may not use this file except in compliance with the License.                               */\n/* You may obtain a copy of the License at                                                        */\n/*                                                                                                */\n/* http://www.apache.org/licenses/LICENSE-2.0                                                     */\n/*                                                                                                */\n/* Unless required by applicable law or agreed to in writing, software                            */\n/* distributed under the License is distributed on an \"AS IS\" BASIS,                              */\n/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                       */\n/* See the License for the specific language governing permissions and                            */\n/* limitations under the License.                                                                 */\n/*                                                                                                */\n/* ============================================================================================== */\n.artworks {\n  height: 100%;\n  display: grid;\n  grid-gap: var(--multiple-artwork-gap-size);\n  grid-template-columns: 2fr 2fr;\n}\n\n.artwork-wrapper {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\n\n.artwork {\n  flex: 1;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  background-color: var(--wallpaper-background);\n}\n.artwork .canvas {\n  position: absolute;\n}\n.artwork div.p5Canvas {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.artwork-wrapper:last-child:nth-last-child(odd) {\n  grid-column: auto/span 2;\n}\n\n.artwork-wrapper:first-child:nth-last-child(even),\n.artwork-wrapper:first-child:nth-last-child(even) ~ .artwork-wrapper {\n  grid-column: auto/span 1;\n}\n\n/* ============================================================================================== */\n/*                                                                                                */\n/* Copyright 2022 Kris HEYSE                                                                      */\n/*                                                                                                */\n/* Licensed under the Apache License, Version 2.0 (the \"License\");                                */\n/* you may not use this file except in compliance with the License.                               */\n/* You may obtain a copy of the License at                                                        */\n/*                                                                                                */\n/* http://www.apache.org/licenses/LICENSE-2.0                                                     */\n/*                                                                                                */\n/* Unless required by applicable law or agreed to in writing, software                            */\n/* distributed under the License is distributed on an \"AS IS\" BASIS,                              */\n/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                       */\n/* See the License for the specific language governing permissions and                            */\n/* limitations under the License.                                                                 */\n/*                                                                                                */\n/* ============================================================================================== */\n.xy-wrapper {\n  position: absolute;\n  height: var(--xy-wrapper-height);\n  right: 0;\n  bottom: 0;\n  left: 0;\n  user-select: none;\n  z-index: 10;\n}\n\n.xy-pane {\n  background-color: var(--xy-pane-bgcolor);\n  font-size: var(--xy-pane-font-size);\n  text-align: center;\n  white-space: nowrap;\n  position: absolute;\n  bottom: 0;\n  transform: translateY(100%);\n  opacity: 0;\n  transition: transform 300ms, opacity 1000ms;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: var(--xy-pane-gap);\n  width: 100%;\n  height: 100%;\n}\n.xy-pane.shown {\n  transition-delay: 0ms;\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.xy-group {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: var(--font-family-mono);\n  box-shadow: var(--xy-pane-box-shadow);\n  border-radius: var(--xy-pane-border-radius);\n}\n.xy-group.units .label {\n  padding-left: 0.75rem;\n  border-radius: var(--xy-pane-border-radius) 0 0 var(--xy-pane-border-radius);\n}\n.xy-group.units .info {\n  width: var(--xy-pane-info-width);\n  border-radius: 0;\n}\n.xy-group.pixels .label {\n  padding-right: 0.75rem;\n  border-radius: 0 var(--xy-pane-border-radius) var(--xy-pane-border-radius) 0;\n}\n.xy-group.pixels .info {\n  width: var(--xy-pane-info-width);\n  border-radius: 0;\n}\n.xy-group .label,\n.xy-group .info {\n  padding: var(--xy-pane-padding);\n}\n.xy-group .label {\n  background-color: var(--xy-pane-label-bgcolor);\n  color: var(--xy-pane-label-color);\n}\n.xy-group .info {\n  background-color: var(--xy-pane-info-bgcolor);\n  color: var(--xy-pane-info-color);\n}");

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

                    this.__props = { ...this.DEFAULT_ARTWORK_PROPS, ...arg2 };

                    if (arg1.toUpperCase() in this.PAPER_SIZE) {

                        sizeArray = this.PAPER_SIZE[arg1.toUpperCase()];

                    } else {

                        throw new Error('Invalid size argument');
                    }

                } else {

                    this.__props = { ...this.DEFAULT_ARTWORK_PROPS, ...arg3 };
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
                    : this.__seed;
                    // : Math.floor(Math.random() * (10000 - 1000) + 1000);

                this.__simplexSeed = this.__props.simplexSeed
                    ? this.__props.simplexSeed
                    : this.__seed;
                    // : Math.floor(Math.random() * (10000 - 1000) + 1000);

                this.__wallpaperBackground = this.__props.wallpaperBackground;
                this.__canvasColor = this.__props.canvasColor;

                this.__outputFileName = this.__props.outputFileName;
                this.__saveInfoText = this.__props.saveInfoText;

                this.__xyDisplay = this.__props.xyDisplay;
                this.__xyDecimals = this.__props.xyDecimals;

                this.__multiLoopSteps = this.__props.multiLoopSteps;
                this.__initialNumberOfLoops = this.__props.initialNumberOfLoops;

                this.__cmdHotKeys = { ...this.DEFAULT_COMMAND_HOT_KEYS, ...this.__props.commandHotKeys };
                
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

                $_resizeCanvas.call(this, this.__cvsPxWidth, this.__cvsPxHeight, noRedraw);
        
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
        }
        
    }(p5.prototype.randomSeed);


    // noiseSeed

    p5.prototype.noiseSeed = function($_noiseSeed) {

        return function(s) {

            $_noiseSeed.call(this, s);
            this.__noiseSeed = s;
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

    /* ============================================================================================== */
    /*                                                                                                */
    /* Copyright 2022 Kris HEYSE                                                                      */
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


    // EXTENSION
    // =================================================================================================

    const constants = {

        // default hotkeys

        DEFAULT_COMMAND_HOT_KEYS: {

            // loop
            cmdLoop: 'Alt+Shift+L',
            cmdLoopStep: '+',
            cmdLoopMultiSteps: '*',
        
            // zoom
            cmdZoomFit: 'Alt+Shift+F',
            cmdZoomOne: 'Alt+Shift+O',
            cmdZoomMax: 'Alt+Shift+M',
        
            // show/hide coordinates
            cmdShowCoordinates: 'Alt+Shift+C',
        
            // show/hide shadow
            cmdShowShadow: 'Alt+Shift+S',
        
            // export
            cmdExport: 'Alt+Shift+E',
        },

        
        // default artwork properties

        DEFAULT_ARTWORK_PROPS: {

            renderer: 'p2d',        // string: renderer => 'p2d', 'svg', 'webgl'
        
            orientation: null,      // string: 'unchanged' (no change) | 'landscape' | 'portrait'
                                    
            drawingUnits: 'mm',     // string: 'px' | 'mm' | 'cm' | 'in'
        
            exportPPI: 300,         // number: export resolution
            
            zoomMax: 5.0,           // number: maximum zoom
            zoomMin: 0.1,           // number: minimum zoom => can change to fit on screen
            zoomInc: 0.01,          // number: zoom / scroll step size
        
            screenPPI: 96,          // number: screen resolution (be aware of pixel density)
            screenPadding: '15mm',  // string: space between artwork and window/screen border
        
            shadowVisible: true,                    // boolean: shadow visible
            shadowColor: 'rgba(64, 64, 64, 0.5)',   // string: shadow color (css notation)
            shadowX: '0mm',                         // string: eg: '1cm' | 10mm
            shadowY: '6mm',                         // string: eg: '0.4in' | 10mm
            shadowBlur: '5mm',                      // string: eg: '5mm'
        
            wallpaperBackground: '#888888',         // string: artwork container background
            canvasColor: 'none',                    // string: svg element color (not exported)
        
            outputFileName: 'aw-S@seed-D@date-L@loops', // string: output file name
                                                        // @seed == current seed value
                                                        // @date == date & time
                                                        // @loops == number of loops made (frameCount)
                                                        // eg: artwork-@seed-@date-@loops
                                                        // =>  name    seed   date    time  loops
                                                        // =>  artwork-1234-20190513-161132-10000
        
            saveInfoText: false,    // if true, save text file with info about the artwork
                                    // contains: width, height, resolution, seed, noiseSeed, ...
                        
            xyDisplay: true,        // boolean: display mouse coordinates on artwork hover
            xyDecimals: 2,          // number: number of decimals for mouse cooordinates display
        
            seed: null,             // number: random seed (null == random seed number)
            noiseSeed: null,        // number: noise seed (null == random seed number) 
            simplexSeed: null,      // number: simplex seed (null = random seed number)
        
            multiLoopSteps: 10,     // number: number of loops for multi loop => key: alt + X
        
            disableFriendlyErrors: true,    // boolean: friendly errors or not
        
            commandHotKeys: {},             // object: see const DEFAULT_COMMAND_HOT_KEYS
        },
        

        // svg headers / namespaces

        SVG_NS: 'http://www.w3.org/2000/svg',
        SVG_VERSION: '1.1',
        SVG_XLINK: 'http://www.w3.org/1999/xlink',
        SVG_XMLNS: 'http://www.w3.org/2000/xmlns/',
        XML_HEADER: '<?xml version="1.0"?>'
    };

    /* ============================================================================================== */
    /*                                                                                                */
    /* Copyright 2022 Kris HEYSE                                                                      */
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


    // EXTENSION
    // =================================================================================================

    const core = {

        __toUnits(val, toUnits = 'px', resolution = 96) {
        
            const valObject = this.__splitCssValue(val + '');

            if (!valObject.units) valObject.units = this.__units;

            return  this.__convertUnits(
                valObject.value,
                valObject.units || this.__units,
                toUnits,
                resolution
            );
        },

        __initArtwork() {

            let artworks = document.querySelector('.artworks');

            // remove comments only once
            // no matter how many artworks you have
            if (!p5.__art_comments_removed) {
        
                this.__removeComments(document.documentElement);
                p5.__art_comments_removed = true;
            }    

            if (this._userNode) {
                
                // this.__aw = this._userNode;
                // if (!artworks) this.__aw.parentElement.classList.add('artworks');

                throw new Error('User node is not supported.');
                
            } else {
                
                this.__aw = document.createElement('div');

                if (!artworks) {
                                    
                    artworks = document.createElement('div');
                    artworks.classList.add('artworks');
                    document.body.appendChild(artworks);                
                }
            }

            this.__awWrapper = document.createElement('div');
            this.__awWrapper.id = `artwork-wrapper${this.__idx}`;
            this.__awWrapper.classList.add('artwork-wrapper');

            if (!this.__aw.id) this.__aw.id = `artwork${this.__idx}`;
            this.__aw.classList.add('artwork');
            this.__aw.style.background = this.__wallpaperBackground;

            this.__awWrapper.appendChild(this.__aw);
            
            artworks.appendChild(this.__awWrapper);
        },

        __initUnitScale() {
        
            if (this.__units === 'mm') {
                this.__uMult = this.__exportPPI / 25.4;
            } else if (this.__units === 'cm') {
                this.__uMult = this.__exportPPI / 2.54;
            } else if (this.__units === 'in') {
                this.__uMult = this.__exportPPI;
            } else {
                this.__uMult = 1;
            }

            this.__unitScale = this.__uMult;
            this.__cvsPxWidth = Math.round(this.__cvsWidth * this.__uMult);
            this.__cvsPxHeight = Math.round(this.__cvsHeight * this.__uMult);
            this.__pxScreenPadding = Math.round(this.__toUnits(this.__screenPadding, 'px', this.__cssScreenPPI));
        },

        __initPanZoom() {
        
            const awWidth = this.__aw.offsetWidth;
            const awHeight = this.__aw.offsetHeight;
            const kw = (awWidth - 2 * this.__pxScreenPadding) / this.__cvsPxWidth;
            const kh = (awHeight - 2 * this.__pxScreenPadding) / this.__cvsPxHeight;

            this.__zoomMinScaled = Math.min(this.__zoomMin, this.__zoomMin / this.__exportPPI * this.__cssScreenPPI);
            this.__zoomMaxScaled = Math.min(this.__zoomMax, this.__zoomMax / this.__exportPPI * this.__cssScreenPPI);
            
            this.__zoomFit = Math.min(this.__zoomMaxScaled, Math.min(kw, kh));
            this.__zoomMinCurrent = this.__zoomFit < this.__zoomMinScaled ? this.__zoomFit : this.__zoomMinScaled;
                    
            // *** fit if canvas is larger then window. if smaller stay at zoom 1 (one)
            this.__zoomFit = Math.min(1 / this.__exportPPI * this.__cssScreenPPI, this.__zoomFit);

            // *** always fit; enlarge if canvas is smaller then window
            // this.__zoomMaxScaled = Math.max(this.__zoomMaxScaled, this.__zoomFit);
            
            this.__zoom = this.__zoomFit;

            this.__scaleArtwork();
            this.__positionArtwork();
        },

        __scaleArtwork() {

            // 
            // TODO: use transform => scale
            //       it's not gone make a noticeable difference (did it in other project), 
            //       so it's not for the near future ;p
            // 
            
            this.__cvs.style.width = this.__cvsPxWidth * this.__zoom + 'px';
            this.__cvs.style.height = this.__cvsPxHeight * this.__zoom + 'px';

            if (this.__shadowVisible) {

                this.__drawShadow();
            }
        },

        __positionArtwork(left, top) {

            // 
            // TODO: use transform => translate
            //       it's not gone make a noticeable difference (did it in other project),
            //       so it's not for the near future ;p
            //

            if (!(left || top)) {

                this.__cvs.style.left = (this.__aw.offsetWidth - this.__cvsPxWidth * this.__zoom) / 2 + 'px';
                this.__cvs.style.top = (this.__aw.offsetHeight - this.__cvsPxHeight * this.__zoom) / 2 + 'px';

            } else {

                this.__cvs.style.left = left + 'px';
                this.__cvs.style.top = top + 'px';
            }
        },

        __initMouseEventListeners() {
        
            const waitForFinalEvent = (() => {

                // SOURCE :
                // https://gist.github.com/mazell/289e13ccf01759fcb921

                let timers = {};

                return function (callback, ms, uniqueId) {
                    if (!uniqueId) { uniqueId = 'Don\'t call this twice without a uniqueId'; }
                    if (timers[uniqueId]) { clearTimeout(timers[uniqueId]); }
                    timers[uniqueId] = setTimeout(callback, ms);
                };

            })();

            window.addEventListener('resize', (ev) => {

                waitForFinalEvent(this.__onFinalWindowResize.bind(this, ev), 500, 'unique resize key Artwork.js');
            });

            this.__cvs.addEventListener('mousemove', this.__onMouseMove.bind(this));
            this.__cvs.addEventListener('mousedown', this.__onMouseDown.bind(this));
            this.__cvs.addEventListener('mouseup', this.__onMouseUpOrLeave.bind(this));
            this.__cvs.addEventListener('wheel', this.__onMouseWheel.bind(this));

            // should you have more then one artwork on screen
            this.__aw.addEventListener('mouseover', () => this.__hasMouseFocus = true);
            this.__aw.addEventListener('mouseout', () => this.__hasMouseFocus = false);
        },

        __onFinalWindowResize(ev) {

            this.__initPanZoom();
        },

        __onMouseMove(ev) {

            const rect = this.__cvs.getBoundingClientRect();
            const cvsScale = this.__cvsPxWidth / rect.width;

            this.__mouseX = (ev.clientX - rect.left) * cvsScale / this.__uMult;
            this.__mouseY = (ev.clientY - rect.top) * cvsScale / this.__uMult;
        },

        __onMouseDown(ev) {

            this.__mouseDown = true;

            this.__cvs.style.cursor = 'grabbing';
            
            this.__cvsStartPos = this.__getElementPosition(this.__cvs);
            this.__mouseStartDragX = ev.clientX;
            this.__mouseStartDragY = ev.clientY;

            this.__cvs.addEventListener('mousemove', this.__onMouseDragged.bind(this));
            this.__cvs.addEventListener('mouseleave', this.__onMouseUpOrLeave.bind(this));
        },

        __getElementPosition(el) {

            let elDim = window.getComputedStyle(el);
            let elX = parseFloat(elDim.getPropertyValue('left'));
            let elY = parseFloat(elDim.getPropertyValue('top'));
            
            return { x: elX, y: elY };
        },

        __onMouseDragged(ev) {

            if (this.__mouseDown === true) {

                let left = this.__cvsStartPos.x + (ev.clientX - this.__mouseStartDragX);
                let top = this.__cvsStartPos.y + (ev.clientY - this.__mouseStartDragY);

                this.__mouseDragging = true;

                this.__positionArtwork(left, top);
            }
        },

        __onMouseUpOrLeave(ev) {

            this.__cvs.style.cursor = 'auto';

            if (this.__mouseDragging === true) {

                this.__cvs.removeEventListener('mousemove', this.__onMouseDragged);
                this.__cvs.removeEventListener('mouseleave', this.__onMouseUpOrLeave);
            }

            this.__mouseDown = false;
            this.__mouseDragging = false;
        },

        __onMouseWheel(ev) {

            this.__zoomInOut(ev, ev.offsetX, ev.offsetY);
        },

        __zoomInOut(ev, mX, mY) {

            let cssStyles = window.getComputedStyle(this.__cvs);
            let cvsW = parseFloat(cssStyles.getPropertyValue('width'));
            let cvsH = parseFloat(cssStyles.getPropertyValue('height'));

            let zoomInc = this.__zoomInc;
            let oldZoom = this.__zoom;
            let pctLeft = mX ? mX / cvsW : undefined;
            let pctTop = mY ? mY / cvsH : undefined;
            let pos = this.__getElementPosition(this.__cvs);
            let newLeft, newTop;

            if (ev) {

                ev.preventDefault();

                if (ev.ctrlKey) {
                    zoomInc *= 2;
                }

                if (ev.altKey) {
                    zoomInc *= 0.25;
                }

                if (ev.deltaY > 0) {

                    // zoom out
                    
                    if (this.__zoom > this.__zoomMinCurrent / this.__exportPPI * this.__cssScreenPPI) {
                        
                        this.__zoom = Math.max(this.__zoomMinCurrent, this.__zoom - zoomInc);
                    }

                } else if (ev.deltaY < 0) {

                    // zoom in

                    if (this.__zoom < this.__zoomMaxScaled) {

                        this.__zoom = Math.min(this.__zoomMaxScaled, this.__zoom + zoomInc);
                    }
                }
            }

            newLeft = pos.x + (this.__cvsPxWidth * oldZoom - this.__cvsPxWidth * this.__zoom) * pctLeft;
            newTop = pos.y + (this.__cvsPxHeight * oldZoom - this.__cvsPxHeight * this.__zoom) * pctTop;
            
            this.__scaleArtwork();
            this.__positionArtwork(newLeft, newTop);
        },

        __initShadow() {

            if (this.__shadowVisible) {

                this.__drawShadow();
            }
        },

        __drawShadow() {

            const scale = this.__exportPPI / this.__cssScreenPPI;        

            const u = this.__units;
            const sX = this.__shadowX * this.__zoom * scale;
            const sY = this.__shadowY * this.__zoom * scale;
            const sBlur = this.__shadowBlur;

            this.__cvs.style.boxShadow = `${sX}${u} ${sY}${u} ${sBlur}${u} ${this.__shadowColor}`;
        },

        __clearShadow() {

            this.__cvs.style.boxShadow = 'none';
        },

        __setGlobalProperties() {

            this._setProperty('width', this.__cvsWidth);
            this._setProperty('height', this.__cvsHeight);
            this._setProperty('pixelWidth', this.__cvsPxWidth);
            this._setProperty('pixelHeight', this.__cvsPxHeight);
            this._setProperty('units', this.__units);
            this._setProperty('drawingUnits', this.__units);
            this._setProperty('exportPPI', this.__exportPPI);
            this._setProperty('index', this.__idx);
        },


        // =============================================================================================
        // =============================================================================================

        toggleLoop() { this.__cmdLoop(); },

        // convertUnits(297, 'mm', 'px') => 3507.874 @ 300ppi
        convertUnits(value, fromUnits, toUnits) {
        
            return this.__toUnits(value + fromUnits, toUnits, this.__exportPPI);
        },

        mm2px(mm)   { return this.__toUnits(mm   + 'mm',         'px', this.__exportPPI); },
        cm2px(cm)   { return this.__toUnits(cm   + 'cm',         'px', this.__exportPPI); },
        in2px(inch) { return this.__toUnits(inch + 'in',         'px', this.__exportPPI); },
        px2mm(px)   { return this.__toUnits(px   + 'px',         'mm', this.__exportPPI); },
        px2cm(px)   { return this.__toUnits(px   + 'px',         'cm', this.__exportPPI); },
        px2in(px)   { return this.__toUnits(px   + this.__units, 'in', this.__exportPPI); }    

    };

    var name = "p5.plus";
    var version = "0.2.0";
    var description = "p5.js plugin to help creating static generative art";
    var scripts = {
    	prebuild: "rm -rf lib",
    	build: "NODE_ENV=production rollup -c",
    	watch: "rollup -c -w"
    };
    var browserslist = {
    	production: [
    		">0.2%",
    		"not dead",
    		"not op_mini all",
    		"last 5 versions"
    	],
    	development: [
    		"last 1 chrome version",
    		"last 1 firefox version",
    		"last 1 safari version"
    	]
    };
    var keywords = [
    	"art",
    	"artwork",
    	"canvas",
    	"coding",
    	"creative",
    	"generative",
    	"p5",
    	"p5.js",
    	"plus",
    	"printable",
    	"rollup",
    	"svg",
    	"static",
    	"tinykeys",
    	"tweakpane"
    ];
    var author = "Kris HEYSE";
    var license = "Apache 2.0";
    var devDependencies = {
    	"@rollup/plugin-commonjs": "^22.0.1",
    	"@rollup/plugin-json": "^4.1.0",
    	"@rollup/plugin-node-resolve": "^13.3.0",
    	"postcss-preset-env": "^7.7.2",
    	"rollup-plugin-postcss": "^4.0.2",
    	"rollup-plugin-sass": "^1.2.12",
    	"rollup-plugin-terser": "^7.0.2"
    };
    var dependencies = {
    	tinykeys: "^1.4.0"
    };
    var pkg = {
    	name: name,
    	version: version,
    	description: description,
    	scripts: scripts,
    	browserslist: browserslist,
    	keywords: keywords,
    	author: author,
    	license: license,
    	devDependencies: devDependencies,
    	dependencies: dependencies
    };

    /* ============================================================================================== */


    // EXTENSION
    // =================================================================================================

    const info = {

        __startTm: 0,

        // ---------------------------------------------------------------------------------------------

        printArtworkInfo() {

            if (this.__printInfo) {
        
                console.log(this.getInfoText());
                this.__printInfo = this._loop ? false : true;
            }
        },

        getInfoText() {

            const pre = '=>';

            const renderType =   this.__renderer === this.SVG ? 'svg' :
                                (this.__renderer === this.WEBGL ? 'webgl' : 'canvas');

            const txt = `${pre} p5.plus version.......... : ${pkg.version} \n` +

                        `${pre} Artwork ID............... : #${this.__aw.id} \n` +

                        `${pre} Render type.............. : ${renderType} \n` +

                        `${pre} Canvas width / height.... : ` +
                        `${this.__cvsWidth.toLocaleString(undefined, { minimumFractionDigits: this.__xyDecimals, maximumFractionDigits: this.__xyDecimals })}${this.__units} / ` +
                        `${this.__cvsHeight.toLocaleString(undefined, { minimumFractionDigits: this.__xyDecimals, maximumFractionDigits: this.__xyDecimals })}${this.__units} -- ` +
                        `${this.__cvsPxWidth.toLocaleString()}px / ${this.__cvsPxHeight.toLocaleString()}px\n` +

                        `${pre} Screen resolution........ : ${this.__cssScreenPPI} \n` +

                        `${pre} Export resolution........ : ${this.__exportPPI} \n` +

                        `${pre} Seed..................... : ${this.__seed}\n` +
                        `${pre} Noise Seed............... : ${this.__noiseSeed}\n` +
                        `${pre} Simplex Seed............. : ${this.__simplexSeed}\n` +
                        
                        `${pre} Loops made............... : ${Math.max(1, this.frameCount)}` +
                        
                        '\n\n';

            return txt;
        },

        startTimer() {

            if (!this.__startTm) {

                this.__startTm = parseInt(performance.now());
            }
        },

        stopTimer() {

            const msToTime = function (millis) {

                let m = '' + Math.floor(millis % 1000) + '';
                let S = '' + Math.floor((millis / 1000) % 60);
                let M = '' + Math.floor((millis / (1000 * 60)) % 60);
                let H = '' + Math.floor((millis / (1000 * 60 * 60)) % 24);

                m = m.padStart(3, '0');
                S = S.padStart(2, '0');
                M = M.padStart(2, '0');
                H = H.padStart(2, '0');

                return H + ':' + M + ':' + S + '.' + m;
            };

            if (this.__startTm) {

                let ms = parseInt(performance.now()) - this.__startTm;

                console.log('\n');
                console.log('~'.repeat(34));
                console.log('Duration (ms)    :'.padEnd(18), ('' + ms).padStart(12) + ' ms');
                console.log('Duration (HMS.m) :'.padEnd(18), (msToTime(ms)).padStart(12) + ' h');
                console.log('~'.repeat(34), '\n\n');

                this.__startTm = null;

            } else {

                console.log('You have to use startTimer() before stopTimer()');
            }
        }
    };

    /* ============================================================================================== */
    /*                                                                                                */
    /* Copyright 2022 Kris HEYSE                                                                      */
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


    // EXTENSION
    // =================================================================================================

    const output = {

        saveInfoTextToTXT(fileName) {

            let file = fileName === undefined ? 'artwork.txt' : fileName.toLowerCase();
            let ext = '.txt';
            let a = document.createElement('a');

            let blob = new Blob([this.getInfoText()], { type: 'text/plain' });

            document.body.appendChild(a);

            a.style.display = 'none';
            a.href = (window.webkitURL || window.URL).createObjectURL(blob);
            a.download = (file.endsWith(ext) ? file : file + ext);
            a.target = '_blank';
            a.click();
            a.remove();
        },

        saveToSVG(svgNode, fileName) {

            const URLObj = window.URL || window.webkitURL;
            const file = fileName === undefined ? 'artwork.svg' : fileName;
            const ext = '.svg';
            
            const svgNodeClone = svgNode.cloneNode(true);

            let serializer;
            let svgData;
            let blob;
            let link;
            let url;

            // remove styles
            // remove x and y values
            svgNodeClone.removeAttributeNS(null, 'style');
            svgNodeClone.removeAttributeNS(null, 'x');
            svgNodeClone.removeAttributeNS(null, 'y');

            // make blob
            serializer = new XMLSerializer();
            svgData = this.XML_HEADER + serializer.serializeToString(svgNodeClone);

            // clip-path hack
            // this : style="clip-path: url("#artwork-clipPath");"
            //      : style="clip-path: url(&quot;#artwork-clipPath&quot;);"
            //
            // changes to this : style="clip-path: url(#artwork-clipPath);"
            svgData = svgData.replace(/&quot;/g, '');

            blob = new Blob([svgData], { 'type': 'image/svg+xml' });
            url = URLObj.createObjectURL(blob);
            
            link = document.createElement('a');
            document.body.appendChild(link);
            link.type = 'image/svg+xml';
            link.style = 'display: none;';
            link.href = url;
            link.download = file.endsWith(ext) ? file : file + ext;
            link.target = '_blank';
            link.click();
            link.remove();

            URLObj.revokeObjectURL(url);

            return this;
        }
    };

    /* ============================================================================================== */
    /*                                                                                                */
    /* Copyright 2022 Kris HEYSE                                                                      */
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


    // EXTENSION
    // =================================================================================================

    const paperSize = {

        PAPER_SIZE: {

            '4A0': ['1682mm', '2378mm'],
            '2A0': ['1189mm', '1682mm'],
            'A0': ['841mm', '1189mm'],
            'A1': ['594mm', '841mm'],
            'A2': ['420mm', '594mm'],
            'A3': ['297mm', '420mm'],
            'A4': ['210mm', '297mm'],
            'A5': ['148mm', '210mm'],
            'A6': ['105mm', '148mm'],
            'A7': ['74mm', '105mm'],
            'A8': ['52mm', '74mm'],
            'A9': ['37mm', '52mm'],
            'A10': ['26mm', '37mm'],

            'B0': ['1000mm', '1414mm'],
            'B1': ['707mm', '1000mm'],
            'B2': ['500mm', '707mm'],
            'B3': ['353mm', '500mm'],
            'B4': ['250mm', '353mm'],
            'B5': ['176mm', '250mm'],
            'B6': ['125mm', '176mm'],
            'B7': ['88mm', '125mm'],
            'B8': ['62mm', '88mm'],
            'B9': ['44mm', '62mm'],
            'B10': ['31mm', '44mm'],

            'C0': ['917mm', '1297mm'],
            'C1': ['648mm', '917mm'],
            'C2': ['458mm', '648mm'],
            'C3': ['324mm', '458mm'],
            'C4': ['229mm', '324mm'],
            'C5': ['162mm', '229mm'],
            'C6': ['114mm', '162mm'],
            'C7': ['81mm', '114mm'],
            'C8': ['57mm', '81mm'],
            'C9': ['40mm', '57mm'],
            'C10': ['28mm', '40mm'],

            'LEDGER': ['11in', '17in'],
            'LEGAL': ['8.5in', '14in'],
            'LETTER': ['8.5in', '11in'],
            'JUNIOR': ['5in', '8in'],

            'ANSIA': ['8.5in', '11.0in'],
            'ANSIB': ['11.0in', '17.0in'],
            'ANSIC': ['17.0in', '22.0in'],
            'ANSID': ['22.0in', '34.0in'],
            'ANSIE': ['34.0in', '44.0in'],

            'ARCHA': ['9.0in', '12.0in'],
            'ARCHB': ['12.0in', '18.0in'],
            'ARCHC': ['18.0in', '24.0in'],
            'ARCHD': ['24.0in', '36.0in'],
            'ARCHE': ['36.0in', '48.0in'],
            'ARCHE1': ['30.0in', '42.0in']
        }
    };

    /*
    ====================================================================================================

    SIMPLEX NOISE ADAPTATION

    ORIGINAL SOURCE CODE : https://github.com/josephg/noisejs
    LICENSE              : ISC
    COPYRIGHT            : (c) 2013, Joseph Gentle

    ====================================================================================================

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
    IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
    FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
    IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
    THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    ====================================================================================================
    */


    // EXTENSION
    // =================================================================================================

    /* AVAILABLE METHODS
    *
    * noiseSeed(seed)   // seed noise functionality
    * simplex2(x, y)    // 2d simplex noise
    * simplex3(x, y, z) // 3d simplex noise
    * 
    */

    const simplex = { __simplexSeed: null }

    // ORIGINAL SOURCE (see !!! for changes )
    // !!! removed perlin noise methods
    // -------------------------------------------------------------------------------------------------

    ;(function(global) {

        /*
         * A speed-improved perlin and simplex noise algorithms for 2D.
         *
         * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
         * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
         * Better rank ordering method by Stefan Gustavson in 2012.
         * Converted to Javascript by Joseph Gentle.
         *
         * Version 2012-03-09
         *
         * This code was placed in the public domain by its original author,
         * Stefan Gustavson. You may use it as you see fit, but
         * attribution is appreciated.
         *
         */

        var module = global; // !!! original: global.noise = {}
        
        function Grad(x, y, z) {

            this.x = x; this.y = y; this.z = z;
        }
        
        Grad.prototype.dot2 = function(x, y) {

            return this.x*x + this.y*y;
        };
        
        Grad.prototype.dot3 = function(x, y, z) {

            return this.x*x + this.y*y + this.z*z;
        };
        
        var grad3 = [

            new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
            new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
            new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)
        ];
        
        var p = [

            151,160,137,91,90,15,
            131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
            190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
            88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
            77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
            102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
            135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
            5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
            223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
            129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
            251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
            49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
            138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
        ];
        
        // To remove the need for index wrapping, double the permutation table length
        var perm = new Array(512);
        var gradP = new Array(512);
        
        // This isn't a very good seeding function, but it works ok. It supports 2^16
        // different seed values. Write something better if you need more seeds.
        module.simplexSeed = function(seed) {

            // !!! added to use in info
            this.__simplexSeed = seed;

            if(seed > 0 && seed < 1) {
            
                // Scale the seed out
                seed *= 65536;
            }
        
            seed = Math.floor(seed);

            if(seed < 256) {

                seed |= seed << 8;
            }
        
            for(var i = 0; i < 256; i++) {

                var v;

                if (i & 1) {
                
                    v = p[i] ^ (seed & 255);
                
                } else {
                
                    v = p[i] ^ ((seed>>8) & 255);
                }
        
                perm[i] = perm[i + 256] = v;
                gradP[i] = gradP[i + 256] = grad3[v % 12];
            }
        };
        
        module.simplexSeed(0);
        
        // Skewing and unskewing factors for 2, 3, and 4 dimensions
        var F2 = 0.5*(Math.sqrt(3)-1);
        var G2 = (3-Math.sqrt(3))/6;
        
        var F3 = 1/3;
        var G3 = 1/6;
        
        // 2D simplex noise
        module.simplex2 = function(xin, yin) {

            var n0, n1, n2; // Noise contributions from the three corners
            // Skew the input space to determine which simplex cell we're in
            var s = (xin+yin)*F2; // Hairy factor for 2D
            var i = Math.floor(xin+s);
            var j = Math.floor(yin+s);
            var t = (i+j)*G2;
            var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
            var y0 = yin-j+t;
            // For the 2D case, the simplex shape is an equilateral triangle.
            // Determine which simplex we are in.
            var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
            
            if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)

                i1=1; j1=0;

            } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)

                i1=0; j1=1;
            }
            // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
            // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
            // c = (3-sqrt(3))/6
            var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
            var y1 = y0 - j1 + G2;
            var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
            var y2 = y0 - 1 + 2 * G2;
            // Work out the hashed gradient indices of the three simplex corners
            i &= 255;
            j &= 255;
            var gi0 = gradP[i+perm[j]];
            var gi1 = gradP[i+i1+perm[j+j1]];
            var gi2 = gradP[i+1+perm[j+1]];
            // Calculate the contribution from the three corners
            var t0 = 0.5 - x0*x0-y0*y0;

            if(t0<0) {

                n0 = 0;

            } else {

                t0 *= t0;
                n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
            }

            var t1 = 0.5 - x1*x1-y1*y1;

            if(t1<0) {
            
                n1 = 0;
            
            } else {
            
                t1 *= t1;
                n1 = t1 * t1 * gi1.dot2(x1, y1);
            }
            
            var t2 = 0.5 - x2*x2-y2*y2;
            
            if(t2<0) {
            
                n2 = 0;
            
            } else {
            
                t2 *= t2;
                n2 = t2 * t2 * gi2.dot2(x2, y2);
            }

            // Add contributions from each corner to get the final noise value.
            // The result is scaled to return values in the interval [-1,1].
            return 70 * (n0 + n1 + n2);
        };
        
          // 3D simplex noise
        module.simplex3 = function(xin, yin, zin) {
            
            var n0, n1, n2, n3; // Noise contributions from the four corners
        
            // Skew the input space to determine which simplex cell we're in
            var s = (xin+yin+zin)*F3; // Hairy factor for 2D
            var i = Math.floor(xin+s);
            var j = Math.floor(yin+s);
            var k = Math.floor(zin+s);
        
            var t = (i+j+k)*G3;
            var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
            var y0 = yin-j+t;
            var z0 = zin-k+t;
        
            // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
            // Determine which simplex we are in.
            var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
            var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
            
            if(x0 >= y0) {
            
                if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
                else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
                else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
            
            } else {
            
                if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
                else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
                else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
            }
            
            // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
            // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
            // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
            // c = 1/6.
            var x1 = x0 - i1 + G3; // Offsets for second corner
            var y1 = y0 - j1 + G3;
            var z1 = z0 - k1 + G3;
        
            var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
            var y2 = y0 - j2 + 2 * G3;
            var z2 = z0 - k2 + 2 * G3;
        
            var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
            var y3 = y0 - 1 + 3 * G3;
            var z3 = z0 - 1 + 3 * G3;
        
            // Work out the hashed gradient indices of the four simplex corners
            i &= 255;
            j &= 255;
            k &= 255;
            
            var gi0 = gradP[i+   perm[j+   perm[k   ]]];
            var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
            var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
            var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];
        
            // Calculate the contribution from the four corners
            var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
            
            if(t0<0) {
            
                n0 = 0;
            
            } else {
            
                t0 *= t0;
                n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
            }
            
            var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
            
            if(t1<0) {
            
                n1 = 0;
            
            } else {
            
                t1 *= t1;
                n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
            }
            
            var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
            
            if(t2<0) {
            
                n2 = 0;
            
            } else {
            
                t2 *= t2;
                n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
            }
            
            var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
            
            if(t3<0) {
            
                n3 = 0;
            
            } else {
            
                t3 *= t3;
                n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
            }
            
            // Add contributions from each corner to get the final noise value.
            // The result is scaled to return values in the interval [-1,1].
            return 32 * (n0 + n1 + n2 + n3);
        };
        
    })(simplex); // original: !!! })(this);

    /* ============================================================================================== */
    /*                                                                                                */
    /* Copyright 2022 Kris HEYSE                                                                      */
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


    // EXTENSION
    // =================================================================================================

    const utilities = {

        __removeComments(node) {

            // SOURCE:
            // https://www.sitepoint.com/removing-useless-nodes-from-the-dom/
        
            for (let n = 0; n < node.childNodes.length; n++) {
        
                let child = node.childNodes[n];
        
                if (child.nodeType === Node.COMMENT_NODE) { // 8
        
                    node.removeChild(child);
                    n--;
        
                } else if (child.nodeType === Node.ELEMENT_NODE) { // 1
        
                    this.__removeComments(child);
                }
            }
        },

        __splitCssValue(cssValue) {

            const arr = cssValue.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);
            return { cssValue: arr[0], value: arr[1], units: arr[2] };
        },

        __convertUnits(numValue, fromUnits, toUnits, resolution) {

            const unitTable = {

                'mm': {
                    'mm': 1.00,
                    'cm': 10.0,
                    'in': 25.4,
                    'px': 25.4 / resolution
                },

                'cm': {
                    'mm': 0.10,
                    'cm': 1.00,
                    'in': 2.54,
                    'px': 2.54 / resolution
                },

                'in': {
                    'mm': 1.00 / 25.4,
                    'cm': 1.00 / 2.54,
                    'in': 1.00,
                    'px': 1.00 / resolution
                },

                'px': {
                    'mm': resolution / 25.4,
                    'cm': resolution / 2.54,
                    'in': resolution,
                    'px': 1.00
                }
            };

            const retVal = numValue * unitTable[toUnits][fromUnits];

            if (retVal == undefined) {

                throw new Error('Resolution is required if you want to convert to/from pixels(px)');
            }

            return retVal;
        },

        __getHtmlFragment(htmlString) {
            
            // SOURCE:
            // https://love2dev.com/blog/inserting-html-using-createdocumentfragment-instead-of-using-jquery/

            let frag = document.createDocumentFragment();
            let temp = document.createElement('div');
        
            temp.innerHTML = htmlString;
        
            while (temp.firstChild) {
        
                frag.appendChild(temp.firstChild);
            }
        
            return (frag);
        },

        __getDateString() {

            let d = new Date();

            return d.getFullYear() +
                ('' + (d.getMonth() + 1)).padStart(2, '0') +
                ('' + d.getDate()).padStart(2, '0') + '-' +
                ('' + d.getHours()).padStart(2, '0') +
                ('' + d.getMinutes()).padStart(2, '0') +
                ('' + d.getSeconds()).padStart(2, '0');
        },

        __searchNodeByXPath(text, node = document, tag = 'div') {

            const xPath = `//${tag}[text()='${text}']`;
            return document.evaluate(xPath, node, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        },

        __searchNodeByText(text, node = document, tag = 'div') {

            let tags = node.getElementsByTagName(tag);
            let result;

            for (var i = 0; i < tags.length; i++) {
                if (tags[i].textContent == text) {
                    result = tags[i];
                    break;
                }
            }

            return result;
        },

        // ---------------------------------------------------------------------------------------------
        // ---------------------------------------------------------------------------------------------

        make2dArray(cols, rows) {

            const arr = new Array(rows);

            for (let x = 0; x < cols; x++) {
                arr[x] = new Array(cols);
            }
            
            // let counter = 1;
        
            // for (let y = 0; y < rows; y++) {
            //     for (let x = 0; x < cols; x++) {
            //         arr[x][y] = counter++;
            //     }
            // }
        
            return arr;
        },

        fill2dArray(arr, filler = 0) {

            const cols = arr.length;
            const rows = arr[0].length;

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    arr[x][y] = counter++;
                }
            }
        },

        countFill2dArray(arr, startVal = 0, step = 1) {

            const cols = arr.length;
            const rows = arr[0].length;

            let counter = startVal;

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    arr[x][y] = counter;
                    counter += step;
                }
            }
        },

        getFlatArray(inArray) {

            let size = 0;
        
            for (let i = 0; i < inArray.length; i++) {
        
                let current = inArray[i];
        
                for (let j = 0; j < current.length; j++) {
        
                    size++;
                }
            }
            
            let outArray = new Array(size);
            let k = 0;
        
            for (let i = 0; i < inArray.length; i++) {
        
                let current = inArray[i];
        
                for (let j = 0; j < current.length; j++) {
        
                    outArray[k++] = current[j];
                }
            }
        
            return outArray;
        }
    };

    var t=["Shift","Meta","Alt","Control"],e="object"==typeof navigator&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control";function n(t,e){return "function"==typeof t.getModifierState&&t.getModifierState(e)}function r(t){return t.trim().split(" ").map(function(t){var n=t.split(/\b\+/),r=n.pop();return [n=n.map(function(t){return "$mod"===t?e:t}),r]})}function o(e,o){var i;void 0===o&&(o={});var u=null!=(i=o.timeout)?i:1e3,a=Object.keys(e).map(function(t){return [r(t),e[t]]}),f=new Map,c=null;return function(e){e instanceof KeyboardEvent&&(a.forEach(function(r){var o=r[0],i=r[1],u=f.get(o)||o;!function(e,r){return !(r[1].toUpperCase()!==e.key.toUpperCase()&&r[1]!==e.code||r[0].find(function(t){return !n(e,t)})||t.find(function(t){return !r[0].includes(t)&&r[1]!==t&&n(e,t)}))}(e,u[0])?n(e,e.key)||f.delete(o):u.length>1?f.set(o,u.slice(1)):(f.delete(o),i(e));}),c&&clearTimeout(c),c=setTimeout(f.clear.bind(f),u));}}function i(t,e,n){var r;void 0===n&&(n={});var i=null!=(r=n.event)?r:"keydown",u=o(e,n);return t.addEventListener(i,u),function(){t.removeEventListener(i,u);}}

    /* ============================================================================================== */


    // EXTENSION
    // =================================================================================================

    const hotkeys = {

        __initHotKeys() {

            i(window, {

                [this.__cmdHotKeys.cmdLoop]: (e) => {

                    e.preventDefault();
                    if (this.__hasMouseFocus === true) this.__cmdLoop();
                },

                [this.__cmdHotKeys.cmdLoopStep]: (e) => {

                    e.preventDefault();
                    if (this.__hasMouseFocus === true) this.__cmdStep();
                },

                [this.__cmdHotKeys.cmdLoopMultiSteps]: (e) => {

                    e.preventDefault();
                    if (this.__hasMouseFocus === true) this.__cmdMultiStep();
                },

                [this.__cmdHotKeys.cmdShowCoordinates]: (e) => {

                    e.preventDefault();
                    if (this.__hasMouseFocus === true) this.__cmdDisplayCoordinates();
                },

                [this.__cmdHotKeys.cmdShowShadow]: (e) => {

                    e.preventDefault();
                    if (this.__hasMouseFocus === true) this.__cmdDisplayShadow();
                },

                [this.__cmdHotKeys.cmdZoomFit]: (e) => {

                    e.preventDefault();
                    if (this.__hasMouseFocus === true) this.__cmdZoomFit();
                },

                [this.__cmdHotKeys.cmdZoomOne]: (e) => {

                    e.preventDefault();
                    if (this.__hasMouseFocus === true) this.__cmdZoomOne();
                },

                [this.__cmdHotKeys.cmdZoomMax]: (e) => {

                    e.preventDefault();
                    if (this.__hasMouseFocus === true) this.__cmdZoomMax();
                },

                [this.__cmdHotKeys.cmdExport]: (e) => {

                    e.preventDefault();
                    if (this.__hasMouseFocus === true) this.__cmdExport();
                },

                [this.__cmdHotKeys.cmdFullScreen]: (e) => {

                    e.preventDefault();
                    if (this.__hasMouseFocus === true) this.__cmdFullScreen();
                }
            });
        }
    };

    /* ============================================================================================== */
    /*                                                                                                */
    /* Copyright 2022 Kris HEYSE                                                                      */
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


    // EXTENSION
    // =================================================================================================

    const commands = {

        __cmdLoop() {

            if (this.isLooping()) {

                this.noLoop();
                this.__printInfo = true;

            } else {

                this.__printInfo = false;
                this.loop();
            }

        },

        __cmdStep() {

            if (this._loop === false) {
                        
                this.redraw(1);
                this.__printInfo = true;
            }
        },

        __cmdMultiStep() {

            if (this._loop === false) {
                        
                this.redraw(this.__multiLoopSteps);
                this.__printInfo = true;
            }
        },

        __cmdExport() {

            if (this.__renderer === this.SVG) this.__cmdExportToSVG();
            else this.__cmdExportToPNG();
        },

        __cmdExportToPNG() {

            const fullName = this.__getFullName();

            if (this.__saveInfoText == true) this.saveInfoTextToTXT(fullName);
            this.save(fullName);
        },

        __cmdExportToSVG() {

            const fullName = this.__getFullName();

            if (this.__saveInfoText == true) this.saveInfoTextToTXT(fullName);
            this.saveToSVG(this.__cvs, fullName);
        },

        __cmdZoomFit() {

            this.__zoom = this.__zoomFit;
            this.__zoomInOut();
        },

        __cmdZoomOne() {

            this.__zoom = 1 / this.__exportPPI * this.__cssScreenPPI;
            this.__zoomInOut();
        },

        __cmdZoomMax() {

            this.__zoom = this.__zoomMaxScaled;
            this.__zoomInOut();
        },

        __cmdDisplayShadow() {

            if (this.__shadowVisible === true) {

                // this.__cbShadow.checked = false;

                this.__clearShadow();
                this.__shadowVisible = false;

            } else {

                // this.__cbShadow.checked = true;

                this.__drawShadow();
                this.__shadowVisible = true;
            }
        },

        __cmdDisplayCoordinates() {

            const xyWrapper = document.querySelector(`#${this.__aw.id} .xy-wrapper`);

            if (this.__xyDisplay === true) {

                xyWrapper.style.display = 'none';
                // this.__cbCoor.checked = false;
                this.__xyDisplay = false;
                this.__displayCoordinates();
                
            } else {
                
                xyWrapper.style.display = 'block';
                // this.__cbCoor.checked = true;
                this.__xyDisplay = true;
                this.__displayCoordinates();
            }
        },

        // ---------------------------------------------------------------------------------------------

        __getFullName() {

            let fullName = this.__outputFileName.replace('@date', this.__getDateString());
            fullName = fullName.replace('@seed', this.__seed);
            fullName = fullName.replace('@loops', this.frameCount);

            return fullName;
        },


        // not used yet, but hey ... 
        // ---------------------------------------------------------------------------------------------

        __openFullscreen(elem) {

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        },

        __closeFullscreen() {

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    };

    /* ============================================================================================== */
    /*                                                                                                */
    /* Copyright 2022 Kris HEYSE                                                                      */
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


    // EXTENSION
    // =================================================================================================

    const xyPane = {

        __initXYPane() {

            const html = `

            <div class="xy-wrapper">

                <div class="xy-pane">

                    <div class="xy-group units">
                        <div class="label">
                            <p>${this.__units}</p>
                        </div>
                        <div class="info">
                            <p class="units-xy"></p>
                        </div>
                    </div>

                    <div class="xy-group pixels">
                        <div class="info">
                            <p class="pixels-xy"></p>
                        </div>
                        <div class="label">
                            <p>px</p>
                        </div>
                    </div>

                </div>

            </div>
        `;
            
            this.__aw.append(this.__getHtmlFragment(html));
            this.__xyWrapper = document.querySelector(`#${this.__aw.id} .xy-wrapper`);
            this.__xyPanel = document.querySelector(`#${this.__aw.id} .xy-pane`);

            this.__cvs.addEventListener('mouseover', () => {
                if (this.__xyPanel) this.__xyPanel.classList.add('shown');
            });

            this.__cvs.addEventListener('mouseout', () => {
                if (this.__xyPanel) this.__xyPanel.classList.remove('shown');
            });

            this.__cvs.addEventListener('mousemove', this.__displayCoordinates.bind(this));

            this.__displayCoordinates();
        },

        __displayCoordinates() {

            if (this.__xyPanel.classList.contains('shown')) {

                const unitsX = this.__mouseX.toLocaleString(undefined, { minimumFractionDigits: this.__xyDecimals, maximumFractionDigits: this.__xyDecimals });
                const unitsY = this.__mouseY.toLocaleString(undefined, { minimumFractionDigits: this.__xyDecimals, maximumFractionDigits: this.__xyDecimals });
                const pixelsX = Math.round(this.__mouseX * this.__unitScale);
                const pixelsY = Math.round(this.__mouseY * this.__unitScale);

                const unitsCoor = document.querySelector(`#${this.__aw.id} .units-xy`);
                const pixelsCoor = document.querySelector(`#${this.__aw.id} .pixels-xy`);

                unitsCoor.innerText = `${unitsX}${this.__units} / ${unitsY}${this.__units}`;
                pixelsCoor.innerText = `${pixelsX.toLocaleString()}px / ${pixelsY.toLocaleString()}px`;
            }
        }
    };

    /* ============================================================================================== */


    // EXTENSIONS
    // =================================================================================================

    p5.extend(constants);
    p5.extend(core);
    p5.extend(info);
    p5.extend(output);
    p5.extend(paperSize);
    p5.extend(simplex);
    p5.extend(utilities);

    p5.extend(commands);
    p5.extend(hotkeys);
    p5.extend(xyPane);


    // OVERRIDES
    // =================================================================================================

    p5.prototype.simplexSeed = function($_simplexSeed) {

        return function(s) {

            $_simplexSeed.call(this, s);
            this.__simplexSeed = s;
        }
        
    }(p5.prototype.simplexSeed);

}));
