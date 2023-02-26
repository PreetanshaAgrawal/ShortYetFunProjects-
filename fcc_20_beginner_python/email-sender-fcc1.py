# All the Steps that we need -

    # go over to our gmail account and setup 2 factor authentication
    # generate app password
    # create a function to send the mail

# built in library
from email.message import EmailMessage
from password_fcc1 import password
import ssl
import smtplib

email_sender = 'preetanshaagrawal05@gmail.com'
email_passWord = password

email_receiver = 'wamowe6394@aosod.com'
subject = "This is a test message"

body = '''
When you read this message, you will know it is a test message.
'''

em = EmailMessage()
em['From'] = email_sender
em['To'] = email_receiver
em['Subject'] = subject
em.set_content(body)

context = ssl.create_default_context()

with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
    smtp.login(email_sender, email_passWord)
    smtp.sendmail(email_sender, email_receiver, em.as_string())