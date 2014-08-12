export default Ember.View.extend({
	didInsertElement: function() {
      $("#my-menu").mmenu({
      	classes: "mm-light",
      	offCanvas: {
      		position: "right",
      		zposition: "front"
      	}
      });

      $("#my-button").click(function() {
      	$("my-menu").trigger("open.mm");
      });
	}
});