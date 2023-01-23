## Professional README-GENERATOR
# Challenge #9 - Week 9:

# Project Description
### What is this project?
For this weeks project I am tasked to develop a functioning README Generator, to be used by any developer who wants to create a professional README file for their github repositories. 

By using Node.js, I have developed a functional README generator that displays a series of questions for the user to answer inside their console/terminal. Afterwhich the generator will write the users input to a new file title "README-2.md". Presenting a professional README file for the user. 

### Files modified
For this project I have been tasked to heavily modify the following files - index.js and generateMarkdown.js

### Challenges
A challenge that I faced during the making of this README generator can best relate to my struggle in effectively generating licenses for the user. This took a majority of my time trying to ensure that the functions relating to licenses inside the generateMarkdown.js, worked appropriately. This was fixed by placing if statements for each individual license and then processing the user selected string to a string that can be read by the functions. This enabled my code to properly select and display the user selected licenses. 

# Installation
To install this application for your own device, you will firstly require node. Additionally you will require packages such as inquirer which are essential for this application to function properly. Inquirer enables the prompts to be displayed and allow user input from their terminal/console. 

Furthermore, running node index.js inside your console will display a welcome message, and a series of prompts from the command line for user input. Afterwards a README-2.md file will be created and ready to be used for the developer(s)!

# Usage
The usage for this project, is to enable any developer who wants to create a professional README, and to do so in quick and easy fashion. Providing an easy to use application for any developer, allowing the user to devote more time working on other components for their project.

# GIF
This GIF demostrates what the user would see and how to answer the following questions. A full video is provided below for the 

![readmeshortGIF](https://user-images.githubusercontent.com/114898970/213962100-dd402c75-0c0c-4894-a1d0-7c45622ad18f.gif)

Link to full video: https://drive.google.com/file/d/1aMy0ImLHdO9xSBE9kDO3v7G6VIXVCMrp/view

# Credits
N/A

# License
MIT License - Visible in the repo under LICENSE.

