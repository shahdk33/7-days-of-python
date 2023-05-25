'''
Code modified from:
NeuralNine Youtube Channel
May 25 2023
'Simple GUI Calculator in Python'
Youtube Video
URL: https://www.youtube.com/watch?v=NzSCNjn4_RI
'''
import tkinter as tk


calculation = ""

def add_to_calculation(symbol):
    #global keywork allows us to use/change the var in the functions
    global calculation 

    #whatever is typed in the calculator just add it as string then show in window
    calculation += str(symbol)

    #deletes everything in the text 
    text.delete(1.0,"end")

    #then insert the string (calculation)
    text.insert(1.0, calculation)

def evaluate_calculation():
    #now we have a string "calculation" for example: "4+3-(5x2)"
    global calculation
    try:
        #eval python function 
        calculation = str(eval(calculation))
        #remove the text
        text.delete(1.0,"end")
        #show result
        text.insert(1.0, calculation)

    #error potential    
    except:
        clear()
        text.insert(1.0,"Error")
        pass

#clear the text
def clear():
    global calculation
    calculation = ""
    text.delete(1.0,"end")


#create the tkinter object for UI
root = tk.Tk()

#window size
root.geometry("300x275")

#setting text info
text = tk.Text(root, height=2, width=16, font=("Arial", 24))

#grid structure for the text with 5 columns
text.grid(columnspan=5)

#run it 
root.mainloop()