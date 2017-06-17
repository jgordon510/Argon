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


//value

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
    "output": "Value"
  }, {
    "type": "colour_input",
    "message0": "%1",
    "args0": [{
      "type": "field_colour",
      "name": "FIELDNAME",
      "colour": "#ff0000"
    }],
    "colour": 32,
    "output": "Colour"
  }, {
    "type": "readVariable",
    "message0": "variable: %1",
    "args0": [{
      "type": "field_variable",
      "name": "FIELDNAME"
    }],
    "colour": 32,
    "output": "Variable"
  }, {
    "type": "setVar:to:",
    "message0": "set %1 to %2",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Variable"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }],
    "colour": 32
  }, {
    "type": "changeVar:by:",
    "message0": "change %1 by %2",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Variable"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }],
    "colour": 32
  }, {
    "type": "showVariable:",
    "message0": "show %1",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Variable"
    }],
    "colour": 32
  }, {
    "type": "hideVariable:",
    "message0": "hide %1",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Variable"
    }],
    "colour": 32
  },{
    "type": "contentsOfList:",
    "message0": "list: %1",
    "args0": [{
      "type": "field_variable",
      "name": "FIELDNAME"
    }],
    "colour": 20,
    "output": "Value"
  }
]); // END JSON EXTRACT (Do not delete this comment.)
// <block type=""></block>
// <block type=""></block>
// <block type=""></block>
// <block type=""></block>
