# 2 libraries needed bs4(beautifulsoup) and requests

import requests
from bs4 import BeautifulSoup

url = "https://www.codewithtomi.com/"

r = requests.get(url)

# print(r)

# to run this line, you need to install and upgrade lxml and also install cssselect library
soup = BeautifulSoup(r.content, 'lxml')
title = soup.find_all('h2', {'class' : 'post-title'})
# print(title)

for t in title:
    print(t.getText())





