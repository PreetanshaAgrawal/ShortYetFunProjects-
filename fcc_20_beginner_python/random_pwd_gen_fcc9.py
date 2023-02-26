# steps
# ask the user if they want to generate a new password
# if they do, ask for password length
# generate a new password
# display the new password
# if initial response is no, then leave the program

import string, random

# list of characters to choose from
characters = list(string.ascii_letters + string.digits + "/@~#^!$%&*()")

def generate_new_password():
    password_length = int(input("How long would you like your password to be? "))

    random.shuffle(characters)

    password = []

    for x in range(password_length):
        password.append(random.choice(characters))

    random.shuffle(password)


    password = "".join(password)

    print("The generated password is " + password)    

options = input("Do you want to generate a new password? (y/n): ")

if(options == "y" or options == "Y"):
    generate_new_password()
elif(options == "n" or options == "N"):
    print("Program ended")
    quit()
else:
    print("Invalid input")
    quit()