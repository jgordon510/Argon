var Argon = {
    spriteData: [],
    imgList: [],
    wavList: [],
    loadedSVGS: [],
    //sulfurous loads the SVGs at the bottom of the document
    //for some reason they're not getting removed on load
    //so I put them in the loadSVGS array and hide, not remove, them on
    //start
    clearSVGS: function() {
        Argon.loadedSVGS.forEach(function(svg) {
            svg.style.display = 'none';
        });
    },
    player: {
        refresh: function() {
            //TODO: forEach so we can save all sprites and stage
            Argon.player.data.scripts = Argon.spriteData[0].scripts || [];
            window.makeScript(false);
            Argon.refreshing = true;
            Argon.imgList = [];
            Argon.wavList = [];
            Argon.loadProject(Argon.loadedJSON);
        }
    },
    makeSelector: function() {
        //add a dropdown menu for the sprite selection
        var HTML = '<select>';
        Argon.spriteData.forEach(function(sprite) {
            HTML += '<option value="' + sprite.objName + '">' + sprite.objName + '</option>';
        });
        HTML += '</select>';
        var spriteSelector = document.getElementById("spriteSelection");
        spriteSelector.innerHTML = HTML;
        spriteSelector.onchange = function(e) {

            Argon.renderBlocks(JSON.parse(JSON.stringify(Argon.spriteData[e.target.selectedIndex])));
        };
    },
    loadBlockly: function() {
        console.log("injecting data into div");
        //these S&V values can be changed to effect the overall look
        Blockly.HSV_SATURATION = 0.9;
        Blockly.HSV_VALUE = 0.7;
        //scratch-style event blocks
        Blockly.BlockSvg.START_HAT = true;
        // player-area should take the whole screen vertically
        document.getElementById('player-area').setAttribute("style", 'height: ' + (window.innerHeight).toString() + 'px; width:' + 99 + '%');
        // blockly div should fill the space below the player
        document.getElementById('blocklyDiv').setAttribute("style", 'height: ' + (window.innerHeight - 420).toString() + 'px; width:' + 99 + '%');

        window.workspace = Blockly.inject('blocklyDiv', {
            toolbox: document.getElementById('toolbox'),
            zoom: { //this allows zooming the workspace
                controls: true,
                startScale: 0.5,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.1
            }
        });
        window.workspace.registerButtonCallback("createEventPressed", createEvent);

        function createEvent() {
            console.log("test")
        }
    },
    initData: function(data) {
        window.eventsData = data.events;
        if (typeof data.variables === 'undefined' || data.variables.length === 0) {
            data.variables = ["variable1", "variable1"];
        }
        else window.variableOptionsArray = []; //clear the default "variable1" value
        console.log(data)
        data.variables.forEach(function(variable) {
            window.variableOptionsArray.push([variable.name, variable.name]);
        });

        if (typeof data.lists === 'undefined' || data.lists.length === 0) {
            data.lists = ["list1", "list1"];
        }
        else window.listOptionsArray = []; //clear the default "variable1" value
        if (typeof data.lists === 'undefined') data.lists = [];
        data.lists.forEach(function(list) {
            window.listOptionsArray.push([list.listName, list.listName]);
        });
    },
    scale: { //this scale approximates the size ratio - scratch:blockly
        x: 2,
        y: 1.3
    },
    renderBlocks: function(data) {

        var scale = {
            x: 2,
            y: 1.3
        };
        //these variables/lists are for this sprite only
        if (typeof data.variables !== 'undefined') {
            data.variables.forEach(function(variable) {
                window.variableOptionsArray.push([data.objName + ": " +variable.name, variable.name]);
            });
        }
        if (typeof data.lists !== 'undefined') {
            data.lists.forEach(function(list) {
                window.listOptionsArray.push([data.objName + ": " +list.listName, list.listName]); //data.objName + ": " +list.listName
            });
        }
        //the scriptObj holds the scripts once they've
        //been organized to match the xml structure of blockly
        var scriptObj = {
            block: []
        };
        if (typeof data.scripts === 'undefined') data.scripts = [];

        data.scripts.forEach(function(originalScript) {

            //a blockArray to hold the new script blocks
            var script = originalScript.slice();

            var blockArray = script[2].shift();

            //the top block of the script
            var newBlock = {
                _type: blockArray[0], //the block name
                _id: makeid(), //20 char random id
                value: [], //a place to store the input value (repeat loop or something)
                _x: script[0] * Argon.scale.x, //the scaled xLoc
                _y: script[1] * Argon.scale.y, //the scaled yLoc
                statement: []
            };
            //add the new block to the scriptObj block array
            scriptObj.block.push(newBlock);
            //add the inputs to the top block
            addInputs({
                block: newBlock //could add the last block of scriptObj instead here
            }, blockArray);


            addNextBlock(scriptObj.block[scriptObj.block.length - 1]);

            function addNextBlock(targetBlock) {
                //still blocks left
                if (script[2].length > 0) {
                    //get the next block from the script
                    var blockArray = script[2].shift();
                    //make a block object for the new block
                    var blockObj = {
                        _type: blockArray[0],
                        _id: makeid(),
                        value: [],
                        statement: []
                    };

                    //add the block to the next of the targetBlock
                    targetBlock.next = {
                        block: blockObj
                    };
                    //add any inputs to the block
                    addInputs(targetBlock.next, blockArray);
                    //recursion until the blocks are used used up from the shift
                    addNextBlock(targetBlock.next.block);
                }
            }

            function addInputs(scriptObj, blockArray) {

                //go through the blockArray starting with the 1st input
                //which is at index 1
                for (var i = 1; i < blockArray.length; i++) {
                    //ignore null values
                    if (blockArray[i] != null) {
                        //here we've found an array of new blocks nested in our existing block
                        //we'll need to add each of them, possibly calling this function again recusively
                        if (typeof blockArray[i] === 'object') { //an array actually
                            //check to make sure the block is formatted as an array
                            if (blockArray[i][0] === "readVariable" || blockArray[i][0] === "contentsOfList:") {
                                //we're dealing with a variable
                                console.log(blockArray[i][1])
                                scriptObj.block.value.push({
                                        
                                    _name: "VALUE" + i.toString(),
                                    block: {
                                        _type: blockArray[i][0],
                                        _id: makeid(),
                                        field: {
                                            __text: blockArray[i][1],
                                            _name: "VARIABLE"
                                        }
                                    }
                                });

                            }
                            else { //we have a nested statement
                                //in the case of control inputs (etc.), they must be formatted
                                //statements come in an array already
                                if (typeof blockArray[i][0] === "string") {
                                    blockArray[i] = [blockArray[i]];
                                }
                                //for some reason they come reversed
                                //remember this when you're working on saving
                                blockArray[i].reverse();
                                //go through the blocks adding each to the statement
                                blockArray[i].forEach(function(block) {
                                    var position = scriptObj.block.statement.push({
                                        _name: "VALUE" + i.toString(),
                                        block: {
                                            _type: block[0],
                                            _id: makeid(),
                                            value: [],
                                            statement: [],
                                            next: []
                                        }
                                    });
                                    //add any inputs here
                                    //position is one more than the index of the statement 
                                    addInputs(scriptObj.block.statement[position - 1], block);
                                }); //end of statement forEach 
                            }

                        } //object check
                        else {
                            //just a regular input
                            //we treat every input as if it's a regular input block
                            //and a dropdown.  The duplication doesn't hurt, and
                            //there isn't an easy way to tell the difference, without
                            //making a reference list

                            //we need to create the input block
                            var type = 'input';
                            var text = blockArray[i].toString();
                            //we need to treat color inputs differently
                            var colorInputBlocks = ['touchingColor:', 'color:sees:', 'penColor:'];
                            if (colorInputBlocks.indexOf(blockArray[0]) > -1) {
                                type = 'colour_input';
                                text = toColor(blockArray[i]); //convert to argb
                            }
                            //https://stackoverflow.com/a/11866980
                            function toColor(num) {
                                num >>>= 0;
                                var b = num & 0xFF,
                                    g = (num & 0xFF00) >>> 8,
                                    r = (num & 0xFF0000) >>> 16,
                                    a = ((num & 0xFF000000) >>> 24) / 255;
                                return "rgba(" + [r, g, b, a].join(",") + ")";
                            }
                            //Now we'll deal with variable inputs on data blocks
                            //we'll specify the data type and field position
                            if (blockArray[0] === 'setVar:to:' && i === 1) type = 'readVariable';
                            if (blockArray[0] === 'changeVar:by:' && i === 1) type = 'readVariable';
                            if (blockArray[0] === 'showVariable:') type = 'readVariable';
                            if (blockArray[0] === 'hideVariable:') type = 'readVariable';
                            if (blockArray[0] === 'append:toList:' && i === 2) type = 'contentsOfList:';
                            if (blockArray[0] === 'deleteLine:ofList:' && i === 2) type = 'contentsOfList:';
                            if (blockArray[0] === 'insert:at:ofList:' && i === 3) type = 'contentsOfList:';
                            if (blockArray[0] === 'setLine:ofList:to:' && i === 2) type = 'contentsOfList:';
                            if (blockArray[0] === 'getLine:ofList:' && i === 2) type = 'contentsOfList:';
                            if (blockArray[0] === 'lineCountOfList:') type = 'contentsOfList:';
                            if (blockArray[0] === 'list:contains:' && i === 1) type = 'contentsOfList:';
                            if (blockArray[0] === 'showList:') type = 'contentsOfList:';
                            if (blockArray[0] === 'hideList:') type = 'contentsOfList:';
                            if (blockArray[0] === 'whenIReceive') type = 'message';
                            if (blockArray[0] === 'doBroadcastAndWait') type = 'message';
                            if (blockArray[0] === 'broadcast:') type = 'message';
                            console.log(scriptObj.block)
                            var name = "FIELDNAME"
                            if(type === 'readVariable')
                            {
                                name = "VARIABLE"
                            }
                            scriptObj.block.value.push({
                                _name: "VALUE" + i.toString(),
                                block: {
                                    _type: type,
                                    _id: makeid(),
                                    field: [{
                                        __text: text,
                                        _name: name
                                    }]
                                }
                            });


                            //we'll also set the drop down field
                            if (typeof scriptObj.block.field === 'undefined') scriptObj.block.field = [];
                            var name = "VALUE" + i.toString();
                            //we need to treat variable, list, and event dropdowns a little differently
                            var dropdownList = ['readVariable', 'contentsOfList:', 'getLine:ofList:', 'lineCountOfList:', 'list:contains:', 'showList:', 'hideList:', 'whenIReceive', 'doBroadcastAndWait', 'broadcast:', 'setVar:to:', 'changeVar'];
                            //the dropdown is always in the first position; we just need to set the name prop 
                            //console.log(scriptObj.block)
                            // console.log(i,blockArray[0] )
                            if (i === 1 && dropdownList.indexOf(blockArray[0]) > -1) {
                                // console.log("found a variable")
                                name = blockArray[1];
                            }
                            // console.log(name)
                            scriptObj.block.field.push({
                                __text: blockArray[i].toString(),
                                _name: name
                            });
                            console.log(scriptObj.block.field)
                            if (typeof window.eventOptionsArray === 'undefined') window.eventOptionsArray = [];
                            if (blockArray[0] === 'whenIReceive' && window.eventOptionsArray.indexOf(blockArray[0]) === -1) {
                                window.eventOptionsArray.push([blockArray[1], blockArray[1]]);
                            }

                        } //not object

                    } //null check
                }
            }
        });
        //make a new X2JS conversion object
        var x2js = new X2JS();

        //wrap the scriptObj in an xml tag (could be done above)
        var finalObject = {
            xml: {
                _xmlns: "http://www.w3.org/1999/xhtml",
                block: scriptObj.block
            }
        }

        //make the xmlText for blockly
        var xmlText = x2js.json2xml_str(finalObject)
        console.log(xmlText)
            //these will prevent null warnings on blank statements and values
        xmlText = replaceAll(xmlText, '<value/>', '');
        xmlText = replaceAll(xmlText, '<statement/>', '');

        //this function replaces all occurences of a string within a string
        //I use it to remove blank xml tags
        //https://stackoverflow.com/a/1144788
        function replaceAll(str, find, replace) {
            return str.replace(new RegExp(find, 'g'), replace);
        }

        if (xmlText) {
            //clear the old space out
            Blockly.mainWorkspace.clear();
            //inject the blocks into the dom
            if (data.scripts.length > 0) Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xmlText), Blockly.mainWorkspace);
        }
        //this makes a random 20-char id
        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 20; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }

    }
};


