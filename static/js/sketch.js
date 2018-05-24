images = ['standup', 'walkup1', 'walkup2',
		  'standdown', 'walkdown1',
		  'walkdown2']
dir = 'static/ayanaposes/'
frame = 0;

function setup(){
	createCanvas(100, 50)
	background(153)
}

function draw(){
	image(dir + images[frame%6], 0, 0)
}