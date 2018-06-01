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
	# send coordinates
	send("hello", broadcast=True)

@socketio.on('update')
def update(character):
	emit("update", character, broadcast=True)

# socketio.on('coordinates')
# broadcast coordinates
# everyone's clients creates the character object?
 # if not already created

# socket sends json object
# which should be a dictionary object in python

## keyboard sends coordinates 
### character holds coordinate information in javascript

#####################################################
## extract x, y, name, fruit
## but which character to redraw there?
## characters are unique on name and fruit
## which means you would become someone with matching name and fruit
#####################################################

#######
## to redraw
#### 
### you must create class instances of unseen characters
## for the sprites to differ, use hash of name and fruit
#### update the characters with info from the server 
### for now we can just copy the zack file for the others.
#######

######
## to draw
######
## each character enters an object, pw broadcasted
#### 

####
### character
###
### public name, alter ego, room, dir, go/stop


@app.route('/')
def index():
	return render_template('index.html')

if __name__ == '__main__':
	socketio.run(app, host='0.0.0.0', port=80, debug=True)
