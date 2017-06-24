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
console.log("sensing block load");
goog.provide('Blockly.Blocks.colour'); // Deprecated
goog.provide('Blockly.Constants.Colour');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 * This should be the same as Blockly.Msg.COLOUR_HUE.
 * @readonly
 */
Blockly.Constants.Colour.HUE = 200;
/** @deprecated Use Blockly.Constants.Colour.HUE */
Blockly.Blocks.colour.HUE = Blockly.Constants.Colour.HUE;




// <block type="comeToFront"></block>0
// <block type="goBackByLayers:"></block>1
Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
  {
    "type": "touching:",
    "message0": 'touching %1',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["mouse-pointer", "_mouse_"],
        ["edge", "_edge_"],
        ["other sprite here", "ITEM3"]
      ]
    }],
    "colour": 200,
    "output": "Boolean"
  }, {
    "type": "touchingColor:",
    "message0": "touching color %1 ?",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Colour"
    }],
    "colour": 200,
    "output": "Boolean"
  }, {
    "type": "color:sees:",
    "message0": "color %1 is touching color %2 ?",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Colour"
    }, {
      "type": "input_value",
      "name": "VALUE2",
      "check": "Colour"
    }],
    "colour": 200,
    "output": "Boolean"
  }, {
    "type": "distanceTo:",
    "message0": 'distance to %1',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["mouse-pointer", "_mouse_"],
        ["other sprite here", "ITEM2"]
      ]
    }],
    "colour": 200,
    "output": "value"
  }, {
    "type": "doAsk",
    "message0": "ask %1 and wait",
    "colour": 200,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  }, {
    "type": "answer",
    "message0": "answer",
    "colour": 200,
    "output": "value"
  }, {
    "type": "keyPressed:",
    "message0": 'key %1 pressed?',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["space", "space"],
        ["up arrow", "up arrow"],
        ["down arrow", "down arrow"],
        ["left arrow", "left arrow"],
        ["right arrow", "right arrow"],
        ["any", "any"],
        ["a", "a"],
        ["b", "b"],
        ["c", "c"],
        ["d", "d"],
        ["e", "e"],
        ["f", "f"],
        ["g", "g"],
        ["h", "h"],
        ["i", "i"],
        ["j", "k"],
        ["k", "k"],
        ["l", "l"],
        ["m", "m"],
        ["n", "n"],
        ["o", "o"],
        ["p", "p"],
        ["q", "q"],
        ["r", "r"],
        ["s", "s"],
        ["t", "t"],
        ["u", "u"],
        ["v", "v"],
        ["w", "w"],
        ["x", "x"],
        ["y", "y"],
        ["z", "z"],
        ["0", "0"],
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"]
      ]
    }],
    "colour": 200,
    "output": "Boolean"
  }, {
    "type": "mousePressed",
    "message0": "mouse down?",
    "colour": 200,
    "output": "Boolean"
  }, {
    "type": "mouseX",
    "message0": "mouse x",
    "colour": 200,
    "output": "value"
  }, {
    "type": "mouseY",
    "message0": "mouse y",
    "colour": 200,
    "output": "value"
  }, {
    "type": "soundLevel",
    "message0": "loudness",
    "colour": 200,
    "output": "value"
  }, {
    "type": "senseVideoMotion",
    "message0": 'video %1 on %2',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["motion", "ITEM1"],
        ["direction", "ITEM2"]
      ]
    }, {
      "type": "field_dropdown",
      "name": "VALUE2",
      "options": [
        ["stage", "ITEM1"],
        ["this sprite", "ITEM2"]
      ]
    }],
    "colour": 200,
    "output": "value"
  }, {
    "type": "setVideoState",
    "message0": 'turn video %1',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["on", "ITEM1"],
        ["off", "ITEM2"],
        ["on-flipped", "ITEM3"]
      ]
    }],
    "colour": 200,
    "output": "value"
  }, {
    "type": "setVideoTransparency",
    "message0": "set video transparency to %1%",
    "colour": 200,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  }, {
    "type": "timer",
    "message0": "timer",
    "colour": 200,
    "output": "value"
  }, {
    "type": "timerReset",
    "message0": "reset timer",
    "colour": 200,
    "nextStatement": null,
    "previousStatement": null
  }, {
    "type": "getAttribute:of:",
    "message0": '%1 of %2',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["x position", "x position"],
        ["y position", "y position"],
        ["direction", "direction"],
        ["costume #", "costume #"],
        ["costume name", "costume name"],
        ["size", "size"],
        ["volume", "volume"]
      ]
    }, {
      "type": "field_dropdown",
      "name": "VALUE2",
      "options": [
        ["stage", "stage"],
        ["Sprite1", "Sprite1"]
      ]
    }],
    "colour": 200,
    "output": "value"
  }, {
    "type": "timeAndDate",
    "message0": 'current %1',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["year", "year"],
        ["month", "month"],
        ["date", "date"],
        ["day of week", "day of week"],
        ["hour", "hour"],
        ["minute", "minute"],
        ["second", "second"]
      ]
    }],
    "colour": 200,
    "output": "value"
  }, {
    "type": "timestamp",
    "message0": "days since 2000",
    "colour": 200,
    "output": "value"
  }, {
    "type": "getUserName",
    "message0": "username",
    "colour": 200,
    "output": "value"
  },

]); // END JSON EXTRACT (Do not delete this comment.)


