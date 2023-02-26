# define the functions needed to add, sub, mul and div
# print options to the user
# ask for the values from the user
# call the functions
# while loop to continue until the user decided to quit

def add(a, b):
    ans = a + b
    print(f"{a} + {b} = {ans}\n")
def sub(a, b):
    ans = a - b
    print(f"{a} - {b} = {ans}\n")
def mul(a, b):
    ans = a * b
    print(f"{a} * {b} = {ans}\n")
def div(a, b):
    ans = a / b
    print(f"{a} / {b} = {ans}\n")

while(True):
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("5. Exit")

    choice = input("Choose the operation(1/2/3/4/5): ")

    match(int(choice)):
        case 1: 
            print("Addition - ")
            a = int(input("Enter the first number: "))
            b = int(input("Enter the second number: "))
            add(a, b)
        case 2: 
            print("Subtraction - ")
            a = int(input("Enter the first number: "))
            b = int(input("Enter the second number: "))
            sub(a, b)
        case 3: 
            print("Multiplication - ")
            a = int(input("Enter the first number: "))
            b = int(input("Enter the second number: "))
            mul(a, b)
        case 4: 
            print("Division - ")
            a = int(input("Enter the first number: "))
            b = int(input("Enter the second number: "))
            div(a, b)

        case 5: 
            print("Program is ended")
            quit()