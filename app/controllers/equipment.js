export default Ember.ArrayController.extend({
  isSorted: false,
  allLetters: function () {
    var writers = this.get('model');
    var letters = [], u = {};
    for (var i = 0; i < writers.length; i++) {
      for (var j=0; j < writers[i]['labels'].length; j++) {
        var letter = writers[i]['labels'][j];
        letter = $.extend(true, [], letter);
        if(u.hasOwnProperty(letter['id'])) {
          var n = letters.map(function (e) {
            return e['id'];
          }).indexOf(letter['id']);
          var sum = letters[n]['repeat'] + letter['repeat'];
          letters[n]['repeat'] = sum;
          continue;
        }
        letters.push(letter);
        u[letter['id']] = 1;
      }
    }
    return letters;
  }.property('model'),

  sortedContent: function () {
      var labels = this.get('allLetters');
      var labelsController = Ember.ArrayController.create({
        content: labels,
        sortProperties: ['repeat'],
        sortAscending: false
      });
      var sortedContent = labelsController.get('arrangedContent');
      return sortedContent;
    }.property('allLetters'),

  actions: {
    sort: function () {
      this.toggleProperty('isSorted', true);
    }
  }

});
