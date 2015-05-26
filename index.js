/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-heroku',
  config: function(env, baseConfig) {
    return { HEROKU_API_PATH: process.env.HEROKU_API_PATH };
  }
};
