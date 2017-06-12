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
    "output": null
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
    "output": null
  }, {
    "type": "keyPressed:",
    "message0": 'key %1 pressed?',
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
    "output": null
  }, {
    "type": "mouseY",
    "message0": "mouse y",
    "colour": 200,
    "output": null
  }, {
    "type": "soundLevel",
    "message0": "loudness",
    "colour": 200,
    "output": null
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
    "output": null
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
    "output": null
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
    "output": null
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
        ["x position", "ITEM1"],
        ["y position", "ITEM2"],
        ["direction", "ITEM3"],
        ["costume #", "ITEM4"],
        ["costume name", "ITEM5"],
        ["size", "ITEM6"],
        ["volume", "ITEM7"]
      ]
    }, {
      "type": "field_dropdown",
      "name": "VALUE2",
      "options": [
        ["stage", "ITEM1"],
        ["Sprite1", "ITEM2"]
      ]
    }],
    "colour": 200,
    "output": null
  }, {
    "type": "timeAndDate",
    "message0": 'current %1',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["year", "ITEM1"],
        ["month", "ITEM2"],
        ["date", "ITEM3"],
        ["day of week", "ITEM4"],
        ["hour", "ITEM5"],
        ["minute", "ITEM6"],
        ["second", "ITEM7"]
      ]
    }],
    "colour": 200,
    "output": null
  }, {
    "type": "timestamp",
    "message0": "days since 2000",
    "colour": 200,
    "output": null
  }, {
    "type": "getUserName",
    "message0": "username",
    "colour": 200,
    "output": null
  },

]); // END JSON EXTRACT (Do not delete this comment.)


