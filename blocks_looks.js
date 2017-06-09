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
console.log("movement block load");
goog.provide('Blockly.Blocks.colour'); // Deprecated
goog.provide('Blockly.Constants.Colour');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 * This should be the same as Blockly.Msg.COLOUR_HUE.
 * @readonly
 */
Blockly.Constants.Colour.HUE = 20;
/** @deprecated Use Blockly.Constants.Colour.HUE */
Blockly.Blocks.colour.HUE = Blockly.Constants.Colour.HUE;



   
    // <block type="comeToFront"></block>0
    // <block type="goBackByLayers:"></block>1
Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
  {
    "type": "say:duration:elapsed:from:",
    "message0": "say %1 for %2 secs",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    },{
      "type": "input_value",
      "name": "VALUE2"
    }]
  },
  {
    "type": "say:",
    "message0": "say %1",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "think:duration:elapsed:from:",
    "message0": "think %1 for %2 secs",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    },{
      "type": "input_value",
      "name": "VALUE2"
    }]
  },
  {
    "type": "think:",
    "message0": "think %1",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "show",
    "message0": "show",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "hide",
    "message0": "hide",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "lookLike:",
    "message0": "switch costume to %1",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "FIELDNAME",
      "options": [
        [ "costume1", "ITEM1" ],
        [ "costume2", "ITEM2" ]
      ]
    }]
  },
  {
    "type": "nextCostume",
    "message0": "next costume",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "startScene",
    "message0": "switch backdrop to %1",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        [ "backdrop1", "ITEM1" ],
        [ "next backdrop", "ITEM2" ],
        [ "previous backdrop", "ITEM3" ]
      ]
    }]
  },
  {
    "type": "changeGraphicEffect:by:",
    "message0": "change %1 effect by %2",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        [ "color", "ITEM1" ],
        [ "fisheye", "ITEM2" ],
        [ "whirl", "ITEM3" ],
        [ "pixelate", "ITEM4" ],
        [ "mosaic", "ITEM5" ],
        [ "brightness", "ITEM6" ],
        [ "ghost", "ITEM7" ]
        
      ]
    },{
      "type": "input_value",
      "name": "VALUE2"
    }]
  },
  {
    "type": "setGraphicEffect:to:",
    "message0": "set %1 effect to %2",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        [ "color", "ITEM1" ],
        [ "fisheye", "ITEM2" ],
        [ "whirl", "ITEM3" ],
        [ "pixelate", "ITEM4" ],
        [ "mosaic", "ITEM5" ],
        [ "brightness", "ITEM6" ],
        [ "ghost", "ITEM7" ]
        
      ]
    },{
      "type": "input_value",
      "name": "VALUE2"
    }]
  },
  {
    "type": "filterReset",
    "message0": "clear graphic effects",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "changeSizeBy:",
    "message0": "change size by %1",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "setSizeTo:",
    "message0": "set size to %1",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "comeToFront",
    "message0": "go to front",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "goBackByLayers:",
    "message0": "go back %1 layers",
    "colour":264,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  }
]); // END JSON EXTRACT (Do not delete this comment.)
