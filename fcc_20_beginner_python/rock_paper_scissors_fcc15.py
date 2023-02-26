import random

options = ["rock", "paper", "scissors"]

exit = False

while exit is False:
    user_input = input("Choose (Rock/Paper/Scissors/Exit) : ").lower()
    comp_input = random.choice(options).lower()

    if user_input == "exit":
        print("Game finished!")
        exit = True


    if user_input == comp_input:
        print(f"You chose {user_input} and computer chose {comp_input}.")
        print("It is a Tie")

    else:
        if user_input == "rock":
            if comp_input == "paper":
                print(f"You chose {user_input} and computer chose {comp_input}.")
                print("You lose!")
            else:
                print(f"You chose {user_input} and computer chose {comp_input}.")
                print("You win!")        

        elif user_input == "paper":
            if comp_input == "scissors":
                print(f"You chose {user_input} and computer chose {comp_input}.")
                print("You lose!")
            else:
                print(f"You chose {user_input} and computer chose {comp_input}.")
                print("You win!") 
        
        elif user_input == "scissors":
            if comp_input == "rock":
                print(f"You chose {user_input} and computer chose {comp_input}.")
                print("You lose!")
            else:
                print(f"You chose {user_input} and computer chose {comp_input}.")
                print("You win!") 

        else:
            print("Invalid input")

