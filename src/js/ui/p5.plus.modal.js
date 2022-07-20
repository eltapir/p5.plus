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

const modal = {

    __initModal() {

        const html = `

            <div class="modal" id="modal">

                <div class="modal-dialog">

                    <header class="modal-header">

                        <h3>SHORTKEYS</h3><p class="header-small-text">Press &lt;ESC&gt; to close</p>

                    </header>

                    <section class="modal-content">

                        <p>
                            <span class="command">Loop</span>
                            <span class="shortkey">
                                ${this.__getKeyString(this.__cmdHotKeys.cmdLoop)}
                            </span>
                        </p>

                        <p>
                            <span class="command">Loop one Step</span>
                            <span class="shortkey">
                                ${this.__getKeyString(this.__cmdHotKeys.cmdLoopStep)}
                            </span>
                        </p>

                        <p>
                            <span class="command">Loop multiple steps</span>
                            <span class="shortkey">
                                ${this.__getKeyString(this.__cmdHotKeys.cmdLoopMultiSteps)}
                            </span>
                        </p>

                        <p>
                            <span class="command">Zoom</span>
                            <span class="shortkey">
                                ${this.__getKeyString('wheel')}
                            </span>
                        </p>

                        <p>
                            <span class="command">Zoom Fit</span>
                            <span class="shortkey">
                                ${this.__getKeyString(this.__cmdHotKeys.cmdZoomFit)}
                            </span>
                        </p>

                        <p>
                            <span class="command">Zoom maximum</span>
                            <span class="shortkey">
                                ${this.__getKeyString(this.__cmdHotKeys.cmdZoomMax)}
                            </span>
                        </p>

                        <p>
                            <span class="command">Zoom 1 / 1</span>
                            <span class="shortkey">
                                ${this.__getKeyString(this.__cmdHotKeys.cmdZoomOne)}
                            </span>
                        </p>
                        
                        <p>
                            <span class="command">Export to file ( .png / .svg )</span>
                            <span class="shortkey">
                                ${this.__getKeyString(this.__cmdHotKeys.cmdExport)}
                            </span>
                        </p>
                        
                        <p>
                            <span class="command">Show/hide shadow</span>
                            <span class="shortkey">
                                ${this.__getKeyString(this.__cmdHotKeys.cmdShowShadow)}
                            </span>
                        </p>
                                                
                        <p>
                            <span class="command">Show/hide coordinates</span>
                            <span class="shortkey">
                                ${this.__getKeyString(this.__cmdHotKeys.cmdShowCoordinates)}
                            </span>
                        </p>

                    </section>

                </div>

            </div>
        `;

        document.body.appendChild(this.__getHtmlFragment(html));

        this.__modal = document.getElementById('modal');

        document.addEventListener('keydown', event => {

            switch (event.code) {

                case 'Escape':

                    if (this.__modal.classList.contains('is-visible'))
                        this.__modal.classList.remove('is-visible');
                    break;
    
                case 'F1':

                    event.preventDefault();
                    this.__modal.classList.add('is-visible');
                    break;
            }
        });

        document.addEventListener("click", event => {

            if (event.target == document.querySelector(".modal.is-visible")) {

                document.querySelector(".modal.is-visible").classList.remove('is-visible');
            }
        });
    },

    __getKeyString(str) {

        const keyArray = str.split('+');
        const newArray = [];

        keyArray.forEach(el => {

            newArray.push(`&lt;${el}&gt;`);
        });

        return newArray.join('+');
    }
}


// EXPORTS
// =================================================================================================

export { modal };
