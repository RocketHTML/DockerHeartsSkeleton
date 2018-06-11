// contains classes to handle mouse clicks on the canvas
// notepad class 
	// listens to mouse clicks
	// appears and disappears
		// contains text area
		// contains buttons
		// requires canvas 
		// requires list of file objects (home)
			// to determine what buttons/actions to show

class Notepad {
	constructor(character){
		this.character = character
		this.home = character.home
		this.socket = this.home.socket;

		this.doc = document
		this.div = document.createElement("div")
		this.div.setAttribute("id", "notepad")
		this.div.style.display = "none"
		this.div.style.position = "absolute"
		this.div.style.height 	= "100px"
		this.div.style.width 	= "100px"
		this.div.style.border	= "solid 1px blue"
		this.canvasdiv = document.getElementById("canvasdiv")
		this.canvasdiv.appendChild(this.div) // it exists hidden now

		this.textarea
		this.dropbtn
		this.collectbtn
		this.editbtn
		this.closebtn

		this.open = false
		this.file = undefined

		this.toggle = this.makeToggle()
		this.canvasdiv.addEventListener("click", this.toggle)
	}

	makeToggle(){
		// decides what value is in textarea
			// based on read, write, or update mode
		notepad = this
		pad 	= this.div
		return function(){
			if (notepad.open){
				notepad.open = false
				pad.style.display = "none"
			}
			else {
				notepad.open = true
				pad.style.left = mouseX
				pad.style.top = mouseY

				pad.style.display = "block"
			}

		}
		

	}

	sendFile(){
		soc = this.socket
		homie = this.home
		char = this.character
		text = this.textarea
		return function(){
			soc.emit("drop", {text: text.value, 
							  uid: homie.uid,
							  username: homie.username,
							  alterego: homie.alterego,
							  x:char.x, y:char.y})
		}
	}

	collectFile(){
		// file must be defined at this point
		// will get back to this
		soc = this.socket
		homie = this.home
		char = this.character
		text = this.textarea
		return function(){}
	}
}