export default Ember.View.extend({
  click: function (event) {
      this.$("a").each(function() {
        //$(this).find("#pointer").removeClass("pointer glyphicon glyphicon-chevron-right");
        if($(this).hasClass('active')) {
         //$(this).find("#pointer").addClass("pointer glyphicon glyphicon-chevron-right");
        }
      });

  },

  didInsertElement: function () {
    this.$("a").each(function () {
      if($(this).hasClass('active')) {
        $(this).children("li").addClass("active");
        //$(this).find("#pointer").addClass("pointer glyphicon glyphicon-chevron-right");
      }
    });
  }
});
