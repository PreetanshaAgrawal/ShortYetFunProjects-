# steps:

# dictionary of questions and answers
# have a var score that tracks the score of the players
# ask questions to the user through the loop
# display each question to the user and allow them to answer
# check for the right answer
# show the final result when the quiz is finished

quiz = {
    "question1" :{
        "question" : "What is the capital of France?",
        "answer" : "Paris"
    },
    "question2" :{
        "question" : "What is the capital of Germany?",
        "answer" : "Berlin"
    },
    "question3" :{
        "question" : "What is the capital of India?",
        "answer" : "Delhi"
    },
    "question4" :{
        "question" : "What is the capital of Italy?",
        "answer" : "Israel"
    },
    "question5" :{
        "question" : "What is the capital of Spain?",
        "answer" : "Madrid"
    },
    "question6" :{
        "question" : "What is the capital of Portugal?",
        "answer" : "Lisbon"
    },
    "question7" :{
        "question" : "What is the capital of Austria?",
        "answer" : "Vienna"
    },
}

score = 0

for key, value in quiz.items():
    print(value['question'])

    ans = input("Enter your answer: ")

    if(ans.lower() == value['answer'].lower()):
        print("Right answer! Your total score is increased by 1")
        score = score + 1
        print(f"Your score is {score}\n\n")
    else:
        print(f"Wrong answer... The right answer is {value['answer']}")
        print("Your total score is decreased by 1")
        score = score - 1
        print(f"Your score is {score}\n\n")

print("Game Score Total: ", score)        