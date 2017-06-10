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
console.log("control block load");
goog.provide('Blockly.Blocks.colour'); // Deprecated
goog.provide('Blockly.Constants.Colour');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 * This should be the same as Blockly.Msg.COLOUR_HUE.
 * @readonly
 */
Blockly.Constants.Colour.HUE = 43;
/** @deprecated Use Blockly.Constants.Colour.HUE */
Blockly.Blocks.colour.HUE = Blockly.Constants.Colour.HUE;




// <block type="comeToFront"></block>0
// <block type="goBackByLayers:"></block>1
Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
  {
    "type": "doRepeat",
    "message0": "repeat %1",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }],
    "message1": "%1",
    "args1": [{
      "type": "input_statement",
      "name": "VALUE2"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 43
  }, {
    "type": "wait:elapsed:from:",
    "message0": "wait %1 secs",
    "colour": 43,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  }, {
    "type": "doForever",
    "message0": "forever",
    "message1": "%1",
    "args1": [{
      "type": "input_statement",
      "name": "VALUE1"
    }],
    "previousStatement": null,
    "colour": 43
  }, {
    "type": "doIf",
    "message0": "if %1 then",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Boolean"
    }],
    "message1": "%1",
    "args1": [{
      "type": "input_statement",
      "name": "VALUE2"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 43
  }, {
    "type": "doIfElse",
    "message0": "if %1 then %2 else %3",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Boolean"
    }, {
      "type": "input_statement",
      "name": "VALUE2"
    }, {
      "type": "input_statement",
      "name": "VALUE3"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 43
  },
   {
    "type": "doWaitUntil",
    "message0": "wait until %1",
    "colour": 43,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Boolean"
    }]
  },{
    "type": "doUntil",
    "message0": "repeat until %1",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "boolean"
    }],
    "message1": "%1",
    "args1": [{
      "type": "input_statement",
      "name": "VALUE2"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 43
  },
  {
    "type": "stopScripts",
    "message0": "stop %1",
    "colour":43,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        [ "all", "ITEM1" ],
        [ "this script", "ITEM2" ],
        [ "other scripts in this sprite", "ITEM3" ]
      ]
    }]
  },
  {
    "type": "whenCloned",
    "message0": "When I start as a clone",
    "colour": 43,
    "nextStatement": null
  },
  {
    "type": "createCloneOf",
    "message0": "create a clone of %1",
    "colour":43,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        [ "myself", "_myself_" ],
        [ "Sprite1", "ITEM2" ]
      ]
    }]
  },
  {
    "type": "deleteClone",
    "message0": "delete clone",
    "colour":43,
    "previousStatement": null
  }
]); // END JSON EXTRACT (Do not delete this comment.)
