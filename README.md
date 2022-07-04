## p5.plus ( !!! alpha stage / things will change !!! )

p5.plus is an p5.js extension to ease the creation of 2D Static art
(p5.plus is a replacement for my [p5.start2d.js](https://github.com/eltapir/p5.start2d.js) extension)

The following functionality is added (more to come) :

    - panning and zooming
    - use of mm, cm, inches
    - support for svg (with the p5.js-svg extension)
    - export with one click to png (p2d mode) or svg (svg mode)
    - ...

<br />

### CREDITS

[p5.js](https://p5js.org/) : &nbsp;No p5 extension without p5 library

[tinykeys](https://jamiebuilds.github.io/tinykeys/) : &nbsp;Tiny but very nice library for keybindings

[simplex noise](https://github.com/josephg/noisejs) : &nbsp;Simple library for 2d & 3d perlin noise and simplex noise

<br />

### CHANGES TO THE NORMAL WAY OF USING p5.js

- `createCanvas()` accepts different arguments, Instead of providing `width` and `height` you have to provide an extra object. see examples for correct use.
- `noLoop()` is the default, since the main purpose of this addon is to create static art.

<br />

### USE (SEE EXAMPLES)

add the following scripts to your index.html:

p5.js (always needed)

`<script defer src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.js"></script>`

p5.js-svg (only needed if you want to use svg mode)

`<script defer src="https://unpkg.com/p5.js-svg@1.3.1"></script>`

p5.plus (always needed)

`<script defer src="https://cdn.jsdelivr.net/gh/eltapir/p5.plus@latest/lib/p5.plus.js"></script>`

add your sketch/artwork

`<script defer src="./artwork.js"></script>`

<br />

### EXAMPLES

see the __artworks folder, or see example with p5 web editor (link below):

[p5.plus template](https://editor.p5js.org/ElTapir/sketches/GPNQjGTrg "p5.plus template")

<br />

### LICENSE

Apache 2.0,  see [LICENSE](LICENSE.txt) for details.
