/**
@license
Copyright 2015 Hendrik Diel

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

@fileoverview
this file enables predefined variables. You can add a variables by calling
addPredefinedVar(name) and remove by calling removePredefinedVar(name).
@author
diel.hendrik@gmail.com (Hendrik Diel)
*/

(function() {
  Blockly.Variables.predefinedVars = [];
  Blockly.Variables.addPredefinedVar = function(name) {
    Blockly.Variables.predefinedVars.push(name);
  };

  Blockly.Variables.removePredefiendVar = function(name) {
    var index = array.indexOf(name);
    if (index > -1) {
      Blockly.Variables.predefinedVars.splice(index, 1);
    }
  };

  var old = Blockly.Variables.allVariables;

  Blockly.Variables.allVariables = function(root) {
    console.log(old.call(this, root));
    var vars = old.call(this, root);



    Blockly.Variables.predefinedVars.forEach(function(x) {
      if (vars.indexOf(x) < 0)
        vars.push(x);
    });
    return vars;
  };

  Blockly.FieldVariable.prototype.initModel = function() {
    console.log(this.getValue())
    if (!this.getValue()) {
      // Variables without names get uniquely named for this workspace.
      console.log(this.sourceBlock_.isInFlyout)
      var workspace =
        this.sourceBlock_.isInFlyout ?
        this.sourceBlock_.workspace.targetWorkspace :
        this.sourceBlock_.workspace;
      console.log(Blockly.Variables.allVariables(window.workspace)[0])
      this.setValue(Blockly.Variables.allVariables(window.workspace)[0]);
    }
    // If the selected variable doesn't exist yet, create it.
    // For instance, some blocks in the toolbox have variable dropdowns filled
    // in by default.
    if (!this.sourceBlock_.isInFlyout) {
      this.sourceBlock_.workspace.createVariable(this.getValue());
    }
  };
  Blockly.FieldVariable.dropdownCreate = function() {
    // if (this.sourceBlock_ && this.sourceBlock_.workspace) {
    //     // Get a copy of the list, so that adding rename and new variable options
    //     // doesn't modify the workspace's list.
    //     var variableList = this.sourceBlock_.workspace.variableList.slice(0);
    // }
    // else {
    //     var variableList = [];
    // }
    // variableList = Blockly.Variables.allVariables(window.workspace)
    var variableList = Blockly.Variables.allVariables(window.workspace)
    console.log(variableList)
    console.log(Blockly.Variables.allUsedVariables(window.workspace))
      // Ensure that the currently selected variable is an option.
    var name = this.getText();
    if (name && variableList.indexOf(name) == -1) {
      variableList.push(name);
    }

    variableList.sort(goog.string.caseInsensitiveCompare);


    // this.deleteVarItemIndex_ = variableList.length;
    // variableList.push(Blockly.Msg.DELETE_VARIABLE.replace('%1', name));
    // Variables are not language-specific, use the name as both the user-facing
    // text and the internal representation.
    var options = [];
    for (var i = 0; i < variableList.length; i++) {
      options[i] = [variableList[i], variableList[i]];
    }
    this.renameVarItemIndex_ = options.length;
    options.push([Blockly.Msg.RENAME_VARIABLE, Blockly.Msg.RENAME_VARIABLE]);
    this.deleteVarItemIndex_ = options.length;
    options.push([Blockly.Msg.DELETE_VARIABLE.replace('%1', name), Blockly.Msg.DELETE_VARIABLE.replace('%1', name)]);
    // options.push(Blockly.Msg.RENAME_VARIABLE)
    console.log(options)
    return options;
  };

})();
