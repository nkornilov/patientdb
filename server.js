var express = require('express'),
  app = express(),
  PORT = process.env.npm_package_port || 8082;

// Returns 'node_modules' folder content on '/node_modules/*' GET requests
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// Returns 'public' folder content on '/public/*' GET requests
app.use('/assets', express.static(__dirname + '/assets'));

// Response with index.html on GET /bench-ui request
app.get('/patientDB', function (req, res) {
  res.sendfile("index.html");
});

// Sets 'PORT' variable value as a port for application and add handler for any errors
app.listen(PORT, console.info('Server is started on ' + PORT))
  .on('error', console.error);