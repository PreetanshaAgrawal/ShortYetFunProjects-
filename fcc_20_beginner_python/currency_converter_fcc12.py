def main():
    print("This program converts US Dollars to Pounds Sterling.")
    print()

    dollars = eval(input("Enter amount in Dollars: "))

    pounds = convert_to_pounds(dollars)

    print(f"That is {pounds} pounds.")

convert_to_pounds = lambda dollars: dollars * 0.82

main()