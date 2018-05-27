let chars = ['Zack']
let USER = 0
let poses = ['Right', 'Left', 'Back', 'Front']

let right = [], left = [], up = [], down = []; // holds images
let directions = [right, left, up, down] // holds all images
const R = 0; L = 1, U = 2, D = 3; // use on directions array

let dir = 'static/lockusprites/'
let frame = 0;
let bg = 0

function preload(){
	for (let i = 0; i < 3; i++){
		directions[R][i] = loadImage(dir + chars[USER] + poses[R] + i + '.png')
		directions[L][i] = loadImage(dir + chars[USER] + poses[L] + i + '.png')
		directions[U][i] = loadImage(dir + chars[USER] + poses[U] + i + '.png')
		directions[D][i] = loadImage(dir + chars[USER] + poses[D] + i + '.png')
	}
}

function setup(){
	createCanvas(100, 50)
	background(bg)
}

function draw(){
	background(bg)
	image(directions[][], 0, 0)
	frame++
}