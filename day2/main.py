from tkinter import *
import random

#declaring the constant variables for the game

WIDTH = 700
HEIGHT = 700
SPEED = 50

#size is the dimension of one box square (item) on the board
SIZE = 50
SNAKE_PARTS = 3
SNAKE_COLOR = '#58AB9A'
FOOD_COLOR = '#587BAB'
BACK_COLOR = '#38555D'

#Classes
class Snake:
    def __init__(self):
        self.body_size = SNAKE_PARTS
        self.coordinates = []
        self.squares = []
        
        #list of coordinates
        for i in range(0, SNAKE_PARTS):
            #begins at top left corner (0,0)
            self.coordinates.append([0,0])
        
        for x, y in self.coordinates:
            square = canvas.create_rectangle(x, y, x+SIZE, y+SIZE, fill = SNAKE_COLOR, tag="snake")
            self.squares.append(square)

class Food:
    #this is how to initialize (construct) the object
    def __init__(self): 
        #RANDOM x and y coordinates for the food to be placed

        #there are width/size spaces on x axis - multiply by size to convert to pixels of the game
        x = random.randint(0, (WIDTH/SIZE)-1) * SIZE

        #height/size spaces on the y axis
        y = random.randint(0, (HEIGHT/SIZE)-1) * SIZE

        self.coordinates = [x,y]

        #x,y starting corner
        #x+size, y+size ending corner
        canvas.create_oval(x,y, x+ SIZE, y + SIZE, fill = FOOD_COLOR, tag="food")


#functions
def next_turn(snake, food):
    #this function is called when we begin the game to see where the snake will turn
    x,y = snake.coordinates[0]

    if direction == "up":
        #move up one pixel
        y -= SIZE

    elif direction == "down":
        y += SIZE

    elif direction == "left":
        x -= SIZE

    elif direction =="right":
        x+=SIZE

    #update coordinates x,y
    snake.coordinates.insert(0,(x,y))
    
    #new graphic for snake
    square = canvas.create_rectangle(x, y, x+SIZE, y+SIZE, fill=SNAKE_COLOR)

    #update snakes list of squares. insert at index 0 the new square 
    snake.squares.insert(0, square)

    del snake.coordinates[-1]
    canvas.delete(snake.squares[-1])
    del snake.squares[-1]

    #call turn again - not actual function() just the name
    root.after(SPEED, next_turn, snake, food)


def change_directions(direction):
    pass

def check_cols():
    pass

def game_over():
    pass

#making the gui window
root = Tk()

#title
root.title("Snake Game")
root.resizable(False,False)

score = 0
direction = 'down'

#score label
label = Label(root, text="Score:{}".format(score), font=('Arial', 20))
label.pack()

#gameboard 
canvas = Canvas(root, bg = BACK_COLOR, height=HEIGHT, width=WIDTH)
canvas.pack()


#Call constructor to start game
snake = Snake()
food = Food()

#call the next_turn function to start the game
next_turn(snake, food)

root.mainloop()