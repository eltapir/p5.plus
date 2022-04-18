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
}


// EXPORTS
// =================================================================================================

export { xyPane };
