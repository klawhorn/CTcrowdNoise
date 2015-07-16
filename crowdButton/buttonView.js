module.exports = ButtonView;

var buttonTemplate = require('./template.html');
var hg = require('hyperglue2');

function ButtonView (model) {
	this.model = model;
	this.el = hg(buttonTemplate);

	this.initialize = this.initialize.bind(this);
	this._onclick = this._onclick.bind(this);

	this.initialize();
}

ButtonView.prototype.initialize = function () {
	//working event listener
	document.getElementById("addButton").addEventListener('click', this._onclick);
}

ButtonView.prototype._onclick = function () {
	//What to do when the button is clicked, working.
	this.model.increase();
	this.model.decrement();
}