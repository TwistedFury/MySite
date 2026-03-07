Personal Portfolio Website

A personal portfolio website showcasing my projects, technical skills, and development experience.
The site is built using HTML, CSS, and JavaScript and is hosted using GitHub Pages.

🔗 Live Site:
https://twistedfury.github.io/MySite/home.html

Overview

This website was originally created as a class project but has since evolved into my personal development portfolio. It highlights projects I have worked on, provides insight into my programming experience, and serves as a central location for my work.

The site also includes a small JavaScript quote generator that displays a random programming-related quote each time the page loads.

Features

Personal portfolio homepage

Project showcase

Responsive page layout

Custom CSS styling

Random quote generator (JavaScript)

Static hosting via GitHub Pages

Quote Generator

The site includes a simple random quote generator implemented in JavaScript.

Quotes are stored in a hardcoded array, and each page load randomly selects one to display.

Example concept:

const quotes = [
    "Programs must be written for people to read...",
    "Talk is cheap. Show me the code.",
    "First, solve the problem. Then, write the code."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

This feature was added to practice basic JavaScript logic, DOM manipulation, and randomization.

Tech Stack

Frontend:

HTML5

CSS3

JavaScript

Hosting:

GitHub Pages

Running the Project Locally

Clone the repository:

git clone https://github.com/TwistedFury/MySite.git

Open the project folder and launch:

home.html

in any modern web browser.

Because the site is fully static, no build tools or dependencies are required.

Repository Structure
MySite
│
├── css/
├── js/
├── images/
├── home.html
└── other pages...
Future Improvements

Possible improvements for the portfolio:

Improved responsive layout

Project filtering or categorization

Contact form

Dynamic project loading

Animation polish

Expanded project pages

Author

Cody
Computer Science Student

GitHub:
https://github.com/TwistedFury
