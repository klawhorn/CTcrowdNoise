var CrowdNoise = require('./model.js');
var ButtonView = require('./crowdButton/buttonView.js');
var CrowdNoiseView = require('./crowdMeter/crowdNoiseView.js');

var crowdNoise = new CrowdNoise;
var buttonView = new ButtonView(crowdNoise);
var crowdNoiseView = new CrowdNoiseView(crowdNoise);