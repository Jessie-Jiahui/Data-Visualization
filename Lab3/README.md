*Jiahui Zhou, University of Michigan, School of Information, UX Design & Research*

# Lab3-Vegalite Overview
Vega-Lite is a high-level grammar of interactive graphics. It provides a concise JSON syntax for rapidly generating visualizations to support analysis. For this homework, we worked on the html and javascript basics to generate an interactive webpage using a set of movie data. 

In this project, I:
* Create headings and paragraphs through selecting and editing DOM elements and filling with the processed data;
* Present top 10 movies by revenue in a list;
* Count and display genres within the data and their counts;
* Create a randome number generator and add a button to diplay a random movie in a table format;
* Create data field dropdown and create a table to diaplay the user selected field in the sorted way.

Vega-Lite specifications describe visualizations as mappings from data to properties of graphical marks (e.g., points or bars). The Vega-Lite compiler automatically produces visualization components including axes, legends, and scales. It then determines properties of these components based on a set of carefully designed rules. This approach allows specifications to be succinct and expressive, but also provide user control. As Vega-Lite is designed for analysis, it supports data transformations such as aggregation, binning, filtering, sorting, and visual transformations including stacking and faceting. Moreover, Vega-Lite specifications can be composed into layered and multi-view displays, and made interactive with selections.

What I learned from this homework:
* Understand HTML’s DOM (Document Object Model) structure, be able to select and edit DOM elements using data types - Variable, Object, and Array;
* Display manipulated data in various formats (list and table);
* Link data with Call-to-Actions to enable user-controlled webpage interaction;

My visualization works from this homework:
#### Lab2 Webpage Screenshot
![lab2](lab2.png?raw=true "Lab2 Webpage Screenshot")

# Introduction to the Files
There are a total of 2 files I worked on for this homework. These files are:
*  `lab3_VegaLite.html`
*  `	movies_lab3.json`

Of those 2 files, `lab3_VegaLite.html` is the main file I worked on to do the things mentioned above. The detail about how to interact with the program will be talked in the *Instructions* section.

Step 1.1: Start a terminal
If you are on Mac, you can start a terminal. 
If you are on Windows, start your anaconda prompt (Figure 1).

Step 1.2: Change to the lab directory
Move into the directory where you store your lab using the ‘cd’ (change directory) command.
If I stored my lab files under “C:\licia\si649\18Wlabs\vegalite”, this command will take me to the this directory (Figure 2):

Step 1.3: Start python server 
If you don’t know your python version, in your prompt/terminal, type:

python -V

This will tell you what version of python (version 2 or version 3) you are using.

If you are using python 3, in your prompt/terminal, type 

python -m http.server

If you are on python 2, type:

python -m SimpleHTTPServer

 If the server is started successfully, you should see a log like this (Figure 3):
 
 Step 1.4  Open browser 
After starting the server, you can go to your browser and open localhost:8000. You will see a list of files under the lab directory that you started the webserver in. (Figure 4):
Click on lab3-VegaLite.html to display it in your browser

### Thanks for your watching! 💗
