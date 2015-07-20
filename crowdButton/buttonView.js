module.exports = ButtonView;

var hg = require('hyperglue2');
var buttonTemplate = require('./template.html');

function ButtonView (model) {
	if (!model) {
		throw new Error("This view does not function without connection to a database");
	}
	
	this.model = model;
	this.el = hg(buttonTemplate);

	var buttonCont = document.querySelector('#button-container');
	buttonCont.appendChild(this.el);

	this.buttonListener = this.buttonListener.bind(this);
	this.onclick = this.onclick.bind(this);

	this.buttonListener();
}

ButtonView.prototype.buttonListener = function () {
	//working event listener
	document.getElementById("addButton").addEventListener('click', this.onclick);
}

ButtonView.prototype.onclick = function () {
	//What to do when the button is clicked, working.
	this.model.increase();
	this.model.decrease();
}