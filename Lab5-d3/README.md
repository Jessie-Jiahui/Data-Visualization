*Jiahui Zhou, University of Michigan, School of Information, UX Design & Research*

# Lab5-d3 Overview
In this homework, we are requested to recreate the data visualization in this website: https://flowingdata.com/2018/01/23/the-demographics-of-others/, to generate multiple charts and make them interactive upon user selection.

In this project, I:
* Load the csv file, assign it to the data variable, and process the data through grouping and aggregation;
* Create visualizations with title, scales and axes, and bar charts using d3 functions;
* Make the chart interactive upon user requests.

What I learned from this homework:
* Create a 10x10 grid;
* Wire the button click events to update the charts.

My visualization works from this homework:
#### Lab5 Webpage Screenshot
![lab5](lab5.png?raw=true "Lab5 Webpage Screenshot")

# Directory Structure
The lab5-d3 folder contains several files and subfolders:
* index.html - the HTML contents of the webpage.
* css/ - a subfolder containing a variety of CSS stylesheets used to style the elements in the webpage.
* data/ - a subfolder containing the dataset we used in the webpage.
* js/draw.js - the JavaScript file you will write JavaScript + D3 code in for your answers in this lab.

Of those files, "draw.js" inside js folder is the main file I worked on to do the things mentioned above.
The detail about how to view the program will be talked in the *Instructions* section.

# # Dependencies to Setup to View the Webpage
To be able to view the work from youliciar browser, you will need to set up the server on your computer terminal. Here are the instructions:

### 1) Start a terminal
If you are on Mac, you can start a terminal. 
If you are on Windows, start your anaconda prompt.

### 2) Change to the lab directory
Move into the directory where you store your lab using the ‘cd’ (change directory) command.

### 3) Start python server
If you don’t know your python version, in your prompt/terminal, type:

`python -V`

This will tell you what version of python (version 2 or version 3) you are using.

If you are using python 3, in your prompt/terminal, type 

`python -m http.server`

If you are on python 2, type:

`python -m SimpleHTTPServer`
 
### 4) Open browser 
After starting the server, you can go to your browser and open localhost:8000. You will see a list of files under the lab directory that you started the webserver in. Click on index.html to display it in your browser.

### Thanks for your watching! 💗
