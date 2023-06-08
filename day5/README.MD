# Day 4: Django

# Date: May 31, 2023

## Main goal 
My goal for today is to experiment further with django. I am following along [this](https://www.youtube.com/watch?v=rHux0gMZ3Eg) course on youtube so that I can take notes and code along to understand the fundamentals and build up slowly to a higher level application. 

# Django Framework Notes

## Introduction

<aside>
💡 Open source framework for building web apps with python

</aside>

some features:

- gives us admin site database
- has an ORM that extracts database
- comes with authentication package
- has package for caching

client-server communication through HTTP request/response 

- react, angular, vue let webpage generate at the client side so there are more space in the backend for the server - these are frontend
- django is server side (**backend**)

 

*we create endpoints on the server side for the client to talk to get pieces of data*

- the server provides an **API**
- we use django to make an API for the website. clients use the API to get and save the data

## Dependencies

1. upgrade python to latest version and download it on your system
2. install pipenv so other dependencies dont clash with app dependencies
    
     
    
    ```powershell
    pip install pipenv
    ```
    

# Making a django project

1. create a directory for your project
    
    ```powershell
    mkdir project
    ```
    
2. cd into directory and install django
    
    ```powershell
    cd project
    pipenv install django
    ```
    

********************issue: pipenv : The term 'pipenv' is not recognized as the name of a cmdlet, function, script file, or operable program********************

- seems that even though pipenv is installed it is not in the correct path

**Solution**: Search for "Environment Variables" in the Start menu, open the "Edit the system environment variables" option, click on the "Environment Variables" button, and then add the directory containing **`pipenv.exe`** (typically something like **`C:\Users\YourUsername\AppData\Local\Programs\Python\PythonXX\Scripts`**) to the PATH variable.

or do not use pipenv, just:

```powershell
pip install django
```

## **Starting a virtual environment**

If using pipenv, then it will make a virtual env. otherwise:

To start a virtual environment in Python, you can use the following command in your terminal or command prompt:

```
python -m venv [name]

```

On Windows, the command to **activate** the virtual environment is:

```
.\\myenv\\Scripts\\activate

```

Once you have activated the virtual environment, you can install packages without affecting your system-wide Python installation.

after making a venv:

```powershell
django-admin startproject [sitename]
cd [sitename]
```

**************issue:************** even though django was installed, it gives me an error saying django-admin is not recognized. I solved this by downloading django AFTER starting the virtual environment (this is without using pipenv)

**Database Migration**

```powershell
#migration script
python .\manage.py migrate
```

- this configures the settings of the project so that we can run it on server

**Run Server**

```powershell
python .\manage.py runserver [optional portNumber]
```

Open in server it is running on and you see the django placeholder:

![Untitled](Django%20Framework%20db322b1577a845baaa84dd700d75c336/Untitled.png)

### Customization of App

1. **view**: function that returns output to browser (views.py) in app folder. It is what renders. Ex:

![Untitled](Django%20Framework%20db322b1577a845baaa84dd700d75c336/Untitled%201.png)

1. Url pattern: maps a view function to a URL so it is triggered when URL is open (urls.py) in app folder (creat this file)

![Untitled](Django%20Framework%20db322b1577a845baaa84dd700d75c336/Untitled%202.png)

This is in the myapp folder myurls ^^

![Untitled](Django%20Framework%20db322b1577a845baaa84dd700d75c336/Untitled%203.png)

this is in the mysite urls.py

Now nothing is mapped to the root of the project at the server, only if you go to the URL with /app at the end
