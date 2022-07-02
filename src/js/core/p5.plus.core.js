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

}


// EXPORT
// =================================================================================================

export { core };
