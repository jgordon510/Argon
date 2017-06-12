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
console.log("pen block load");
goog.provide('Blockly.Blocks.colour'); // Deprecated
goog.provide('Blockly.Constants.Colour');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 * This should be the same as Blockly.Msg.COLOUR_HUE.
 * @readonly
 */
Blockly.Constants.Colour.HUE = 160;
/** @deprecated Use Blockly.Constants.Colour.HUE */
Blockly.Blocks.colour.HUE = Blockly.Constants.Colour.HUE;



   
    // <block type="comeToFront"></block>0
    // <block type="goBackByLayers:"></block>1
Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
  {
    "type": "clearPenTrails",
    "message0": "clear",
    "colour":160,
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "stampCostume",
    "message0": "stamp",
    "colour":160,
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "putPenDown",
    "message0": "pen down",
    "colour":160,
    "nextStatement": null,
    "previousStatement": null
  },{
    "type": "putPenUp",
    "message0": "pen up",
    "colour":160,
    "nextStatement": null,
    "previousStatement": null
  },{
    "type": "penColor:",
    "message0": "set pen color to %1",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Colour"
    }],
    "colour": 160,
    "nextStatement": null,
    "previousStatement": null
  },{
    "type": "changePenHueBy:",
    "message0": "change pen color by %1",
    "colour":160,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  },{
    "type": "setPenHueTo:",
    "message0": "set pen color to %1",
    "colour":160,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  },{
    "type": "changePenShadeBy:",
    "message0": "change pen shade by %1",
    "colour":160,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  },{
    "type": "setPenShadeTo:",
    "message0": "set pen shade to %1",
    "colour":160,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  },{
    "type": "changePenSizeBy:",
    "message0": "change pen size by %1",
    "colour":160,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  },{
    "type": "penSize:",
    "message0": "set pen size to %1",
    "colour":160,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  }
]); // END JSON EXTRACT (Do not delete this comment.)

    // 
    // 
    // <block type="putPenDown"></block>
    // <block type="putPenUp"></block>

    // :
    // :
    // :
    // :