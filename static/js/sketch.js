images = ['standup', 'walkup1', 'walkup2'
		  'standdown', 'walkdown1'
		  'walkdown2']
frame = 0;

function setup(){
	createCanvas(100, 50)
	background(153)
}

function draw(){
	image(images[frame%6], 0, 0);
}