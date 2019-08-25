# Cam Scanner Clone
This is a very basic React Native implementation of the Cam Scanner app that allows you to take an image with your phone, which will convert an image to greyscale and allow you to save as PDF.

As of August 2019, the App when run in Expo is able to take an image and return greyscale, but only if the background is dark and without any extra patterns or textures.

There are 2 major bugs at the moment, and I may come around to fix them later on if I have time...

## To run locally
1. Clone the repo
2. Run `expo start` in the directory
3. Scan the expo QR code with the expo app in phone
4. Take image of document you want to scan with a dark and plain background
5. Press Confirm and view greyscale image if successful

## TODO:
1. Figure out why the API can only serve a resulting greyscale image properly if the background is plain and without any extra patterns/textures
2. Figure out why the Camera takes so long to take a picture
