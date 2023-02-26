# steps
# have a python dictionary that represents a word and its definition
# collect input(word) from the user
# if the word is in the dictionary then print the definition
# throw error if not
# Download goSlate first from the link in stack overflow and then PyDictionary module will be installed, to get the dictionary

from PyDictionary import PyDictionary

dictionary = PyDictionary()
print(type(dictionary))

while True:
    word = input("What word do you want to search? ")
    print()

    if word == "":
        break

    print(dictionary.meaning(word), "\n")


# def main():
#     word_dictionary = {
#         "eyes": "an organ for seeing",
#         "hi" : "a way of greeting",
#         "earth": "a planet in the space"
#     }

#     print("This is a dictionary")
#     word = input("What word do you want to search? ")
    
#     while True:
#         if word == "":
#             break

#         if word.lower() in word_dictionary.keys():
#             print(word_dictionary[word])

#         else:
#             print(f"{word} is not in the dictionary") 


# main()           