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

    commandHotKeys: {                       // object:

        cmdLoop: 'L',                       // loop / no loop
        cmdLoopStep: '+',                   // single step/loop
        cmdLoopMultiSteps: '*',             // multi step/loop (see multiLoopSteps property)
        cmdZoomFit: 'F',                    // zoom fit
        cmdZoomOne: 'O',                    // zoom 1:1 (correct ppi settings are important here)
        cmdZoomMax: 'M',                    // zoom maximum
        cmdShowCoordinates: 'Alt+Shift+C',  // show / hide mouse coordinates
        cmdShowShadow: 'Alt+Shift+S',       // show / hide canvas shadow
        cmdExport: 'E',                     // export canvas (png -> canvas mode | svg -> svg mode)
    }
}

const padding = 20;

let height2;

function setup() {

    // this:
    // createCanvas(210, 297, canvasProperties);

    // or this:
    createCanvas('a4', canvasProperties);

    background(255, 255, 255);

    strokeWeight(1); // 1 unit --> mm, cm, inch
    strokeCap(ROUND);

    textAlign(CENTER, CENTER);
    textSize(6);
    text('Set correct PPI to get the right measurements', width * 0.5, 15);
    text('(see screenPPI and exportPPI properties in artwork.js)', width * 0.5, 15 + 10);
    text('Press <L> (see commandHotKeys property) to start/stop the loop.', width * 0.5, 15 + 20);
    textSize(10);
    text('Press <F1> for HELP', width * 0.5, 15 + 35);
    textSize(6);
    text('( click on the canvas first )', width * 0.5, 15 + 45);

    loop();

    height2 = height - 50;
}

function draw() {

    translate(padding, padding);

    const x1 = random(width - 2 * padding);
    const y1 = random(height2 - 2 * padding);
    const x2 = random(width - 2 * padding);
    const y2 = random(height2 - 2 * padding);

    const r = random(256);
    const g = random(256);
    const b = random(256);

    stroke(r, g, b);
    line(x1, y1 + 50, x2, y2 + 50);
}
