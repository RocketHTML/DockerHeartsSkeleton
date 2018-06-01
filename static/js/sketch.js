///////////////////////////////////
/////// functions 
/////////////////////////////////////////
function deleteOther()  {}  /// on disconnect ///
function updateOthers(other) {
	if (others[other.uid] === undefined)
	{
		others[other.uid] = new Character(directions);
		othersList.push(other.uid);
	}
	let zeno = others[other.uid];
	zeno.direction = other.direction;
	zeno.walking = other.isWalking;
}
////////////////////////////////////////


///////////////////////////////////////////
///////// load in all images /////////////
//////////////////////////////////////////
const R = 0, L = 1, U = 2, D = 3; 
let directions = [[], [], [], []] // holds all images
let char = 'Zack', dir = 'static/lockusprites/';
const poses = ['Right', 'Left', 'Back', 'Front'];
let bg = 0;

function preload() {
	for (let i = 0; i < 3; i++){
		directions[R][i] = loadImage(dir + char + poses[R] + i + '.png')
		directions[L][i] = loadImage(dir + char + poses[L] + i + '.png')
		directions[U][i] = loadImage(dir + char + poses[U] + i + '.png')
		directions[D][i] = loadImage(dir + char + poses[D] + i + '.png')
	}
}

////////////////////////////////////////////
////////////////////////////////////////////
///////////////////////////////////////////
/////////  create user's character ////////
///////////////////////////////////////////
let socket = io.connect('http://18.221.73.238');
let uid = Date.now();
let others = {};
let othersList = [];
others[uid] = new Character(directions);
let zatch = others.[uid];
socket.uid = uid;
/////////////////////////////////////////////////////
//// keyboard needs socket object to do emits. ///////
//////////////////////////////////////////////////
let keyboard = new Keyboard(document, zatch, socket); 
///////////////////////////////////////////////////
///////////////////////////////////////////
socket.on('update', updateOthers(other))
/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/////////   setup function ///////////
//////////////////////////////////////
function setup(){
	createCanvas(500, 500)
	background(bg)
}
/////////////////////////////////////////////////////////////////////////////////////////
/////////// drawing phase //////////////////////
///////////////////////////////////////////////

function draw(){
	background(bg)
	for (let other of othersList){
		let player = others[other];
		player.update();
		let img = player.image;
		let x = player.x;
		let y = player.y;
		image(img, x, y);
	}
/*
	zatch.update();
	let img = zatch.image;
	let x = zatch.x;
	let y = zatch.y;
	image(img, x, y);
*/
}

////////////////////////////////////////////////
////////////////////////////////////////////////