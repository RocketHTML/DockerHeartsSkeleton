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
		this.height = 200
		this.width = 150
		this.left = 0
		this.top = 0

		this.doc = document
		this.div = document.createElement("div")
		this.div.setAttribute("id", "notepad")
		this.div.style.display = "none"
		this.div.style.position = "absolute"
		this.div.style.height 	= this.height + "px"
		this.div.style.width 	= this.width + "px"
		this.div.style.border	= "solid 1px blue"
		this.canvasdiv = document.getElementById("canvasdiv")
		this.canvasdiv.appendChild(this.div) // it exists hidden now

		this.textarea		= document.createElement("textarea")
		this.textarea.style.height = (this.height - 25) + "px"
		this.textarea.style.width = this.div.style.width
		this.div.appendChild(this.textarea)
		this.dropbtn		= document.createElement("button")
		this.dropbtn.innerHTML = "drop"
		this.dropbtn.style.display = "none"
		this.div.appendChild(this.dropbtn)
		this.collectbtn		= document.createElement("button")
		this.collectbtn.style.display = "none"
		this.div.appendChild(this.collectbtn)
		this.editbtn		= document.createElement("button")
		this.closebtn		= document.createElement("button")

		this.open = false
		this.file = undefined

		this.toggle = this.makeToggle()
		this.canvasdiv.addEventListener("click", this.toggle)
	}

	makeToggle(){
		// decides what value is in textarea
			// based on read, write, or update mode
		let notepad 	= this
		let pad		= this.div
		let text	= this.textarea
		let checkFile	= function(){return false}
		let drop	= this.dropbtn
		return function(){
			if (notepad.open){
				let active = document.activeElement.tagName
				if (active !== "TEXTAREA"){
					notepad.open = false
					pad.style.display = "none"
				}
			}
			else {
				notepad.open = true
				notepad.left = mouseX
				notepad.top = mouseY
				pad.style.left = notepad.left
				pad.style.top = notepad.top
				pad.style.display = "block"
				text.focus()
				if (checkFile()){
				}
				else{
					drop.style.display = "inline-block"
				}
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
