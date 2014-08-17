sea-b20-day11hw-simpleJSONdatabase
==================================

Simple JSON database homework assignment (day 11)

This program uses GET to create a JSON object out of your input and write it to a file of the same name. This program can also be used to retrieve that same JSON object from the file of the name you give it, assuming the name you give it matches the output file you created earlier. 

Note: You will need something like this Chrome browser extension to simulate GET and POST: chrome-extension://cokgbflfommojglbmbpenpphppikmonn/index.html#response

To use:

In Terminal, start this project's server with:

```$ node server.js```

In the Target field of the Chrome extension, type something like this:

```http://localhost:3000/bowtiesarecool```

(You can put whatever you want after 3000/). 

Click POST. 

Look inside the output directory for bowtiesarecool.json, complete with object data inside.

Click GET to retrieve the data from the .json file and display it in the extension.

