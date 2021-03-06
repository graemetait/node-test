var express = require('express');
var shib    = require('shib-middleware');

var app = express();

app.use(shib());
app.use(shib.authenticate);

app.get('/', shib.sessionResponse);

return app.listen(process.env.NODE_PORT || 3333, function() {
  console.log('Listening on', this.address().port);
});
