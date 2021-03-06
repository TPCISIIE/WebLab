# WebLab
> Web application that executes JavaScript codes and makes you graphs from their results.

# Description
WebLab is a web application that allows you to execute algorithms and creates you dynamic charts of their results.  <br>
This is our mentored project for the final year of a Bachelor's Degree in Computer Science. <br> 
It was build to help mathematicians, statisticians and developers with their code; make them improve their algorithms by getting data on it.

# Technologies used
- Chart.js
- Express.js
- Node.js
- Semantic UI
- Socket.io
- jQuery
- Twig

# Installation 
## 1. Clone the repository 
 ```bash
 $ git clone git@github.com:TPCISIIE/WebLab
 ```
 
## 2. Install dependencies
```bash
 $ npm install
 $ bower install
 ``` 
 
# Run the application
## 1. Create a main server
```bash
 $ npm run master
 ``` 
 Answer to the prompt. <br>
 
 ## 2. Add a slave server
 > Note: You can add many slave servers
 ```bash
  $ npm run slave
  ``` 
  
Answer to the prompt. <br>

# Example of algorithms
## Scripts available there: 
https://github.com/TPCISIIE/WebLab/tree/master/AlgoSample

## Ouput
Value you want in your charts

## Input
Value you don't want they get erased after each iterations (useless if your iteration number equals 1)


# Known issues
  - Not immuned to all known methods of attacks `while(1<2){} /**cc @deadmau5**/, etc...`
  - EcmaScript 6 is not supported
  
# Authors
- Xavier CHOPIN 
- Corentin LABROCHE
- David LEBRUN

# License
The WebLab application is open-sourced software licensed under the MIT license.
