# BookStore web application
Watch the demo of the project at [https://youtu.be/XWo0PKRS6GU]

## Solution
I chose the project option 1 of the task 2 ie an Online Bookstore. 
I began the project by designing the database structure, i.e., the models, in Django based on the project requirements. I have used Postgres for the database. After designing the models, I planned out the features I needed to implement. 

-User Authentication [login, register]

-View and Search Books

-Cart Management

-Order creation

-Create,Edit,Delete Book Listings

I was able to implement the business logic (views) very quickly with the help of Django's generic views. I implemented JWT-based authentication using the [SimpleJWT package](https://pypi.org/project/djangorestframework-simplejwt/)

I implemented rest API endpoints for the corresponding features and documented them using Swagger docs.
https://github.com/axnsan12/drf-yasg,

Designing the backend was relatively easy with my prior experience with the framework.
However, designing the frontend part was a bit challenging since I did not have much experience in frontend development. After learning the basics of React, I started working on the frontend. To save time and reduce the hassle of writing CSS, I decided to use the [React-Bootstrap](https://react-bootstrap.netlify.app/) framework, which helped me to create a basic, user-friendly, and responsive UI.

I have also used [Vite](https://vitejs.dev/) for the frontend development. 

## Project setup
Pre requisites:
 - [Python](https://www.python.org/)
 - [PostgreSQL](https://www.postgresql.org/)
 - [Node js](https://nodejs.org/en)

1. Create a folder and clone the repo 
```
 git clone https://github.com/Nandagopalvs25/BookStore
```
3. Install Virtual env to create a python virtual environment
```
   cd Bookstore
   pip install virtualenv
   python<version> -m venv <virtual-environment-name>
   env/Scripts/activate.bat //Activate virtual env In CMD
   env/Scripts/Activate.ps1 //Activate virtual env In Powershel
```
3. Install dependencies for the api
```
    pip install -r requirements.txt
```
4. Create a new PostgreSQL database using createdb or the pgAdmin tool
```
createdb --username=postgres <db_name>
```
5. Create a .env file in the backend dir and set the enviornment variables for the database
 ```
  DB_NAME=
  DB_USER=
  DB_PWD=
  DB_HOST=
  DB_PORT=
```
6. Apply migrations
```
python manage.py migrate
```
7. Run the server using
```
python manage.py runserver
```
The api should be up and runnning



