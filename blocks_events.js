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
        ["space", "ITEM1"],
        ["up arrow", "ITEM2"],
        ["down arrow", "ITEM3"],
        ["left arrow", "ITEM4"],
        ["right arrow", "ITEM5"],
        ["any", "ITEM6"],
        ["a", "ITEM7"],
        ["b", "ITEM8"],
        ["c", "ITEM9"],
        ["d", "ITEM10"],
        ["e", "ITEM11"],
        ["f", "ITEM12"],
        ["g", "ITEM13"],
        ["h", "ITEM14"],
        ["i", "ITEM15"],
        ["j", "ITEM16"],
        ["k", "ITEM17"],
        ["l", "ITEM18"],
        ["m", "ITEM19"],
        ["n", "ITEM20"],
        ["o", "ITEM21"],
        ["p", "ITEM22"],
        ["q", "ITEM23"],
        ["r", "ITEM24"],
        ["s", "ITEM25"],
        ["t", "ITEM26"],
        ["u", "ITEM27"],
        ["v", "ITEM28"],
        ["w", "ITEM29"],
        ["x", "ITEM30"],
        ["y", "ITEM31"],
        ["z", "ITEM32"],
        ["0", "ITEM33"],
        ["1", "ITEM34"],
        ["2", "ITEM35"],
        ["3", "ITEM36"],
        ["4", "ITEM37"],
        ["5", "ITEM38"],
        ["6", "ITEM39"],
        ["7", "ITEM40"],
        ["8", "ITEM41"],
        ["9", "ITEM42"]
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
