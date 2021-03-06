/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();
app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/bootstrap/dist/css/bootstrap.css');
app.import('vendor/fonts/glyphicons-halflings-regular.eot');
app.import('vendor/fonts/glyphicons-halflings-regular.svg');
app.import('vendor/fonts/glyphicons-halflings-regular.ttf');
app.import('vendor/fonts/glyphicons-halflings-regular.woff');
app.import('vendor/jquery-knob/js/jquery.knob.js');
app.import('vendor/jQuery.mmenu/src/js/jquery.mmenu.min.all.js');
app.import('vendor/jQuery.mmenu/src/css/jquery.mmenu.all.css');
app.import('vendor/checkboxes.js/dist/jquery.checkboxes-1.0.5.min.js');
app.import('vendor/highcharts/highcharts.js');
app.import('vendor/highcharts/modules/exporting.js');
app.import('vendor/file-saver/FileSaver.js');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
