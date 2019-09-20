A simple Node JS server with a mongo DB based REST API
======================================================

Requirements
------------

Make sure that you have [NodeJS](https://nodejs.org/en/ "NodeJS") installed on your machine. After that, you have to install TypeScript and TypeScript Node.

```bash
npm install -g typescript ts-node
```

Local development (Mac OS X)
----------------------------

Install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/ "MongoDB") on your local machine via Homebrew by tapping the [official MongoDB Homebrew Tap](https://github.com/mongodb/homebrew-brew "official MongoDB Homebrew Tap")

```bash
brew tap mongodb/brew
brew install mongodb-community@4.2
```

Run MongoDB (insecure mode)

```bash
mongod --config /usr/local/etc/mongod.conf
```

You can also run MongoDB in a secure mode (à tester / documenter)

```bash
mongod --auth --port 27017 --dbpath /usr/local/var/mongodb
```

Note : you should install either Mongo [Compass](https://docs.mongodb.com/compass/master/install/ "Mongo Compass") or [Robo Mongo](https://robomongo.org/ "Robo Mongo") for GUI interface.

Clone the project, open a new Shell and launch it

```bash
git clone ...
npm i
npm run dev
```
