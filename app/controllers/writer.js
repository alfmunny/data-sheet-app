var WriterController = Ember.ObjectController.extend({
  isSorted: false,
  sortedContent: function () {
      var labels = this.get('labels');
      var labelsController = Ember.ArrayController.create({
        content: labels,
        sortProperties: ['repeat'],
        sortAscending: false
      });
      var sortedContent = labelsController.get('arrangedContent');
      return sortedContent;
    }.property('labels'),

  actions: {
    sort: function () {
      this.toggleProperty('isSorted', true);
    },

    extract: function() {
      
    }
  }
});

export default WriterController;
