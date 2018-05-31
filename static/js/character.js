/* Character Class

Class needs to be controllable from the keyboard and from code 
 - Which means the class will have data feilds. 
 - If a keyboard listener is attached, data fields should change accordingly
 - Let's make character with data fields and with functions that change those fields 

 Data Fields 
  - x, y
  - direction
  - frame (0 - 2)
  - img_matrix []
  - current_img

  Keyboard
  - probably a keyboard system exetrnal to the character
  - character can expose an actions api

  Methods
   - walk(direction)
   	- sets direction
   	- sets frame
   - stop()
    - sets frame
*/

class Character {
	constructor(img_matrix) {
		this.img_mtrx = img_matrix;
		this.x = 0;
		this.y = 0;
		this.xx = 0;
		this.yy = 0;
		this.cdir = 3;
		this.cframe = 0;
		this.cc = 0;
		this.slow = 60;
		this.isWalking = 0;
	}

	set direction(dir){
		this.cdir = dir;
	}

	go(){
		this.isWalking = 1;
	}

	stop(){
		this.isWalking = 0;
	}

	get image(){
		return this.img_mtrx[this.cdir][this.cframe];
	}

	update(){
		const R = 0, L = 1, U = 2, D = 3;
		let l = this.img_mtrx[this.cdir].length;
		let w = this.isWalking;

		this.cc == (this.cc + 1) % 100;
		this.cframe = 0;

		if (w === 1)
			this.cframe = (this.cc / this.slow) % (l-1) + 1;

		switch (this.cdir){
			case R:
				this.xx += 1 * w;
				break;
			case L:
				this.xx -= 1 * w;
				break;
			case U:
				this.yy -= 1 * w;
				break;
			case D:
				this.yy += 1 * w;
				break;
		}
		this.x = this.xx / this.slow;
		this.y = this.yy / this.slow;
	}


}
