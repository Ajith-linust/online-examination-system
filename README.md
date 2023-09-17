# React + TypeScript + Vite Project Setup Guide

## Project Overview

This guide will walk you through setting up and running the 'online examination system' project, which is built using React, TypeScript, and Vite. The project includes features like routing, interactive maps, global state management, and tailwind CSS for styling.

## Installation and Running

- Clone the Project: Begin by cloning the project repository from GitHub using the following command:
```js
git clone https://github.com/Ajith-linust/online-examination-system.git
```
- Navigate to Project Directory: Change your terminal's working directory to the project path:
```js
cd online-examination-system
```
- Install Dependencies: Use either npm or yarn to install the project's required packages. Run one of the following commands:
```js
npm install OR yarn
```
- To access the mock data, please execute the following command:
```js
json-server --watch _db.json --port 4000
```
- Run the Application: After successfully installing the packages, start the application using the following command:
```js
npm run build && npm run preview
```

## Development Notes

Here are some noteworthy details about the project's development:

- Folder Structure: The project follows a well-organized structure with separate folders and files, enhancing code readability and maintainability.
- Vite Module Bundler: Unlike webpack, Vite serves files dynamically to the browser, resulting in faster page load times during development.
- Package Versions: The project employs up-to-date package versions to ensure compatibility and leverage the latest features.
- Browser Compatibility: Thorough testing has been performed across multiple browsers, including Chrome, Brave, Firefox, Safari, and more, to ensure cross-browser compatibility.
