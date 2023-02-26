# collect email from the user
# split the email using the @, the first part as the username and the second part as the domain
# split the domain using the '.'. The first part is the Domain and the second part is the extension

def main():
    print("Welcome to the email slicer")
    print("")

    email_input = input("Enter your email address : ")

    (user_name, domain) = email_input.split('@')

    (domain, extension) = domain.split('.')

    print(f"User Name is {user_name}.")
    print(f"Domain is {domain}.")
    print(f"Extension is {extension}.\n")

while(True):
    main()