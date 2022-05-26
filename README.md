# AdvDatabaseProject_CRUD
## Introduction
As part of my job as system administrator I have a responsibility of the daily management of our Cinema software “Vista”. As I administrate the different level of databases one of my struggles is the management of a rational database which requires separating the data. Which in term requires information to be stored in different areas of the program.
This can be time consuming as requires lots of opening, closing different windows to manage a user or item.
To solve this issue, I want to create a much simpler program that allows me to access and view all information as a User Management system minimising the closing of windows.
## System Overview
### Backend
#### Installations
- nodeJs
- express
- mongoose - allows me to access my MongoBD
- morgan - to help log messages when we request
- Nodemon - Helps to restart the server when we make changes to the project (saves from pressing refresh)
- ejs - the template engine I used to develop the project viua HTML and allows for JavaScript
- body-parser - this allows us to serialise the data and access form data using body properties
- dot env - this modules allows me to seperate the "secret" from the source code. This is for future development of the project where I can have other people collaborating with me but not sharing passcodes, just the code.
- A module I came across from research the allows easier request access to the library in express applications
#### Project Structure
- Using the MVC (model, view, controller) pattern design
- This helps separate the the application data and the business logic from the views.
- The controller mediates between the model and view
    - Model folder contains the MongoDB data. This will perform the data validation, process data, create mongo scheme
    - Controller folder will deal with the user request for resources from the server. This will contain the functions for the resources needed
#### Run project
- Type on terminal "npm start".
- This will kick start nodemon and you will have a link to the localhost page 5033.
- press ctrl and rightclick to open up the webpage

