import DS from 'ember-data';
import ENV from '<%= dasherizedPackageName %>/config/environment';

export default DS.RESTAdapter.extend({
  namespace: ENV.HEROKU_API_PATH
});
