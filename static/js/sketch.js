/////////////////////////////////////////////////////////////////////////////////////////
////////////// set up arrays 
/////////////////////////////////////////////////////////////////////////////////////////
let char = 'Zack'
let dir = 'static/lockusprites/'

const poses = ['Right', 'Left', 'Back', 'Front']
const R = 0; L = 1, U = 2, D = 3; 
let directions = [[], [], [], []] // holds all images

let bg = 0

let zatch = new Character(directions);
let keyboard = new Keyboard(document, zatch);
////////////////////////////////////////////////////////////////////////////////////////
/////////////// sprites loaded
////////////////////////////////////////////////////////////////////////////////////////
function preload(){
	for (let i = 0; i < 3; i++){
		directions[R][i] = loadImage(dir + char + poses[R] + i + '.png')
		directions[L][i] = loadImage(dir + char + poses[L] + i + '.png')
		directions[U][i] = loadImage(dir + char + poses[U] + i + '.png')
		directions[D][i] = loadImage(dir + char + poses[D] + i + '.png')
	}


}

function setup(){
	createCanvas(500, 500)
	background(bg)
}

function draw(){
	background(bg)
	zatch.update();
	let img = zatch.image;
	let x = zatch.x;
	let y = zatch.y;
	image(img, x, y);
}
