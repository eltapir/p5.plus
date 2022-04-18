const canvasProperties = {

    renderer: 'p2d',
    size: '297mm 210mm',
    seed: 1234,
    showPropertiesInPane: false,
    showHotkeysInPane: false
}

const tweakParams = {

    'strokeWeight': 1.0
};

function setup() {

    createCanvas(canvasProperties);

    background(255, 255, 255);

    strokeWeight(1);
    strokeCap(ROUND);

    textAlign(CENTER, CENTER);
    textSize(7);
    text('Set correct PPI to get the right measurements', width * 0.5, height * 0.5);
    text('(see screenPPI and exportPPI properties in artwork.js)', width * 0.5, height * 0.5 + 15);

    loop();

    tweakPaneCustom.addInput(tweakParams, 'strokeWeight', {

        step: 0.25,
        min: 1.0,
        max: 10.0

    }).on('change', (ev) => {

        strokeWeight(ev.value);
    });
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
