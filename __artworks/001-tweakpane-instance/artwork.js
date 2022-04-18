const canvasProperties = {

    renderer: 'p2d',
    size: '297mm 210mm',
    seed: 1234,
    showPropertiesInPane: false,
    showHotkeysInPane: false
}

const tweakParams1 = {

    'strokeWeight': 1.0
};

new p5(function(aw) {

    aw.setup = function() {

        aw.createCanvas( canvasProperties );
        aw.background(255);

        aw.strokeWeight(1);
        aw.strokeCap(aw.SQUARE);

        aw.frameRate(5);
        aw.loop();

        aw.textAlign(aw.CENTER, aw.CENTER);
        aw.textSize(7);
        aw.text('Set correct PPI to get the right measurements', aw.width * 0.5, aw.height * 0.5);
        aw.text('(see screenPPI and exportPPI properties in artwork.js)', aw.width * 0.5, aw.height * 0.5 + 15);

        aw.tweakPaneCustom.addInput(tweakParams1, 'strokeWeight', {
    
            step: 0.25,
            min: 1.0,
            max: 10.0
    
        }).on('change', (ev) => {
    
            aw.strokeWeight(ev.value);
        });
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


const tweakParams2 = {

    'strokeWeight': 1.0
};

new p5(function(aw) {

    aw.setup = function() {

        aw.createCanvas({ ...canvasProperties, renderer: 'svg' });
        aw.background(255);

        aw.strokeWeight(1);
        aw.strokeCap(aw.SQUARE);

        aw.frameRate(5);
        aw.loop();
        
        aw.textAlign(aw.CENTER, aw.CENTER);
        aw.textSize(7);
        aw.text('Set correct PPI to get the right measurements', aw.width * 0.5, aw.height * 0.5);
        aw.text('(see screenPPI and exportPPI properties in artwork.js)', aw.width * 0.5, aw.height * 0.5 + 15);

        aw.tweakPaneCustom.addInput(tweakParams2, 'strokeWeight', {
    
            step: 0.25,
            min: 1.0,
            max: 10.0
    
        }).on('change', (ev) => {
    
            aw.strokeWeight(ev.value);
        });
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
