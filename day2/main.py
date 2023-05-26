from tkinter import *
import random

#declaring the constant variables for the game

WIDTH = 500
HEIGHT = 500
SPEED = 40
SIZE = 30
SNAKE_PARTS = 3
SNAKE_COLOR = '#58AB9A'
FOOD_COLOR = '#587BAB'
BACK_COLOR = '#38555D'


#making the gui window
root = Tk()

#title
root.title("Snake Game")
root.resizable(False,False)

score = 0
direction = 'down'

#score label
label = Label(root, text="Score:{}".format(score), font=('Arial', 30))
label.pack()

canvas = Canvas(root, bg = BACK_COLOR, height=HEIGHT, width=WIDTH)
canvas.pack()

root.mainloop()