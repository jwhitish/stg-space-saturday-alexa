"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  "HelloIntent": function () {
    this.response.speak("Hello, and welcome to Space Saturday!");
    this.emit(':responseReady');
  },
  "LaunchRequest": function () {
    this.response.speak("Welcome to Space Saturday! Please visit Space Tourism Guide dot com for the latest news.");
    this.emit(':responseReady');
  }
};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
