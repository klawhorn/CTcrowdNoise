module.exports = CrowdNoiseView;

var CrowdNoise = require('./model.js');

function CrowdNoiseView (model) {
	this.model = model;
	
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
    var animationElement = document.querySelector('#container-gradient')
    if (clicks < 1) {
        animationElement.style.animationDuration = 5 + 's';
        // this.model.decrement();
    } else if (clicks < 3) {
        animationElement.style.animationDuration = 2 + 's';
        // this.model.decrement();
    } else if (clicks < 5) {
        animationElement.style.animationDuration = 500 + 'ms';
        // this.model.decrement();
    } else if (clicks < 7) {
        animationElement.style.animationDuration = 10 + 'ms';
        // this.model.decrement();
    } else {
       animationElement.style.animationDuration = 1 + 'ms';
       // this.model.decrement();
    }
}




	


