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

//this is an array to hold the vars
//populated by default with variable1
window.variableOptionsArray = [
  ["variable1", "variable1"]
];

//this function populates the dropdown with the array
window.variableOptions = function() {
  return window.variableOptionsArray;
};

//this block must be built with js to us the dynamic dd above
Blockly.Blocks['readVariable'] = {
  init: function() {
    var dropdown = new Blockly.FieldDropdown(window.variableOptions);
    this.appendDummyInput()
      .appendField('variable:')
      .appendField(dropdown, 'VARIABLE');
    this.setColour(32);
    this.setOutput("Variable");
  }
};

//same as with variables
window.listOptionsArray = [
  ["list1", "list1"]
];

window.listOptions = function() {
  return window.listOptionsArray;
};

Blockly.Blocks['contentsOfList:'] = {
  init: function() {
    var dropdown = new Blockly.FieldDropdown(window.listOptions);
    this.appendDummyInput()
      .appendField('list:')
      .appendField(dropdown, 'LIST');
    this.setColour(20);
    this.setOutput("List");
  }
};

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
  }, {
    "type": "append:toList:",
    "message0": "add %1 to %2",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2",
      "check": "List"
    }],
    "colour": 20
  }, {
    "type": "deleteLine:ofList:",
    "message0": "delete %1 of %2",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["1", "ITEM1"],
        ["last", "ITEM2"],
        ["all", "ITEM3"]
      ]
    }, {
      "type": "input_value",
      "name": "VALUE2",
      "check": "List"
    }],
    "colour": 20
  }, {
    "type": "insert:at:ofList:",
    "message0": "insert %1 at %2 of %3",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "field_dropdown",
      "name": "VALUE2",
      "options": [
        ["1", "ITEM1"],
        ["last", "ITEM2"],
        ["random", "ITEM3"]
      ]
    }, {
      "type": "input_value",
      "name": "VALUE3",
      "check": "List"
    }],
    "colour": 20
  }, {
    "type": "setLine:ofList:to:",
    "message0": "replace item %1 of %2 with %3",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["1", "ITEM1"],
        ["last", "ITEM2"],
        ["random", "ITEM3"]
      ]
    }, {
      "type": "input_value",
      "name": "VALUE2",
      "check": "List"
    }, {
      "type": "input_value",
      "name": "VALUE3"
    }],
    "colour": 20
  }, {
    "type": "getLine:ofList:",
    "message0": "item %1 of %2",
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["1", "ITEM1"],
        ["last", "ITEM2"],
        ["random", "ITEM3"]
      ]
    }, {
      "type": "field_variable",
      "name": "FIELDNAME"
    }],
    "colour": 20,
    "output": "Value"
  }, {
    "type": "lineCountOfList:",
    "message0": "length of %1",
    "args0": [{
      "type": "field_variable",
      "name": "FIELDNAME"
    }],
    "colour": 20,
    "output": "Value"
  }, {
    "type": "list:contains:",
    "message0": "%1 contains %2?",
    "args0": [{
      "type": "field_variable",
      "name": "FIELDNAME"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }],
    "colour": 20,
    "output": "Boolean"
  }, {
    "type": "showList:",
    "message0": "show %1",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "List"
    }],
    "colour": 20
  }, {
    "type": "hideList:",
    "message0": "hide %1",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "List"
    }],
    "colour": 20
  }

]); // END JSON EXTRACT (Do not delete this comment.)

