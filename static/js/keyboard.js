/* Keyboard class of listeners 

*/

class Keyboard {

	constructor(doc, character){
		this.doc = doc;
		this.doc.addEventListener("keydown", this.move);
		this.doc.addEventListener("keyup", this.stop);
		this.char = character;
	}

	move(event){
		const R = 0, L = 1, U = 2, D = 3;
		const keys = ["d","a","w","s"];
		dir = keys.indexOf(event.key);
		if (dir === -1)
			return;
		this.char.direction = dir;
		this.char.go();
	}

	stop(event){
		this.char.stop()
	}


}
