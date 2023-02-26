# Steps:
# install all the libraries needed: qrcode and Image
# create the function that collects the text and converts it into a qrcode
# Save the qrcode as an image


import qrcode


def generate_qrcode(text):
    qr = qrcode.QRCode(
        version=1,
        error_correction = qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4
    )

    qr.add_data(text)
    qr.make(fit=True)
    img = qr.make_image(fill_color = "black", back_color = "white")
    img.save("qrimg001.png")

url = input("Enter your url: ")
generate_qrcode(url)