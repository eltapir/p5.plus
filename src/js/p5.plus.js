/* ============================================================================================== */
/*                                                                                                */
/* Copyright 2021 Kris HEYSE                                                                      */
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

// styles
// -------------------------------------------------------------------------------------------------
import '../scss/p5.plus.scss';


// scripts: p5 overrides
// -------------------------------------------------------------------------------------------------
import './core/p5.plus.canvas.js';

// scripts: p5 extensions
// -------------------------------------------------------------------------------------------------
import { constants } from './core/p5.plus.constants.js';
import { core } from './core/p5.plus.core.js';
import { info } from './core/p5.plus.info.js';
import { output } from './core/p5.plus.output.js';
import { paperSize } from './core/p5.plus.paperSize.js';
import { simplex } from './core/p5.plus.simplex.js';
import { utilities } from './core/p5.plus.utilities.js';

import { cmdPane } from './ui/p5.plus.cmdPane.js';
import { hotkeys } from './ui/p5.plus.hotkeys.js';
import { commands } from './ui/p5.plus.commands.js';
import { xyPane } from './ui/p5.plus.xyPane.js';


// EXTENSIONS
// =================================================================================================

p5.extendObject(p5.prototype, constants);
p5.extendObject(p5.prototype, core);
p5.extendObject(p5.prototype, info);
p5.extendObject(p5.prototype, output);
p5.extendObject(p5.prototype, paperSize);
p5.extendObject(p5.prototype, simplex);
p5.extendObject(p5.prototype, utilities);

p5.extendObject(p5.prototype, cmdPane);
p5.extendObject(p5.prototype, commands);
p5.extendObject(p5.prototype, hotkeys);
p5.extendObject(p5.prototype, xyPane);

// =================================================================================================

//
// override simplexSeed method
//

p5.prototype.simplexSeed = function($_simplexSeed) {

    return function(s) {

        $_simplexSeed.call(this, s);
        this.__simplexSeed = s;
        this.__updateSimplexSeed();
    }
    
}(p5.prototype.simplexSeed);