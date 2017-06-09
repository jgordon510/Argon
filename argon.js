var Argon = {
    loadBlockly: function() {
        console.log("injecting data into div")
        Blockly.HSV_SATURATION = 0.76;
        Blockly.HSV_VALUE = 0.78;
        Blockly.BlockSvg.START_HAT = true;
       // player-area
        document.getElementById('player-area').setAttribute("style", 'height: '+(window.innerHeight).toString()+'px; width:' + 99 + '%');
        document.getElementById('blocklyDiv').setAttribute("style", 'height: '+(window.innerHeight-440).toString()+'px; width:' + 99 + '%');
        window.workspace = Blockly.inject('blocklyDiv', {
            toolbox: document.getElementById('toolbox'),
            zoom: {
                controls: true,
                wheel: true,
                startScale: 0.8,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2
            }
        });
    },
    renderBlocks: function(data) {

        console.log("rendering blocks from file");
        if (data.objName === "Sprite1") { //for now
            var scriptObj = {
                block: []
            };

            data.scripts.forEach(function(script) {

                var blockArray = script[2].shift()
                var newBlock = {
                    _type: blockArray[0],
                    _id: makeid(),
                    value: [],
                    _x: script[0],
                    _y: script[1],
                } 
                scriptObj.block.push(newBlock);
                addInputs(scriptObj, blockArray)
                addBlock(scriptObj.block[scriptObj.block.length-1]);

                function addBlock(block) {
                    if (script[2].length > 0) {
                        console.log(script[2].toString())
                        var blockArray = script[2].shift();
                        var blockObj = {
                            _type: blockArray[0],
                            _id: makeid(),
                            value: []
                        };

                        block.next = {
                            block: blockObj
                        };
                        addInputs(block.next, blockArray)
                        addBlock(block.next.block);
                    }
                }

                function addInputs(scriptObj, scriptData) {
                    console.log(scriptObj.block, scriptData)
                    for (var i = 1; i < scriptData.length; i++) {
                        console.log(scriptData[i])
                        scriptObj.block.value.push({
                            _name: "VALUE" + i.toString(),
                            block: {
                                _type: "input",
                                _id: makeid(),
                                field: {
                                    __text: scriptData[i].toString(),
                                    _name: "FIELDNAME"
                                }
                            }
                        })
                    }

                }


            });
            var x2js = new X2JS();
            var finalObject = {
                xml: {
                    _xmlns: "http://www.w3.org/1999/xhtml",
                    block: scriptObj.block
                }
            }
            var xmlText = x2js.json2xml_str(finalObject)
            console.log(xmlText)
            if (xmlText) {
                Blockly.mainWorkspace.clear();
                Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xmlText), Blockly.mainWorkspace);
            }
        }

        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 20; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

    }
};

window.saveWorkspace = function() {
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);

    localStorage.setItem("blockly.xml", xmlText);
};


window.loadWorkspace = function() {
    var xmlText = localStorage.getItem("blockly.xml");
    if (xmlText) {
        Blockly.mainWorkspace.clear();
        xmlDom = Blockly.Xml.textToDom(xmlText);
        var x2js = new X2JS();

        console.log(x2js.xml_str2json(xmlText));
        console.log(xmlText)
        var x2js = new X2JS();
        var jsonObj = x2js.xml_str2json(xmlText);
        console.log(jsonObj.xml)
        Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
    }
};

function test() {
    var text = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="forward:" id="FOCtyk8mE8txmXECod4D" x="26" y="35"><value name="VALUE"><block type="input" id="iPA%_v|JlL0}14~o!.s~"><field name="FIELDNAME">10</field></block></value></block></xml>'
    var x2js = new X2JS();

    console.log(x2js.xml_str2json(text));
}
