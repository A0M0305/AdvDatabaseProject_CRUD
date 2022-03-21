# AdvDatabaseProject_CRUD
Advanced Database Project looking at CRUD operations.
        "This assessment requires you to create, test, and deploy, a proof-of-concept data-driven full stack web- application. The application should either help make sense of existing data set(s) or solve a problem in your work or social life. If you choose the former, you could scrape data, use data from a society or workplace, or find one or more data sets from Kaggle. If you are solving a life/work problem, you may have noticed an
        ineffective process that needs to be improved or digitized.

        You have the freedom to develop an application of your choice; however, you should ensure the following:

        The application should be full stack. While most will use node for the back end, you are free to use any technology stack. However, regardless of the technology you use, you should have a web-based front facing interface.

        Your application should expose create, read, update and delete (CRUD) operations on one or more databases. The type of database(s) you use, is a free choice. Further to this, you may combine more than one database. You will need to justify your choices in your documentation, this is very important."

This is an updated version from AdvDatabaseProject.
Due to further understanding of the course and concept from OOP I am looking to structure this development in a more professional manner.

Installations
- nodeJs
- express
- mongoose - allows me to access my MongoBD
- morgan - to help log messages when we request
- Nodemon - Helps to restart the server when we make changes to the project (saves from pressing refresh)
- ejs - the template engine I used to develop the project viua HTML and allows for JavaScript
- body-parser - this allows us to serialise the data and access form data using body properties
- dot env - this modules allows me to seperate the "secret" from the source code. This is for future development of the project where I can have other people collaborating with me but not sharing passcodes, just the code.
- A module I came across from research the allows easier request access to the library in express applications

Project Structure
- Using the MVC (model, view, controller) pattern design
- This helps separate the the application data and the business logic from the views.
- The controller mediates between the model and view
    - Model folder contains the MongoDB data. This will perform the data validation, process data, create mongo scheme
    - Controller folder will deal with the user request for resources from the server. This will contain the functions for the resources needed
