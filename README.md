# Cam Scanner Clone
This is a very basic React Native implementation of the Cam Scanner app that allows you to take an image with your phone, which will warp an image to correct any angles from taking the picture with camera and converts said image to greyscale and allows you to save as PDF.

As of August 2019, the App when run in Expo is able to take an image and return greyscale, but only if the background is dark and without any extra patterns or textures.

#### There are 2 major bugs at the moment. This was just something to get familiar with RN, so I may come around to fix them later on if I have time...

Backend Repo: https://github.com/lee-ma/scanner-backend

## To run locally
1. Clone the repo
2. Run `expo start` in the directory
3. Scan the expo QR code with the expo app in phone
4. Take image of document you want to scan with a dark and plain background
5. Press Confirm and view greyscale image if successful

## Bugs to look into if time:
1. Figure out why the API can only serve a resulting greyscale image properly if the background is plain and without any extra patterns/textures
2. Figure out why the Camera takes so long to take a picture

## \*Potential\* Future Improvements:
1. Save locally and to Google Drive
2. Allow users to save to an account, will have to set up database for users and file storage like S3, so I might not get around to this...
