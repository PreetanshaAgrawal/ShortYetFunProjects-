def is_leap_year(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                print(f"{year} is a leap year") 

            else:
                print(f"{year} is not leap year")

        else:
            print(f"{year} is a leap year")    
    else:
        print(f"{year} is not leap year")

year = int(input("Enter any year: "))        
is_leap_year(year)