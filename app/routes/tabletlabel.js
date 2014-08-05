import Ember from 'ember';

var TabletlabelRoute = Ember.Route.extend({
  model: function (params) {
    return this.modelFor('tabletwriter').labels.findBy('id', params.labels_id);
  }
});

export default TabletlabelRoute;
