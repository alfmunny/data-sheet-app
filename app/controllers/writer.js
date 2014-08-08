var WriterController = Ember.ObjectController.extend({
  isBlended: false,
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
    }
  }
});

export default WriterController;
