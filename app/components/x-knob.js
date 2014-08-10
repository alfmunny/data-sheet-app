export default Ember.Component.extend({
  _initializeKnob: function () {
    this.$("h1").hide();
  }.on('didInsertElement')
});
