# Jobsity NodeJS Challenge

This is a project only for Jobsity challenge purpouses. Do not copy/paste it!

![Badge](https://img.shields.io/badge/Jobsity-Challenge-%237159c1?style=for-the-badge&logo=ghost)

## Installation

NodeJS - run with elevated previleges:

```bash
apt-get update
apt-get install nodejs
```

Docker - run with elevated previleges:
** For more information: https://docs.docker.com/engine/install/
```bash
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
```

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

Use:

Username: user1
Password: 123

Username: user2
Password: 321

Both users was inserted into database after first time use of this app.

To use the bot services you will need start the message with the '/' character.

List of all commands avaliable for bot interaction:

* /stock=</i>{CODE}</i>

When: {CODE} is the stock market share code like: AMZN.US or AAPL.US

The bot will write - just for you - the value of the stock market share after last day close!

## License
Use only for Jobsity challenge purpouses.

## Author
Fabio Pirani de Padua (https://www.linkedin.com/in/fabio-pirani-b129539/)