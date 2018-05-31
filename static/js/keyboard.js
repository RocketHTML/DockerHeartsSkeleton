/* Keyboard class of listeners 

*/

class Keyboard {

	constructor(doc, character){
		this.doc = doc;
		this.character = character;
		this.move = this.moveFunc(1);
		this.stop = this.moveFunc(0);
		this.doc.addEventListener("keydown", this.move);
		this.doc.addEventListener("keyup", this.stop);
	}

	moveFunc(go){
		const z = this.character;
		const R = 0, L = 1, U = 2, D = 3;
		const keys = ["d","a","w","s"];

		function move(event){
			let dir = keys.indexOf(event.key);
			if (dir === -1)
				return;
			z.direction = dir;
			z.go();
		}

		function stop(event){
			z.stop();
		}

		if (go === 1)
			return move;
		else
			return stop;
	}


}
