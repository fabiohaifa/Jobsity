# Jobsity NodeJS Challenge

This is a project only for Jobsity challenge purpouses. Do not copy/paste it!

![Badge](https://img.shields.io/badge/Jobsity-Challenge-%237159c1?style=for-the-badge&logo=ghost)

## Installation

### NodeJS v10.15.3:

```bash
apt-get update
apt-get install nodejs
```

### Docker - run with elevated previleges:
```bash
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
```
*For more information: https://docs.docker.com/engine/install/*

### MongoDB (Docker image):
```bash
docker pull mongo
docker run --name mongodb -d -p 27017:27017 mongo --noauth --bind_ip=0.0.0.0
docker start mongodb
```
*MongoDB must be running and respond at localhost:27017*

### Install Project Dependencies:
```bash
npm install
```

### Starting the server:
```bash
npm start
```

## Usage

Right after the server started just open a browser tab and type the follow address:

*http://localhost:3000/*

Click on the 'start chat' link and you will be asked for authentication proccess.

For login into the system use one of credentials bellow:
```
Username: user1 
Password: 123

Username: user2 
Password: 321
```

Both users will be inserted into database after first time use of the app.

To use the bot services you will need send a message with the '/' as first character.

List of all commands avaliable for bot interaction:

*/stock={CODE}*
> *{CODE}* is the stock market share code like: **AMZN.US** or **AAPL.US**

The bot will write the value of the stock market share after reading this information for external tool. All bot responses will not be storage in the database.

## Technologies

### Docker & MongoDB ###
NoSQL Database to store users and messages running in a docker for easy cloud deploy
> [Docker](https://www.docker.com/)

> [MongoDB](https://www.mongodb.com/2)

### NodeJS Express ###
Framework to provide web structure to create a web-chat
> [NomeJS Express](https://expressjs.com/)

### Socket.IO ###
Socket.IO provide and fast and real-time bi-directional for chat communications
> [Socket.IO](https://socket.io/)

### Passport & BCrypt ###
Passport for authentication and BCrypt for hash encryption of user's password
> [Passport](http://www.passportjs.org/)

> [BCrypt](http://www.passportjs.org/)

## License
Use only for Jobsity challenge purpouses.

## Author
Fabio Pirani de Padua (https://www.linkedin.com/in/fabio-pirani-b129539/)
