How to use Video AI Creator

1. Set up API key in .env file:

API_KEY=yourapikeyhere

2. Install modules:

> npm i

3. Set up prompt

In ai.js line 15 change the string to a prompt you would want.

4. Run the AI with these steps:

run: node ai.js

The logs will show the programming prompting the ai and log errors from the AI's output. If the program stops running check these 2 things

a. All of the files in src, if they have errors something weird happened and go back to step 4 to try again. If there are no errors, run npm start to see the video

b. Check the out folder to see if a video was rendered.

If at any point the files have no errors while the program is running and the video is "Building..." feel free to run Ctrl-C to stop the program and run "npm start"

When in doubt, run Ctrl-C and try it again. 

You know if the files have errors by seeing a red number next to their file name.

Hope this helps :D