"use strict";

var makeEmitter = require("pubit-as-promised").makeEmitter;

var events = ["fileTypeAssociation"];

module.exports = function FilePlugin() {
    var that = this;
    var publish = makeEmitter(that, events);

    that.handleKind = function (args) {
        var files = args.detail.files;
        publish("fileTypeAssociation", files);
    };
};
