# Jobsity NodeJS Challenge

This is a project only for Jobsity challenge purpouses. Do not copy/paste it!

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

Project Dependencies - root project dir:
```bash
npm install
```

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)