# Jobsity NodeJS Challenge

This is a project only for Jobsity challenge purpouses. Do not copy/paste it!

![Badge](https://img.shields.io/badge/Jobsity-Challenge-%237159c1?style=for-the-badge&logo=ghost)

## Installation

NodeJS v10.15.3:

```bash
apt-get update
apt-get install nodejs
```

Docker - run with elevated previleges:
```bash
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
```
For more information: https://docs.docker.com/engine/install/

MongoDB - Docker image:
```bash
docker pull mongo
docker run --name database -d -p 27017:27017 mongo --noauth --bind_ip=0.0.0.0
docker start mongodb
```

Install all Project Dependencies:
```bash
npm install
```

Starting the server:
```bash
npm start
```

## Usage

Open a new browser tab and got to the follow address:

http://localhost:3000/

If you click on the 'starting chat' link you will be asked for authenticate yourself.

For login into the system use on of bellow credentials:
```
Username: user1 
Password: 123

Username: user2 
Password: 321
```

Both users will be inserted into database after first time use of this app.

To use the bot services you will need start the message with the '/' character.

List of all commands avaliable for bot interaction:

*/stock={CODE}*

*{CODE}* is the stock market share code like: **AMZN.US** or **AAPL.US**

The bot will write the value of the stock market share after last day close! All bot responses will not storage in the database

## Technical Approach

### Docker & MongoDB ###
NoSQL Database to store users and messages running in a docker for easy cloud deploy
[Docker](https://www.docker.com/)
[MongoDB](https://www.mongodb.com/2)

### NodeJS Express ###
Framework to provide web structure to create a web-chat
[NomeJS Express](https://expressjs.com/)

### Socket.IO ###
Socket.IO provide and fast and real-time bi-directional for chat communications
[Socket.IO](https://socket.io/)

### Passport & BCrypt ###
Passport for authentication and BCrypt for hash encryption of user's password
[Passport](http://www.passportjs.org/)
[BCrypt](http://www.passportjs.org/)

## License
Use only for Jobsity challenge purpouses.

## Author
Fabio Pirani de Padua (https://www.linkedin.com/in/fabio-pirani-b129539/)