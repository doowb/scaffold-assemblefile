'uses strict';

var assemble = require('assemble');
var app = assemble();

app.task('default', function () {
  console.log('TODO: override default task');
});

module.exports = app;
