// Get dependencies
const {
  exec
} = require('child_process');
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
app.use(require('compression')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);

server.listen(1234, () => {
  console.log(`Server running on localhost:1234.....`);
  if (process.argv.slice(2)[0] === '--report') {
    console.log(`Lighthouse is analysing the app.....`);
    exec('node ./node_modules/lighthouse/lighthouse-cli/index.js http://localhost:1234 --output-path=reports/lighthouse-report.html --view', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(stdout);
      console.log('Closing down server on port 1234');
      server.close('SIGTERM');
    });
  }
});
