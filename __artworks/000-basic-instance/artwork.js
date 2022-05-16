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
};

new p5(function(aw) {

    aw.setup = function() {

        aw.createCanvas(297, 210, canvasProperties);
        aw.background(255);

        aw.strokeWeight(3);
        aw.strokeCap(aw.ROUND);
    
        // aw.frameRate(1);
        // aw.loop();

        aw.textAlign(aw.CENTER, aw.CENTER);
        aw.textSize(7);
        aw.text('Set correct PPI to get the right measurements', aw.width * 0.5, aw.height * 0.5);
        aw.text('(see screenPPI and exportPPI properties in artwork.js)', aw.width * 0.5, aw.height * 0.5 + 15);    
    }

    aw.draw = function() {

        const x1 = aw.random(aw.width);
        const y1 = aw.random(aw.height);
        const x2 = aw.random(aw.width);
        const y2 = aw.random(aw.height);

        const r = aw.random(256);
        const g = aw.random(256);
        const b = aw.random(256);
    
        aw.stroke(r, g, b);
        aw.line(x1, y1, x2, y2);
    }
});


new p5(function(aw) {

    aw.setup = function() {

        aw.createCanvas('A4', { ...canvasProperties, renderer: 'svg' });
        aw.background(255);

        aw.strokeWeight(3);
        aw.strokeCap(aw.ROUND);

        // aw.frameRate(60);
        // aw.loop();

        aw.textAlign(aw.CENTER, aw.CENTER);
        aw.textSize(7);
        aw.text('Set correct PPI to get the right measurements', aw.width * 0.5, aw.height * 0.5);
        aw.text('(see screenPPI and exportPPI properties in artwork.js)', aw.width * 0.5, aw.height * 0.5 + 15);
    }

    aw.draw = function() {

        const x1 = aw.random(aw.width);
        const y1 = aw.random(aw.height);
        const x2 = aw.random(aw.width);
        const y2 = aw.random(aw.height);

        const r = aw.random(256);
        const g = aw.random(256);
        const b = aw.random(256);
    
        aw.stroke(r, g, b);
        aw.line(x1, y1, x2, y2);
    }
});
