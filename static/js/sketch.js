poses = ['standup', 'walkup1', 'walkup2',
		  'standdown', 'walkdown1',
		  'walkdown2']
imgs = []
dir = 'static/ayanaposes/'
frame = 0;

function preload(){
	for (let i = 0; i < poses.length; i++){
		imgs[i] = loadImage(dir + poses[i] + '.png')
	}
}

function setup(){
	createCanvas(100, 50)
	background(0)
}

function draw(){
	background(255)
	image(imgs[frame%imgs.length], 0, 0)
	frame++
}