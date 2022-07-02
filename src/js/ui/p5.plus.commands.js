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
}


// EXPORTS
// =================================================================================================

export { commands };
