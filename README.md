# Webume

| ![Image 1](https://i.imgur.com/rNtAEKm.png) | ![Image 2](https://i.imgur.com/t5fRyfN.png) |
|----------------------------|----------------------------|
| ![Image 3](https://i.imgur.com/s83Y2Gw.png) | ![Image 4](https://i.imgur.com/cihrfLK.png) |

## Overview

Webume is an interactive and visually appealing web-based resume or portfolio application. Designed to showcase your skills, experience, and projects in a modern and responsive format, Webume allows potential employers or clients to navigate your professional journey with ease.

## Features

- **Interactive UI**: A clean, responsive, and interactive user interface to display your resume or portfolio.
- **Customizable**: Easily update content to reflect your latest skills, experience, and projects.
- **Modern Design**: Built with contemporary web design principles to ensure a great user experience.
- **Cross-Platform Compatibility**: Works seamlessly across different devices and screen sizes.
- **Easy Setup**: Simple setup process to get your resume or portfolio online quickly.

## Technologies Used

- **Frontend**: HTML, CSS, TypeScript
- **Frameworks**: Angular, ngx-bootstrap
- **Backend**: Node.js

## Setup Instructions

Follow these steps to set up Webume on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/) (Ensure you have the latest version installed)
- [npm](https://www.npmjs.com/)
- [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/)

### Installation

1. **Clone the repository:**
	  ```bash
   git clone https://github.com/CathRtic/Webume.git
	```
2.  **Navigate into the project directory:**
    ```bash
    cd Webume
    ```
3.  **Install the necessary dependencies:**

    ```bash
    npm install
    ``` 

### Running the Application

4.  **Start the development server:**

    ```bash
    npm start
    ``` 
    or
    
    ```bash
    ng serve
    ``` 
    
5.  **Open your browser and navigate to:**

    ```
    http://localhost:4200
    ``` 
    

### Deployment

To deploy Webume, follow the deployment instructions provided by your hosting service. Common deployment platforms include GitHub Pages, Netlify, or Vercel.

## Customization

-   **Updating Content**: Edit the HTML and CSS files in the `/src` directory to update your resume or portfolio information. Project service contains the projects info and is supplied to the components. Tag model contains the possible project tags and you can add and remove as you please(Note: you will have to adjust the Filter mechanism if any changes are made)