from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit, join_room, leave_room

#### the app doesn't scale ###
## but it scales more than enough for our purposes for now ## 

app = Flask(__name__)
app.config['SECRET_KEY'] = 'unicorn'
socketio = SocketIO(app)
clients = {}
rooms = {}

@socketio.on('message')
def handleMessage(msg):
	send(msg, broadcast=True)

@socketio.on('update')
def update(character):
	emit("update", character, broadcast=True)

@app.route('/')
def index():
	return render_template('index.html')

if __name__ == '__main__':
	socketio.run(app, host='0.0.0.0', port=80, debug=False)
