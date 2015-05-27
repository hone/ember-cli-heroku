var fs = require('fs');
var path = require('path');

module.exports = {
  name: "ember-cli-heroku",
  description: "setup for running an ember-cli app on Heroku",

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    var blueprintContext = this;

    return this.addPackagesToProject([
       { name: 'bower', target: '^1.4.1' },
       { name: 'ember-cli-fastboot', target: 'tildeio/ember-cli-fastboot' }
    ])
    .then(function() {
      var project = blueprintContext.project;
      var packagepath = path.join(project.root, 'package.json');
      var contents = fs.readFileSync(packagepath, { encoding: 'utf8' });
      var pkg = JSON.parse(contents);

      pkg.scripts.start = 'ember fastboot --port $PORT --no-build --serve-assets --environment=production';
      pkg.scripts.postinstall = 'bower install && ember fastboot:build --environment=production';
      pkg.cacheDirectories = ['node_modules', 'bower_components'];

      var newcontents = JSON.stringify(pkg, null, 2);
      fs.writeFileSync(packagepath, newcontents, { encoding: 'utf8' });
    });
  }
};
