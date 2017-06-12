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
console.log("operators block load");
goog.provide('Blockly.Blocks.colour'); // Deprecated
goog.provide('Blockly.Constants.Colour');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 * This should be the same as Blockly.Msg.COLOUR_HUE.
 * @readonly
 */
Blockly.Constants.Colour.HUE = 93;
/** @deprecated Use Blockly.Constants.Colour.HUE */
Blockly.Blocks.colour.HUE = Blockly.Constants.Colour.HUE;

Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
  {
    "type": "+",
    "message0": "%1 + %2",
    "colour": 93,
    "output": null,
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "-",
    "message0": "%1 - %2",
    "colour": 93,
    "output": null,
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "*",
    "message0": "%1 * %2",
    "colour": 93,
    "output": null,
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "/",
    "message0": "%1 / %2",
    "colour": 93,
    "output": null,
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "randomFrom:to:",
    "message0": "pick random from %1 to %2",
    "colour": 93,
    "output": null,
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "<",
    "message0": "%1 < %2",
    "colour": 93,
    "output": "Boolean",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "=",
    "message0": "%1 = %2",
    "colour": 93,
    "output": "Boolean",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": ">",
    "message0": "%1 > %2",
    "colour": 93,
    "output": "Boolean",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "&",
    "message0": "%1 and %2",
    "colour": 93,
    "output": "Boolean",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "|",
    "message0": "%1 or %2",
    "colour": 93,
    "output": "Boolean",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "not",
    "message0": "not %1",
    "colour": 93,
    "output": "Boolean",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  }, {
    "type": "concatenate:with:",
    "message0": "join %1 %2",
    "colour": 93,
    "output": null,
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "letter:of:",
    "message0": "letter %1 of %2",
    "colour": 93,
    "output": null,
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  },{
    "type": "%",
    "message0": "%1 mod %2",
    "colour": 93,
    "output": null,
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  },{
    "type": "stringLength:",
    "message0": "length of %1",
    "colour": 93,
    "output": null,
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },{
    "type": "rounded",
    "message0": "round %1",
    "colour": 93,
    "output": null,
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },{
    "type": "computeFunction:of:",
    "message0": '%1 of %2',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["abs", "ITEM1"],
        ["floor", "ITEM2"],
        ["ceiling", "ITEM3"],
        ["sqrt", "ITEM4"],
        ["sin", "ITEM5"],
        ["cos", "ITEM6"],
        ["tan", "ITEM7"],
        ["asin", "ITEM8"],
        ["acod", "ITEM9"],
        ["atan", "ITEM10"],
        ["ln", "ITEM11"],
        ["log", "ITEM12"],
        ["e ^", "ITEM13"],
        ["10 ^", "ITEM14"]
      ]
    },{
      "type": "input_value",
      "name": "VALUE2"
    }],
    "colour": 93,
    "output": null
  }

]); // END JSON EXTRACT (Do not delete this comment.)

// <block type="stringLength:"></block>
// <block type="%"></block>
// <block type="rounded"></block>
// <block type="computeFunction:of:"></block>
