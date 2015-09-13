module.exports = CrowdNoiseView;

var hg = require('hyperglue2');
var meterTemplate = require('./template.html');

function CrowdNoiseView (model) {
    if (!model) {
        throw new Error("This view does not function without connection to a database");
    }
    
	this.model = model;
    this.el = hg(meterTemplate);
	
    var viewCont = document.querySelector('#maindiv');
    viewCont.appendChild(this.el);

	//binding the prototype methods to the Constructor
	this.render = this.render.bind(this); 
	this.watchforChange = this.watchforChange.bind(this);
	this.changeSpeed = this.changeSpeed.bind(this);

	this.watchforChange();
	this.changeSpeed();
}

CrowdNoiseView.prototype.render = function () {
	//add the event listener through the initalize method
	this.changeSpeed();
}

CrowdNoiseView.prototype.watchforChange = function () {
	//watching for the update event from the model
	this.model.on('update', this.render);
}

CrowdNoiseView.prototype.changeSpeed = function () {
    var clicks = this.model.clickCount;
    var animationElement = document.querySelector('#img')
    if (clicks < 1) {
        animationElement.style.animationDuration = 3 + 's';        
    } else if (clicks < 3) {
        animationElement.style.animationDuration = 2 + 's';        
    } else if (clicks < 5) {
        animationElement.style.animationDuration = 1 + 's';    
    } else if (clicks < 7) {
        animationElement.style.animationDuration = 500 + 'ms';
    } else if (clicks < 10) {
        animationElement.style.animationDuration = 250 + 'ms';
    } else if (clicks < 13) {
        animationElement.style.animationDuration = 125 + 'ms';
    } else if (clicks < 15) {
        animationElement.style.animationDuration = 75 + 'ms';
    } else {
       animationElement.style.animationDuration = 40 + 'ms';
    }
}





	


