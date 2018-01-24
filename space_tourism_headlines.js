//RSS feed flash briefing skill for https://spacetourismguide.com/feed/


'use strict';

var Alexa = require('alexa-sdk');

var handlers = {
  "HelloIntent": function () {
      this.response.speak("Hello, welcome to the Space Tourism Headlines skill.");
      this.emit(":responseReady");
   },
  "LaunchRequest": function () {
    this.response.speak("Welcome to Space Tourism Headlines");
    this.emit(":responseReady");
   }
};



//Enter body of skill here




// Stop
'AMAZON.StopIntent': function() {
    this.response.speak('Ok.');
    this.emit(':responseReady');
},

// Cancel
'AMAZON.CancelIntent': function() {
    this.response.speak('Ok.');
    this.emit(':responseReady');
},

exports.handler = function(event, context, callback) {
	var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
