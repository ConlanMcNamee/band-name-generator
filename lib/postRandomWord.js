'use strict';

module.exports = function postRandomWord(word, object) {
	//if the word doesn't exist already
	// if doesnt exists, add it as a property to that object

	//if the word does exsit
	if (object.hasOwnProperty(word)) {
		return {msg: "Thanks for trying! We already have that word."} 
	} else {
		object[word] = true;
		return {msg: "Thanks for submitting your awesome words, " + word + "!"};
	}
	// and send a message back thanking them for their word
	//if it does exists, then send a nice message back
}