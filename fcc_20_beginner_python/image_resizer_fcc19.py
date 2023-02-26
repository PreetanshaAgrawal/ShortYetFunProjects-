# steps
# install pillow
# import pillow 
# open up the image we want to resize
# print the current size of the image
# specify the desired size of the image
# save the new resized image

from PIL import Image

image = Image.open('mine.jpg')

print(f"Current size of the image is {image.size}")

size1 = int(input("Enter the desired width of the image: "))
size2 = int(input("Enter the desired height of the image: "))
resized_image = image.resize((size1, size2))

resized_image.save('resized_image1.jpg')
print("Resized image successfully saved.")