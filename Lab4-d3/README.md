*Jiahui Zhou, University of Michigan, School of Information, UX Design & Research*

# Lab4-d3 Overview
This homework taught us how to do visualization for movie dataset using Vega-Lite, which is a high-level grammar of interactive graphics. It provides a concise JSON syntax for rapidly generating visualizations to support analysis. 

In this project, I:
* Create points charts, lines charts, temporal charts, with and without aggregation;
* Combine figures by overlaying the charts together, and add customized color scales;
* Add interactions into the charts: add tooltips; create a filter selection so that When users brush through the top chart, the bottom chart adjust its view. 

What I learned from this homework:
* Load a .csv file using d3
* Group data in d3
* Create scales and axes in D3 
* Create a simple bar chart in d3
* Create simple transitions in d3
* Create small multiple bar chart

My visualization works from this homework:
#### Lab4 Webpage Screenshot
![lab4](lab4.png?raw=true "Lab4 Webpage Screenshot")

# Introduction to the Files
There are a total of 1 file and 3 folders in the first level of this project. 
Of those files, "draw.js" inside js folder fis the main file I worked on to do the things mentioned above.
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
