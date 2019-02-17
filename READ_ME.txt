Smart Barbell
Smart Barbell is an IoT device that tracks barbell movement during a workout. The information tracked is as follows: speed, acceleration, co-ordinates, and angles. The purpose of this project is to give better insights on an individual’s workout – essentially to become a trainer “in your pocket”. This information is processed by an individual user on a mobile application, and all the information is stored in a MySQL database. 

Getting Started:
In order to get this project running you need to have the following installed on your virtual machine: 
1.	Node JS
2.	Express JS
3.	React Native
The server built with Node/Express processes the information received from both the React Native app and the device that tracks barbell movement. This server (our API) receives post requests from the React Native app and from the device, processes the data and stores it on a MySQL database in Google Cloud Platform.  In addition to this, we use Pm2 in order to continually keep the server running on the cloud compute virtual machine in GCP. 

Steps:
Listed below are some steps to get the project running. 
a.	Sudo apt install curl
b.	curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
c.	Sudo apt-get install nodejs
d.	Sudo apt-get install git
e.	Npm install mysql
f.	Npm install node-datetime

Transfer the files into the VM then: 

a.	Cd into the folder
b.	Npm init - follow steps
c.	Npm install express --save-dev
d.	Sudo npm install pm2 -g

Change the security group on the VM to allow traffic on port 3000 from your IP address. 

