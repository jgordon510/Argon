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

Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
  {
    "type": "forward:",
    "message0": "move %1 steps",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "turnRight:",
    "message0": "turn ↷ %1 degrees",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "turnLeft:",
    "message0": "turn ↶ %1 degrees",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "heading:",
    "message0": "point in direction %1",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "pointTowards:",
    "message0": "point towards %1",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "FIELDNAME",
      "options": [
        [ "mouse-pointer", "ITEM1" ],
        [ "other sprite here", "ITEM2" ]
      ]
    }]
  },
  {
    "type": "gotoX:y:",
    "message0": "go to x: %1 y: %2",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null,
    "lastDummyAlign0": "RIGHT", //why not working?
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    },{
      "type": "input_value",
      "name": "VALUE2"
    }]
  },
  {
    "type": "gotoSpriteOrMouse:",
    "message0": "go to %1",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "FIELDNAME",
      "options": [
        [ "mouse-pointer", "ITEM1" ],
        [ "random position", "ITEM2" ],
        [ "other sprite here", "ITEM3" ]
      ]
    }]
  },
  {
    "type": "glideSecs:toX:y:elapsed:from:",
    "message0": "glide %1 secs to x: %2 y: %3",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    },{
      "type": "input_value",
      "name": "VALUE2"
    },{
      "type": "input_value",
      "name": "VALUE3"
    }]

  },{
    "type": "changeXposBy:",
    "message0": "change x by %1",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },{
    "type": "xpos:",
    "message0": "set x to %1",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },{
    "type": "changeYposBy:",
    "message0": "change y by %1",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },{
    "type": "ypos:",
    "message0": "set y to %1",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "bounceOffEdge",
    "message0": "if on edge, bounce",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "setRotationStyle",
    "message0": "set rotation style %1",
    "colour":225,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "FIELDNAME",
      "options": [
        [ "left-right", "ITEM1" ],
        [ "don't rotate", "ITEM2" ],
        [ "all around", "ITEM3" ]
      ]
    }]
  },
  {
    "type": "xpos",
    "message0": "x position",
    "colour":225,
    "output": "Number"
  },
  {
    "type": "ypos",
    "message0": "y position",
    "colour":225,
    "output": "Number"
  },
  {
    "type": "heading",
    "message0": "direction",
    "colour":225,
    "output": "Number"
  }
]); // END JSON EXTRACT (Do not delete this comment.)
