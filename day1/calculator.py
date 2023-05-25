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

#Make button
#without lambda, it would immdeiately call function
btn_1 = tk.Button(root, text="1", command=lambda: add_to_calculation(1), width=5, font=("Arial", 14))
btn_1.grid(row=2, column=1)

btn_2 = tk.Button(root, text="2", command=lambda: add_to_calculation(2), width=5, font=("Arial", 14))
btn_2.grid(row=2, column=2)

btn_3 = tk.Button(root, text="3", command=lambda: add_to_calculation(3), width=5, font=("Arial", 14))
btn_3.grid(row=2, column=3)

btn_4 = tk.Button(root, text="4", command=lambda: add_to_calculation(4), width=5, font=("Arial", 14))
btn_4.grid(row=3, column=1)

btn_5 = tk.Button(root, text="5", command=lambda: add_to_calculation(5), width=5, font=("Arial", 14))
btn_5.grid(row=3, column=2)

btn_6 = tk.Button(root, text="6", command=lambda: add_to_calculation(6), width=5, font=("Arial", 14))
btn_6.grid(row=3, column=3)

btn_7 = tk.Button(root, text="7", command=lambda: add_to_calculation(7), width=5, font=("Arial", 14))
btn_7.grid(row=4, column=1)

btn_8 = tk.Button(root, text="8", command=lambda: add_to_calculation(8), width=5, font=("Arial", 14))
btn_8.grid(row=4, column=2)

btn_9 = tk.Button(root, text="9", command=lambda: add_to_calculation(9), width=5, font=("Arial", 14))
btn_9.grid(row=4, column=3)

btn_0 = tk.Button(root, text="0", command=lambda: add_to_calculation(0), width=5, font=("Arial", 14))
btn_0.grid(row=5, column=2)

btn_add = tk.Button(root, text="+", command=lambda: add_to_calculation('+'), width=5, font=("Arial", 12))
btn_add.grid(row=2, column=4)

btn_sub = tk.Button(root, text="-", command=lambda: add_to_calculation('-'), width=5, font=("Arial", 12))
btn_sub.grid(row=3, column=4)

btn_mult = tk.Button(root, text="x", command=lambda: add_to_calculation('*'), width=5, font=("Arial", 12))
btn_mult.grid(row=4, column=4)

btn_div = tk.Button(root, text="/", command=lambda: add_to_calculation('/'), width=5, font=("Arial", 12))
btn_div.grid(row=5, column=4)

btn_clear = tk.Button(root, text="C", command=lambda:clear(), width = 11, font=("Arial", 14))
btn_clear.grid(row=6, column=1, columnspan=2)

btn_eval = tk.Button(root, text="=", command=lambda:evaluate_calculation(), width = 11, font=("Arial", 14))
btn_eval.grid(row=6, column=3, columnspan=2)

btn_open = tk.Button(root, text="(", command=lambda:add_to_calculation('('), width = 6, font=("Arial", 14))
btn_open.grid(row=5, column=1)

btn_close = tk.Button(root, text=")", command=lambda:add_to_calculation(')'), width = 6, font=("Arial", 14))
btn_close.grid(row=5, column=3)

#run it 
root.mainloop()