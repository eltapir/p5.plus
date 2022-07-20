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
        cmdLoop: 'L',
        cmdLoopStep: 'Alt+Shift+L',
        cmdLoopMultiSteps: 'Alt+Shift+M',
    
        // zoom
        cmdZoomFit: 'F',
        cmdZoomOne: '1',
        cmdZoomMax: 'M',
    
        // show/hide coordinates
        cmdShowCoordinates: 'Alt+Shift+C',
    
        // show/hide shadow
        cmdShowShadow: 'Alt+Shift+S',
    
        // export
        cmdExport: 'E',
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
}


// EXPORTS
// =================================================================================================

export { constants };
