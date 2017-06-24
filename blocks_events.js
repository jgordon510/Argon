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
console.log("events block load");
goog.provide('Blockly.Blocks.colour'); // Deprecated
goog.provide('Blockly.Constants.Colour');

goog.require('Blockly.Blocks');


// {
//     "type": "",
//     "message0": "message: %1",
//     "args0": [{
//       "type": "field_dropdown",
//       "name": "VALUE1",
//       "options": [
//         ["event", "ITEM1"]
//       ]
//     }],
//     "colour": 20,
//     "output": "Message"
//   }
window.eventOptions = function() {
  console.log(window.eventOptionsArray)
  if(window.eventOptionsArray.length === 0) window.eventOptionsArray.push(["message1","message1"]);
  
  return window.eventOptionsArray;
}

Blockly.Blocks['message'] = {
  init: function() {
    var dropdown = new Blockly.FieldDropdown(window.eventOptions);
    this.appendDummyInput()
        .appendField('message:')
        .appendField(dropdown, 'DATE');
    this.setColour(20);
    this.setOutput("Message");
  }
};






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
    "type": "whenGreenFlag",
    "message0": 'when ⚑  clicked',
    "colour": 20,
    "nextStatement": null
  }, {
    "type": "whenKeyPressed",
    "message0": 'when %1 key pressed',
    "colour": 20,
    "nextStatement": null,
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
    }]
  }, {
    "type": "whenSceneStarts",
    "message0": 'when backdrop switches to %1',
    "colour": 20,
    "nextStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["backdrop1", "ITEM1"]
      ]
    }]
  }, {
    "type": "whenSensorGreaterThan",
    "message0": 'when %1 > %2',
    "colour": 20,
    "nextStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["loudness", "ITEM1"],
        ["timer", "ITEM1"],
        ["video motion", "ITEM1"]
      ]
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "whenIReceive",
    "message0": 'when I receive %1',
    "colour": 20,
    "nextStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Message"
    }]
  }, {
    "type": "broadcast:",
    "message0": "broadcast %1",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Message"
    }],
    "colour": 20
  }, {
    "type": "doBroadcastAndWait",
    "message0": "broadcast %1 and wait",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Message"
    }],
    "colour": 20
  }
]); // END JSON EXTRACT (Do not delete this comment.)

// <block type=""></block>
// <block type=""></block>
// <block type="broadcast:"></block>
// <block type="doBroadcastAndWait"></block>
