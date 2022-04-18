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

import pkg from '../../../package.json';


// EXTENSION
// =================================================================================================

const info = {

    __startTm: 0,

    // ---------------------------------------------------------------------------------------------

    printArtworkInfo() {

        if (this.__printInfo) {
    
            console.log(this.getInfoText());
            this.__printInfo = this._loop ? false : true;
            this.__updateLoops();
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
}


// EXPORT
// =================================================================================================

export { info };
