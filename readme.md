# The Medix

This App is a full stack MERN App, It allows for admin and user access, Admins(Doctors) will be able to view all private information about up coming appointments and edit patient information. Users will only have read access, describing when their appointments will be upon logging details after sign up.

# Architecture

This app was built using the MERN Stack, as it was a prominent part of the entirety of this bootcamp. Mongo, Express, React, and Node were all used in sync to make this application possible. 

The app created with REACT, I am most familiar with react and feel much more comfortable with it when it comes to editing and general styling. Styling was achieved by the use of CSS. The interface is very simple but effective. All you may need for a Doctor/Patient service.

Mongo was used to store information created by the users, This was possible by allowing a User/Admin enter their details and verifying it by JWT. This would display a list of all information from the API in the react app.

The backend and front end will be hosted by Heroku
The source files will be added to GITHUB

# System Requirements

This app will work by a user logging in/signing up, once that has been done Information entered will be stored in MONGO, as a normal user you will only then be able to view when your appointment may be. If logged in as an admin you will be taken to a different page and this page allows for reading rights as well as the ability to perform necessary CRUD operations as the doctor or person in charge of handling the website and company admin.

### Who will use this app?

People using this app will be Doctors, Admin, and Patients.

### Benefits

Gone are the days where you may have to walk in to make an appointment for the future, with this app it utilizes technology in the modern sense to its fullest. No more phone calls or unsure walk ins. Book an appointment from the comfort of your home or anywhere there is internet access. The whole point of this app is efficiency and safety. Especially with the pandemic around.

### Similarities

To my knowledge at least in South Africa there is very little applications that do this. Dis-Chem and Clicks have one similar but as for now no major have this as a dedicated system. However with the Global Pandemic lots of hospitals are doing screenings for example to make sure the environment is as safe as possible before entering. This is something that I may add to this app as an update or improvement.

This app will be cheaper to maintain, It uses a NoSQL database. The code is simple but has everything you need to update and make changes quickly, comments make the code that much more readable as they could be an index of each page.

### Functional REQS

* This app should perform CRUD operations - User = Read Only / Admin = Create, Read, Update, Delete
* The app should authenticate using JWT
* Should have A functional UI and Attractively Styled
* The app should be responsive

### Non-Functional REQS

* Users should be able to read only  / Admins should be able to Create, Update, Read, Delete
* Admins or users should be able to sign in
* Users should have access to the app on any device
* It should be a pleasure using this app with its minimalistic features

### User stories

# Doctor

A doctor would want to be able to view up coming appointments, edit patient information and delete patient appointments.

# Patient

A patient would want to add information about themselves such as their personal information as well as medical conditions and allergens.

### installation
* Download or Clone the folder from GITHUB
* While in the root NPM INSTALL, and the same in the Client for node modules
* To start the server - Nodemon Index.js in the CLI
* to start the react app CD into the client and NPM Start
* There is one environmental varaible: KEY_JWT. Create a .env file, You can set the value of KEY_JWT to anything.


### Credits

HyperionDev
Stack Overflow
Youtube (Sonny Sangha, WebDevSimplified)
W3Schools

