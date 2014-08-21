export default Ember.ObjectController.extend({
  needs: ["wacom", "tablet", "pressure"],
  actions: {
    downloadFile: function () {
      var writers = $('input[name="writer"]:checked');
      console.log(writers.length);
      var nameList = [];
      var allFiles = [];
      $(writers).each(function () {
        var writerName = $(this).parents("div .item").text().replace(/\s+/g, '');
        nameList.push(writerName);
      });
      if(document.URL.indexOf('wacom') > 0) var model = this.get('controllers.wacom');
      if(document.URL.indexOf('tablet') > 0) var model = this.get('controllers.tablet');
      if(document.URL.indexOf('pressure') > 0) var model = this.get('controllers.pressure');
      nameList.forEach(function (name) {
        model.forEach(function (writer) {
          if(writer.id == name){
            console.log(writer.id);
            for(var i = 0; i < writer['labels'].length; ++i){
              for(var j = 0; j < writer['labels'][i]['files'].length; ++j)
                {
                  var file = writer['labels'][i]['files'][j].id;
                  var splitArray = file.split("/lernstift.data/");
                  file = splitArray[1];
                  if(allFiles.indexOf(file) < 0) allFiles.push(file);
                }
            }
          }
        });
      });
      var allFilesString = allFiles.join("\n");
      var allFilesStringArray = [allFilesString];
      //console.log(allFilesString);
      var blob = new Blob(allFilesStringArray, {type: "text/csv;charset=utf-8"});
      saveAs(blob, "vibewirte-file-list.csv");
    }
  }
});
