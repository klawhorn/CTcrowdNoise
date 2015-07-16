module.exports = CrowdNoise;

var events = require('events');
var inherits = require('inherits');
var Firebase = require('firebase');


var clicks = new Firebase('https://crowdpractice.firebaseio.com/clicks');

//trying to get the events added, having the CrowdNoise inherit the ability to add eventEmmitter
inherits(CrowdNoise
, events.EventEmitter);

function CrowdNoise () {
	var self=this;
	//setting the database for the model
	this.database = clicks;
	
	//setting an initial value of clicks
	this.clickCount = 0;
	
	//binding methods
	this.update = this.update.bind(this);
	this._onupdate = this._onupdate.bind(this);
	this.increase = this.increase.bind(this);
	this.decrement = this.decrement.bind(this);

	//running the update function so that the db has a change event listener
	this.update();

	//attaching event listeners to set up the update event.
	events.EventEmitter.call(this);
}

CrowdNoise.prototype.decrement = function () {
	var self= this;
	setTimeout( function () {
		self.database.transaction( function(cv){
			return cv - 1;
		})
	}, 5000);
}

CrowdNoise.prototype.update = function () {
	//this should be watching the db for the change in the clicks property
	this.database.on("value", this._onupdate);
}

CrowdNoise.prototype.increase = function () {
	//function that runs when the button in the model is clicked
	this.database.transaction(function(cv) {
		return (cv || 0) +1;
	});
}

CrowdNoise.prototype._onupdate = function (snapshot) {
	//when a value event comes through from a db change...
	var data = snapshot.val(); 

	//MAKE THE CLICKCOUNT VARIABLE BE DETERMINED BY LOGIC FROM THE SNAPSHOT
	this.clickCount = data;
	
	//emit an update
	this.emit('update');
}

