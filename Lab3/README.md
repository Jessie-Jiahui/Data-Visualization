*Jiahui Zhou, University of Michigan, School of Information, UX Design & Research*

# Lab3-Vega-Lite Overview
This homework taught us how to do visualization for movie dataset using Vega-Lite, which is a high-level grammar of interactive graphics. It provides a concise JSON syntax for rapidly generating visualizations to support analysis. 

In this project, I:
* Create points charts, lines charts, temporal charts, with and without aggregation;
* Combine figures by overlaying the charts together, and add customized color scales;
* Add interactions into the charts: add tooltips; create a filter selection so that When users brush through the top chart, the bottom chart adjust its view. 

What I learned from this homework:
* Data transformations such as aggregation, binning, filtering, sorting, and visual transformations including stacking and faceting;
* Produces visualization components including axes, legends, and scales;
* Compose charts into layered and multi-view displays;
* Add interactive features, such as tooltip and selection.

My visualization works from this homework:
#### Lab4 Webpage Screenshot
![lab4](lab4.png?raw=true "Lab4 Webpage Screenshot")

# Introduction to the Files
There are a total of 2 files I worked on for this homework. These files are:
*  `lab3_VegaLite.html`
*  `movies_lab3.json`

Of those 2 files, `lab3_VegaLite.html` is the main file I worked on to do the things mentioned above. The detail about how to interact with the program will be talked in the *Instructions* section.

# # Dependencies to Setup to View the Webpage
To be able to view the work from your browser, you will need to set up the server on your computer terminal. Here are the instructions:

### 1) Start a terminal
If you are on Mac, you can start a terminal. 
If you are on Windows, start your anaconda prompt.

### 2) Change to the lab directory
Move into the directory where you store your lab using the ‘cd’ (change directory) command.
If I stored my lab files under “C:\licia\si649\18Wlabs\vegalite”, this command will take me to the this directory (Figure 2):

### 3) Start python server
If you don’t know your python version, in your prompt/terminal, type:

`python -V`

This will tell you what version of python (version 2 or version 3) you are using.

If you are using python 3, in your prompt/terminal, type 

`python -m http.server`

If you are on python 2, type:

`python -m SimpleHTTPServer`
 
### 4) Open browser 
After starting the server, you can go to your browser and open localhost:8000. You will see a list of files under the lab directory that you started the webserver in. Click on lab3-VegaLite.html to display it in your browser.

### Thanks for your watching! 💗
