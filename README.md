# Account Manager

## Description
The clinic tracker repository is one of the three distributed backend components that is tasked with sending all clinic information, regarding the clinic entity. This repository is much more simply in terms of its functionalities, as currently the purpose is to keep track of and send all the clinic info when the program launches. For that reason the repository does contain the model class for the clinic as well as a service method for retrieving all the clinics. Although it seems very minimal and almost unnecessary to have, the repository creates a seperation of concerns amidst our program and also creates a room to expand if the program were to expand and contain more functionality.

## Installation & Run
In order to run the application, the necessary dependencies must be installed for this repository as well. In order to do this, simply open a terminal in the root of this folder and enter the command 'npm install'. Then to run this component, enter into the terimnal 'node main.js' and this component should be up and running! *Remember, for the whole application to be running, this component alongside the other 3 components (Client, Account-tracker and Booking-Manager) have to all be running.