//test functions below

//these save/load functions allow the creation of proper
//xml for checking the output we've generated based on sb2 files
window.saveWorkspace = function() {
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    localStorage.setItem("blockly.xml", xmlText);
};

window.dumpXML = function() {
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    return xmlText;
};

window.dumpObj = function() {
    var xmlText = window.dumpXML()
    var x2js = new X2JS();
    return x2js.xml_str2json(xmlText).xml.block;
}

window.makeScript = function(save) {
    var blocklyObjs = window.dumpObj();
    if (typeof blocklyObjs === 'undefined') blocklyObjs = [];
    //account for single scripts
    if (typeof blocklyObjs[1] === 'undefined') blocklyObjs = [blocklyObjs];
    blocklyObjs.forEach(function(blocklyObj, index) {
        var newScript = [];
        console.log(blocklyObj);
        newScript.push(Math.round(parseInt(blocklyObj._x) / Argon.scale.x));
        newScript.push(Math.round(parseInt(blocklyObj._y) / Argon.scale.y));
        newScript.push([
            [blocklyObj._type]
        ]);

        //add the block, null means that we'll start with
        //the default: newScript[2]
        addBlock(blocklyObj, null);

        //this function adds a block to the target block
        function addBlock(block, target) {
            // console.log(block)
            //add the block to the target
            //we've already added the top block
            if (target !== null) {
                target.push([block._type]);
            }
            else {
                //set the default target
                target = newScript[2];
            };
            if (typeof block.value !== 'undefined') {
                //we need to see if it's an array of values or just a single one
                //the single object can't be iterated
                if (typeof block.value[1] !== 'undefined') {
                    block.value.forEach(function(value) {
                        target[target.length - 1].push(value.block.field.__text);
                    });
                }
                else {
                    if (block.value.block._type === 'input') {
                        target[target.length - 1].push(block.value.block.field.__text);
                    }
                    else {
                        console.log("VARIABLE/LIST HANDLER")
                        target[target.length - 1].push([block.value.block._type, block.value.block.field.__text]);

                    }

                }

            }
            if (typeof block.field !== 'undefined') {
                target[target.length - 1].push(block.field.__text);
            }
            if (typeof block.statement !== 'undefined') {
                //make a new target array
                target[target.length - 1].push([])
                    //here we need to push a new target array
                addBlock(block.statement.block, target[target.length - 1][target[target.length - 1].length - 1]);
            }
            if (typeof block.next !== 'undefined') {
                //we have a next block, add it to the original target
                addBlock(block.next.block, target);
            }
        }
        //console.log(newScript)

        console.log(Argon.spriteData[index])
        if (typeof Argon.spriteData[0].scripts !== 'undefined') {
            console.log(newScript)
            Argon.spriteData[0].scripts[index] = newScript;
            Argon.loadedJSON.children[0].scripts[index] = newScript;
            //console.log(Argon.loadedJSON.children[0].scripts[index])
        }

    });
    //the img and wav ids aren't correct as loaded by the sb2 for some reason
    //they're (all?) -1 incoming
    //the proper numbering is sequentially starting with the sprites
    //then finishing with the stage
    var id = 1; //1-index
    Argon.loadedJSON.children.forEach(function(sprite) {
        //all the costumes
        if (typeof sprite.costumes !== 'undefined') {
            sprite.costumes.forEach(function(costume) {
                costume.baseLayerID = id;
                id++;
            });
        }

    });
    //apply to the stage itself also
    Argon.loadedJSON.costumes.forEach(function(costume) {
        costume.baseLayerID = id;
        id++;
    });
    //now do the sounds the same way
    id = 0;
    Argon.loadedJSON.children.forEach(function(sprite) {
        if (typeof sprite.sounds !== 'undefined') {
            sprite.sounds.forEach(function(sound) {
                sound.soundID = id;
                id++;
            });
        }

    });
    //apply to the stage itself also
    Argon.loadedJSON.sounds.forEach(function(sound) {
        sound.soundID = id;
        id++;
    });

    //todo: this needs more logic to deal with existing variables
    //this will not retain value, for example
    //probably other problems too
    Argon.loadedJSON.variables = [];
    window.variableOptionsArray.forEach(function(variable) {
            console.log(variable)
            Argon.loadedJSON.variables.push({
                "name": variable[0],
                "value": 0,
                "isPersistent": false
            });

        })
        //save it
    var zip = new JSZip();
    zip.file('project.json', JSON.stringify(Argon.loadedJSON));

    zip.file("0.png", null, {
        base64: true
    });

    Argon.imgList.forEach(function(image, index) {
        var position = (index + 1).toString();
        if (image.type === 'svg') {
            zip.file(position + '.svg', image.data);
        }
        else {
            zip.file(position + '.' + image.type, getBase64Image(image.data), {
                base64: true
            });
        }
    });
    Argon.wavList.forEach(function(wav, index) {
        //wav string to Html5 blob
        //https://stackoverflow.com/a/13285672
        var wavString = wav.data;
        var len = wavString.length;
        var buf = new ArrayBuffer(len);
        var view = new Uint8Array(buf);
        for (var i = 0; i < len; i++) {
            view[i] = wavString.charCodeAt(i) & 0xff;
        }
        var blob = new Blob([view], {
            type: "audio/x-wav"
        });
        zip.file(index.toString() + '.' + wav.type, blob, {
            binary: true
        });
    });

    function getBase64Image(img) {
        // Create an empty canvas element
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        // Copy the image contents to the canvas
        var ctx = canvas.getContext("2d");
        var dataURL = '';
        if (typeof img.src !== 'undefined') {
            ctx.drawImage(img, 0, 0);

            // Get the data-URL formatted image
            // Firefox supports PNG and JPEG. You could check img.src to
            // guess the original format, but be aware the using "image/jpg"
            // will re-encode the image.
            dataURL = canvas.toDataURL("image/png");
        }
        else {
            dataURL = img;
        }


        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    zip.generateAsync({
            type: "blob"
        })
        .then(function(content) {
            // see FileSaver.js
            if (save) saveAs(content, "argonEdit.sb2");
        });
};
window.loadWorkspace = function() {
    var xmlText = localStorage.getItem("blockly.xml");
    if (xmlText) {
        Blockly.mainWorkspace.clear();
        xmlDom = Blockly.Xml.textToDom(xmlText);
        var x2js = new X2JS();
        console.log(x2js.xml_str2json(xmlText));
        //this xmlText can be checked against what we're generating
        console.log(xmlText)
        var x2js = new X2JS();
        var jsonObj = x2js.xml_str2json(xmlText);
        console.log(jsonObj.xml)
        Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
    }
};
