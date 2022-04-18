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


// IMPORTS
// =================================================================================================

import tinykeys from 'tinykeys';


// EXTENSION
// =================================================================================================

const hotkeys = {

    __initHotKeys() {

        tinykeys(window, {

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
}


// EXPORTS
// =================================================================================================

export { hotkeys };
