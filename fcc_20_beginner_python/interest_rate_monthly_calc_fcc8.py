# Steps
# Collect the necessary information: principle, apr, years
# calculate the monthly payment
# display the monthly payment

def main():
    print(" This is a monthly loan payment calculator ")
    print("")

    principle = float(input("Input the loan amount: "))
    apr = float(input("Input the annual interest rate amount: "))
    years = int(input("Input the number of years: "))


    monthly_interest_rate = apr / 1200
    months = years * 12

    monthly_payment = principle * monthly_interest_rate / (1 - (1 + monthly_interest_rate) ** (-months))

    # %.2f displays only 2 decimal places
    print("The monthly payment for this loan is: %.2f" % monthly_payment)

main()    

# can apply while loop to this function