/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


'use strict';
console.log("data block load");
goog.provide('Blockly.Blocks.colour'); // Deprecated
goog.provide('Blockly.Constants.Colour');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 * This should be the same as Blockly.Msg.COLOUR_HUE.
 * @readonly
 */
Blockly.Constants.Colour.HUE = 32;
/** @deprecated Use Blockly.Constants.Colour.HUE */
Blockly.Blocks.colour.HUE = Blockly.Constants.Colour.HUE;

Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
  {
    "type": "input",
    "message0": '%1',
    "args0": [{
      "type": "field_input",
      "name": "FIELDNAME",
      "text": "100"
    }],
    "colour": 32,
    "output": null
  }, {
    "type": "variable",
    "message0": "variable: %1",
    "args0": [{
      "type": "field_variable",
      "name": "FIELDNAME",
      "variable": "x"
    }],
    "colour": 32,
    "output": null
  },{
    "type": "list",
    "message0": "list: %1",
    "args0": [{
      "type": "field_variable",
      "name": "FIELDNAME",
      "variable": "myList"
    }],
    "colour": 20,
    "output": null
  }
]); // END JSON EXTRACT (Do not delete this comment.)
