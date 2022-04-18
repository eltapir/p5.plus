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

import { Pane } from 'tweakpane';
import * as EssentialsPlugin from '@tweakpane/plugin-essentials';


// EXTENSION
// =================================================================================================

const cmdPane = {

    __initCmdPane() {

        const renderType =   this.__renderer === this.SVG ? 'svg' :
                            (this.__renderer === this.WEBGL ? 'webgl' : 'canvas');

        const burgerHTML = `

            <div class="cmd-burger">
                <span class="burger-top"></span>
                <span class="burger-mid"></span>
                <span class="burger-bot"></span>
            </div>
        `;

        const paneHTML = `

            <div class="cmd-pane-header">
                <div class="title">
                    <span>p5.plus</span>
                    <span class="version">v.${pkg.version}</span>
                </div>
                <h2 class="render-type">${renderType.toUpperCase()}</h2>
            </div>

            <div class="cmd-pane-content">

                <div class="tweaks">
                    <div class="tweakpane"></div>
                </div>

                <div class="tweaks-custom">
                    <div class="tweakpane-custom"></div>
                </div>

            </div>
        `;

        // -----------------------------------------------------------------------------------------

        this.__cmdPane = document.createElement('div');
        this.__cmdPane.id = `cmd-pane${this.__idx}`;
        this.__cmdPane.classList.add('cmd-pane');

        this.__awWrapper.append(this.__getHtmlFragment(burgerHTML));
        this.__cmdBurger = this.__awWrapper.querySelector('.cmd-burger');
        this.__cmdBurger.id = `cmd-burger${this.__idx}`;

        this.__cmdPane.append(this.__getHtmlFragment(paneHTML));
        this.__awWrapper.appendChild(this.__cmdPane);

        this.__addTweakPane();

        // -----------------------------------------------------------------------------------------

        this.__cmdBurger.addEventListener('click', (event) => {

            this.__cmdBurger.classList.toggle('active');
            this.__cmdPane.classList.toggle('active');

            this.__cmdPane.addEventListener('transitionend', (event) => {

                this.__initPanZoom();

            }, { once: true });
        });

        if (this.__showPane === true) {
    
            this.__cmdBurger.click();
            this.__initPanZoom();
        }
    },

    __updateSeed() {

        this.__cmdPaneSeedInfo.value = this.__seed;
    },

    __updateNoiseSeed() {

        this.__cmdPaneNoiseSeedInfo.value = this.__noiseSeed;
    },

    __updateSimplexSeed() {

        this.__cmdPaneSimplexSeedInfo.value = this.__simplexSeed;
    },

    __updateLoops() {

        this.__cmdPaneLoopsInfo.value = (this.isLooping() ? 'looping...' : this.frameCount);
    },

    __addTweakPane() {

        this.__tweakPaneNode = document.querySelector(`#artwork-wrapper${this.__idx} .tweakpane`);
        this.__tweakPane = new Pane({ container: this.__tweakPaneNode });
        this.__tweakPane.registerPlugin(EssentialsPlugin);

        this.__tweakPaneCustomNode = document.querySelector(`#artwork-wrapper${this.__idx} .tweakpane-custom`);
        this.__tweakPaneCustom = new Pane({ container: this.__tweakPaneCustomNode });
        this.__tweakPaneCustom.registerPlugin(EssentialsPlugin);
        this._setProperty('tweakPaneCustom', this.__tweakPaneCustom);

        this.__cmdProps = {

            'frame rate' : this._targetFrameRate,    // key: value == label: value
            'color': this.__wallpaperBackground,
            'info' : '',
            'multi steps': 10
        };
        this.__cmdProps[this.__getZoomLabel()] = this.__zoom || this.__zoomFit || 0.1;

        // loop
        // -----------------------------------------------------------------------------------------

        this.__folderLoop = this.__tweakPane.addFolder({ title: 'LOOP' });
        this.__bladeLoop = this.__folderLoop.addBlade({

            view: 'buttongrid',

            size: [3, 1],

            cells: (x, y) => ({

                title: [

                    [ '\uE90A', '\uE902', '\uE900']
                    // [ 'Loop', 'Step', 'Step+']

                ][y][x],
            }),

        });
        this.__folderLoop.addInput(this.__cmdProps, 'multi steps')
            .on('change', (ev) => {
                this.__multiLoopSteps = ev.value;
            });
        this.__folderLoop.addInput(this.__cmdProps, 'frame rate', {

            step: 1,
            min: 1,
            max: 60

        }).on('change', (ev) => {

            this.frameRate(ev.value);
        });        
    

        this.__tweakPanePlayBtn = this.__searchNodeByXPath('\uE90A', this.__tweakPaneNode);
        this.__tweakPanePlayBtn.innerText = this._loop ? '\uE908' : '\uE90A';
        // this.__tweakPanePlayBtn.innerText = this._loop ? 'Pause' : 'Loop';

        // this.__tweakPanePlayBtn = this.__searchNodeByText('\uE90A', this.__tweakPaneNode).querySelector('button div');
        // this.__tweakPanePlayBtn.innerText = this._loop ? '\uE908' : '\uE90A';
        // // this.__tweakPanePlayBtn.innerText = this._loop ? 'Pause' : 'Loop';

        this.__bladeLoop.on('click', (ev) => {

            if (ev.index[0] === 0) {

                this.__cmdLoop();
                this.__tweakPanePlayBtn.innerText = this._loop ? '\uE908' : '\uE90A';
                // this.__tweakPanePlayBtn.innerText = this._loop ? 'Pause' : 'Loop';

            } else if (ev.index[0] === 1) {

                this.__cmdStep();

            } else {

                this.__cmdMultiStep();
            }
        });

        // zoom
        // -----------------------------------------------------------------------------------------

        this.__folderZoom = this.__tweakPane.addFolder({ title: 'ZOOM' });
        this.__folderZoom.addBlade({

            view: 'buttongrid',

            size: [3, 1],

            cells: (x, y) => ({

                title: [

                    [
                        '\uE907', '\uE90C', '\uE904'
                        // '1:1', 'fit', 'max'
                    ]

                ][y][x],
            }),

        }).on('click', (ev) => {

            if (ev.index[0] === 0) {

                this.__cmdZoomOne();

            } else if (ev.index[0] === 1) {

                this.__cmdZoomFit();

            } else {

                this.__cmdZoomMax();
            }
        });

        this.__zoomBlade = this.__folderZoom.addInput(this.__cmdProps, this.__getZoomLabel(), {

            step: 0.005,
            min: this.__zoomMin,
            max: this.__zoomMax

        }).on('change', (ev) => {

            this.__zoom = ev.value / this.__exportPPI * this.__cssScreenPPI;
            this.__scaleArtwork();
            this.__positionArtwork();
        });
        
        // wallpaper color
        // -----------------------------------------------------------------------------------------

        this.__folderWall = this.__tweakPane.addFolder({
            title: 'WALLPAPER',
            expanded: false
        });
        this.__folderWall.addInput(this.__cmdProps, 'color', {

            view: 'color',
            alpha: false,
            picker: 'inline',
            expanded: true,

        }).on('change', (ev) => {
            
            this.__wallpaperBackground = ev.value;
            this.__aw.style.background = this.__wallpaperBackground;
        });

        // export
        // -----------------------------------------------------------------------------------------

        this.__folderExport = this.__tweakPane.addFolder({ title: 'EXPORT' });
        this.__folderExport.addButton({

            title: `EXPORT TO ${this.__renderer.toLowerCase() === 'svg' ? 'SVG' : 'PNG'}`

        }).on('click', () => {
            
            this.__cmdExport();
        });

        // info / properties
        // -----------------------------------------------------------------------------------------

        this.__folderInfo = this.__tweakPane.addFolder({
            title: 'INFO / PROPERTIES',
            expanded: this.__showPropertiesInPane
        });

        this.__folderInfo.addBlade({

            view: 'text',
            disabled: true,
            label: 'W (units)',
            parse: (v) => String(v),
            value: `${this.__cvsWidth.toLocaleString(undefined, { minimumFractionDigits: this.__xyDecimals, maximumFractionDigits: this.__xyDecimals })}${this.__units}`
        });

        this.__folderInfo.addBlade({

            view: 'text',
            disabled: true,
            label: 'H (units)',
            parse: (v) => String(v),
            value: `${this.__cvsHeight.toLocaleString(undefined, { minimumFractionDigits: this.__xyDecimals, maximumFractionDigits: this.__xyDecimals })}${this.__units}`
        });

        this.__folderInfo.addBlade({

            view: 'text',
            disabled: true,
            label: 'W (px)',
            parse: (v) => String(v),
            value: `${this.__cvsPxWidth.toLocaleString()}px`
        });

        this.__folderInfo.addBlade({

            view: 'text',
            disabled: true,
            label: 'H (px)',
            parse: (v) => String(v),
            value: `${this.__cvsPxHeight.toLocaleString()}px`
        });

        this.__folderInfo.addBlade({

            view: 'text',
            disabled: true,
            label: 'Screen PPI',
            parse: (v) => String(v),
            value: `${this.__cssScreenPPI}ppi`
        });

        this.__folderInfo.addBlade({

            view: 'text',
            disabled: true,
            label: 'Export PPI',
            parse: (v) => String(v),
            value: `${this.__exportPPI}ppi`
        });

        this.__cmdPaneSeedInfo = this.__folderInfo.addBlade({

            view: 'text',
            disabled: true,
            label: 'Seed',
            parse: (v) => String(v),
            value: `${this.__seed}`
        });

        this.__cmdPaneNoiseSeedInfo = this.__folderInfo.addBlade({

            view: 'text',
            disabled: true,
            label: 'Noise seed',
            parse: (v) => String(v),
            value: `${this.__noiseSeed}`
        });

        this.__cmdPaneSimplexSeedInfo = this.__folderInfo.addBlade({

            view: 'text',
            disabled: true,
            label: 'Simplex seed',
            parse: (v) => String(v),
            value: `${this.__simplexSeed}`
        });

        this.__cmdPaneLoopsInfo = this.__folderInfo.addBlade({

            view: 'text',
            disabled: true,
            label: 'Loops made',
            parse: (v) => String(v),
            value: (this.isLooping() ? 'looping...' : Math.max(1, this.frameCount))
        });

        // info / hotkeys
        // -----------------------------------------------------------------------------------------

        this.__folderHotkeys = this.__tweakPane.addFolder({
            
            title: 'INFO / HOTKEYS',
            expanded: this.__showHotkeysInPane
        });

        this.__folderHotkeys.addBlade({

            view: 'text',
            disabled: true,
            label: 'Loop',
            parse: (v) => String(v),
            value: this.__cmdHotKeys.cmdLoop
        });

        this.__folderHotkeys.addBlade({

            view: 'text',
            disabled: true,
            label: 'Step',
            parse: (v) => String(v),
            value: this.__cmdHotKeys.cmdLoopStep
        });

        this.__folderHotkeys.addBlade({

            view: 'text',
            disabled: true,
            label: 'Steps',
            parse: (v) => String(v),
            value: this.__cmdHotKeys.cmdLoopMultiSteps
        });

        this.__folderHotkeys.addBlade({

            view: 'text',
            disabled: true,
            label: 'Zoom',
            parse: (v) => String(v),
            value: 'scroll wheel'
        });

        this.__folderHotkeys.addBlade({

            view: 'text',
            disabled: true,
            label: 'Zoom fit',
            parse: (v) => String(v),
            value: this.__cmdHotKeys.cmdZoomFit
        });

        this.__folderHotkeys.addBlade({

            view: 'text',
            disabled: true,
            label: 'Zoom 1:1',
            parse: (v) => String(v),
            value: this.__cmdHotKeys.cmdZoomOne
        });

        this.__folderHotkeys.addBlade({

            view: 'text',
            disabled: true,
            label: 'Zoom max',
            parse: (v) => String(v),
            value: this.__cmdHotKeys.cmdZoomMax
        });

        this.__folderHotkeys.addBlade({

            view: 'text',
            disabled: true,
            label: 'Coor X/Y',
            parse: (v) => String(v),
            value: this.__cmdHotKeys.cmdShowCoordinates
        });

        this.__folderHotkeys.addBlade({

            view: 'text',
            disabled: true,
            label: 'Shadow',
            parse: (v) => String(v),
            value: this.__cmdHotKeys.cmdShowShadow
        });

        this.__folderHotkeys.addBlade({

            view: 'text',
            disabled: true,
            label: 'Export',
            parse: (v) => String(v),
            value: this.__cmdHotKeys.cmdExport
        });
    },

    __updateTweakPanePlayBtn() {

        this.__tweakPanePlayBtn.innerText = this._loop ? '\uE908' : '\uE90A';
        // this.__tweakPanePlayBtn.innerText = this._loop ? 'Pause' : 'Loop';
    },

    __updateTweakPaneZoomLabel() {

        if(this.__cmdProps) {

            this.__cmdProps[this.__getZoomLabel()] = this.__zoom * this.__exportPPI / this.__cssScreenPPI;
            this.__tweakPane.refresh();
        }
    },

    __updateTweakPaneFrameRate(value) {

        if(this.__cmdProps) {

            this.__cmdProps['1-60'] = this._targetFrameRate;
            this.__tweakPane.refresh();
        }
    },

    __getZoomLabel() {

        return `${this.__zoomMin.toFixed(2)} - ${this.__zoomMax.toFixed(2)}`;
    }
}


// EXPORTS
// =================================================================================================

export { cmdPane };
