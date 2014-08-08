var WacomlabelController = Ember.ObjectController.extend({
  fileInfo: function () {
    var newfiles = this.get('model.files');
    newfiles = $.extend(true, [], newfiles)
    for (var i = 0; i < newfiles.length; i++) {
      var name = newfiles[i]['id'];
      //var array = name.split("/lernstift.data/");
      var array = name.split("/");
      console.log(array);
      newfiles[i]['id'] = array[array.length -1 ];
      newfiles[i]['date'] = array[array.length -2 ];
      //console.log(files[i]['date']);
    }
    return newfiles;
  }.property('model.files.@each')
});

export default WacomlabelController;
