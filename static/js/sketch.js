poses = ['standup', 'walkup1', 'walkup2',
		  'standdown', 'walkdown1',
		  'walkdown2']
imgs = []
dir = 'static/ayanaposes/'
frame = 0;

function preload(){
	for (let i = 0; i < poses.length; i++){
		imgs[i] = loadImage(dir + poses[i])
	}
}

function setup(){
	createCanvas(100, 50)
	background(153)
}

function draw(){
	image(imgs[frame%imgs.length], 0, 0)
}