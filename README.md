# ember-cli-heroku

This ember-cli-addon assists in deploying a ember-cli on heroku. This leverages [ember-cli-fastboot](https://github.com/tildeio/ember-cli-fastboot).

## Setup

```sh
$ npm install hone/ember-cli-heroku --save-dev
$ ember g heroku
$ npm install
$ bower install
```

## Running

```sh
$ echo PORT=3000 > .env
$ foreman run npm start
```

## Deploying

```sh
$ git add package.json
$ git commit -m "herokuify ember-cli"
$ heroku create
$ heroku config:add NPM_CONFIG_PRODUCTION=false
$ git push heroku master
```
