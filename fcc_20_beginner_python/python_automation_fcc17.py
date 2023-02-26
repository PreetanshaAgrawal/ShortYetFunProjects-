# send "good Morning" to particular number at the particular time each day
# schedule and TextBelt.com and requests
# not working
from credentials import mobile_no
import requests
import schedule
import time

def send_message():
    resp = requests.post('https://textbelt.com/text', {
    'phone': mobile_no,
    'message': 'Keep Going!',
    'key': 'textbelt',
    })
    print(resp.json())

# schedule.every().day.at('14:45').do(send_message)    
schedule.every(10).seconds.do(send_message)    

while True:
    schedule.run_pending()
    time.sleep(1)
