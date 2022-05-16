const canvasProperties = {

    renderer: 'p2d',        // string: renderer => 'p2d', 'svg'

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

    wallpaperBackground: '#888',            // string: artwork container background
    canvasColor: 'none',                    // string: svg element color (not exported)

    outputFileName: 'aw-S@seed-D@date-L@loops', // string: output file name
                                                // @seed == current seed value
                                                // @date == date & time
                                                // @loops == number of loops made (frameCount)
                                                // eg: artwork-@seed-@date-@loops
                                                // =>  name    seed   date    time  loops
                                                // =>  artwork-1234-20190513-161132-10000

    saveInfoText: false,            // if true, save text file with info about the artwork
                                    // contains: width, height, resolution, seed, noiseSeed, ...
                
    xyDisplay: true,                // boolean: display mouse coordinates on artwork hover
    xyDecimals: 2,                  // number: number of decimals for mouse cooordinates display

    seed: 9212,                     // number: random seed ( -1 => no seed )
    noiseSeed: null,                // number: random seed ( -1 => no seed )
    simplexSeed: null,              // number: random seed ( -1 => no seed )

    disableFriendlyErrors: true,    // boolean: disable friendly errors ?

    multiLoopSteps: 10,             // number of loops for multi loop

    showPane: true,                 // show / hide command pane
    showPropertiesInPane: true,     // boolean: show / hide info properties
    showHotkeysInPane: false,       // boolean: show / hide info hotkeys

    commandHotKeys: {                       // object:

        cmdLoop: 'Alt+Shift+L',             // loop / no loop
        cmdLoopStep: '+',                   // single step/loop
        cmdLoopMultiSteps: '*',             // multi step/loop (see multiLoopSteps property)
        cmdZoomFit: 'Alt+Shift+F',          // zoom fit
        cmdZoomOne: 'Alt+Shift+O',          // zoom 1:1 (correct ppi settings are important here)
        cmdZoomMax: 'Alt+Shift+M',          // zoom maximum
        cmdShowCoordinates: 'Alt+Shift+C',  // show / hide mouse coordinates
        cmdShowShadow: 'Alt+Shift+S',       // show / hide canvas shadow
        cmdExport: 'Alt+Shift+E',           // export canvas (png -> canvas mode | svg -> svg mode)
    }
}

function setup() {

    createCanvas(297, 210, canvasProperties);

    background(255, 255, 255);

    strokeWeight(1); // 1 unit --> mm, cm, inch
    strokeCap(ROUND);

    textAlign(CENTER, CENTER);
    textSize(7);
    text('Set correct PPI to get the right measurements', width * 0.5, height * 0.5);
    text('(see screenPPI and exportPPI properties in artwork.js)', width * 0.5, height * 0.5 + 15);

    // loop();
}

function draw() {

    const x1 = random(width);
    const y1 = random(height);
    const x2 = random(width);
    const y2 = random(height);

    const r = random(256);
    const g = random(256);
    const b = random(256);

    stroke(r, g, b);
    line(x1, y1, x2, y2);
}
