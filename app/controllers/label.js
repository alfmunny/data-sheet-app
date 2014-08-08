var LabelController = Ember.ObjectController.extend({
  filesInfo: function () {
    var newfiles = this.get('model.files');
    newfiles = $.extend(true, [], newfiles)
    for (var i = 0; i < newfiles.length; i++) {
      var name = newfiles[i]['id'];
      //var array = name.split("/lernstift.data/");
      var array = name.split("/");
      newfiles[i]['id'] = array[array.length -1 ];
      newfiles[i]['date'] = array[array.length -2 ];
    }
    return newfiles;
  }.property('model.files.@each')
});

export default LabelController;
