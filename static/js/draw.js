
//home

const R = 0, L = 1, U = 2, D = 3; 
let char = 'Zack', dir = 'static/lockusprites/';
const poses = ['Right', 'Left', 'Back', 'Front'];
let bg = 0;

function preload() {
	for (let i = 0; i < 3; i++){
		home.directions[R][i] = loadImage(dir + char + poses[R] + i + '.png')
		home.directions[L][i] = loadImage(dir + char + poses[L] + i + '.png')
		home.directions[U][i] = loadImage(dir + char + poses[U] + i + '.png')
		home.directions[D][i] = loadImage(dir + char + poses[D] + i + '.png')
	}
}

function setup(){
	let canvas = createCanvas(500, 500)
	interface.canvasDiv.appendChild(canvas)
	background(bg)
}

function draw(){
	background(bg);
	let oListCopy = home.othersList.slice();
	for (let pid of oListCopy){
		let player = home.others[pid];
		player.update();
		player.timer += 1;
		let img = player.image;
		let x = player.x;
		let y = player.y;
		image(img, x, y);
		deleteOther(player);
	}