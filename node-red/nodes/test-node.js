module.exports = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
        
        console.log(45678);
        require("../../index").a();
    }
    RED.nodes.registerType("lower-case", LowerCaseNode);
}