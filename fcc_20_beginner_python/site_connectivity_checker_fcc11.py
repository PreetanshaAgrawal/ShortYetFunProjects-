# steps
# ask for the url as input
# returns a response if the url is valid 

import urllib.request as urlLib


def main(url):
    print("Checking connectivity...")

    response = urlLib.urlopen(url)

    print(f"connected to {url} successfully")

    print(f"The response code is: {response.getcode()}")

print("This is a site connectivity checker program")
url_input = input("Please enter the url of the site you want to check: ")

main(url_input)