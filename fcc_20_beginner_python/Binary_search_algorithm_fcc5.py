# a function that takes a list and target as an arguments

def binarySearch(list, target):
    left = 0
    right = len(list)
    steps = 0
    while left <= right:

        print(f"Step {steps} : {list[left:right+1]}")
        steps = steps + 1

        mid = (left + right)//2

        if(list[mid] == target):
            print("Target fount at position ", mid)
            break

        elif(list[mid] > target):
            right = mid - 1    

        else:
            left = mid + 1

list = [1,3,5,7,8,9,10,11,12,13,14,15,16,17]
target = 14
binarySearch(list, target)