var socket = io.connect('http://18.218.126.130');

socket.on('connect', function(){
	socket.send('User has connected!');
});

