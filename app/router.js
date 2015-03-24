import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('managers', {path: '/managers/'}, function() {
      this.route('manager', {path: '/:manager_id'});
  });
});

export default Router;
