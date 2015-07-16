
var CrowdNoise = require('./model.js');
var ButtonView = require('./buttonView.js');


var buttontemplate = require('./template.html');
console.log(buttontemplate);

var hg = require('hyperglue2');
var el = hg(buttontemplate);

var buttonCont = document.querySelector('#button-container');
buttonCont.appendChild(el);


var crowdNoise = new CrowdNoise();
var buttonView = new ButtonView(crowdNoise);



