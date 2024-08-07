# BookStore web application
An ecommerce platform to buy and sell books. Watch the demo of the project at [https://youtu.be/XWo0PKRS6GU]

## Features 

-User Authentication [login, register]

-View and Search Books

-Cart Management

-Order creation

-Create,Edit,Delete Book Listings

JWT Authentication using  [SimpleJWT package](https://pypi.org/project/djangorestframework-simplejwt/)

Documentation made using [Swagger docs](https://github.com/axnsan12/drf-yasg)

Frontend made with React, [React-Bootstrap](https://react-bootstrap.netlify.app/), and  [Vite](https://vitejs.dev/).

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
The api should be up and runnning </br>

8. Cd into the frontend dir and run 
```
npm install
npm run dev
```
Click on the link to view the website in the browser.



