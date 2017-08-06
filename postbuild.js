var fs = require('fs');
var replace = require("replace");
var UglifyJS = require("uglify-js");

var serviceWorkerContent = `<script>if('serviceWorker' in navigator){navigator.serviceWorker.register('/service-worker.min.js').then(function(registration){console.log('Service Worker registered');}).catch(function(err){console.log('Service Worker registration failed: ',err);});}</script></body>`;
var noScriptText = `<noscript>Your browser does not support JavaScript!</noscript></body>`;
var manifestContent = `<meta name="theme-color" content="#2196F3"/><link rel="manifest" href="manifest.json"></head>`;

replace({
  regex: "</body>",
  replacement: serviceWorkerContent,
  paths: ['dist/index.html'],
  //   silent: true,
});
replace({
  regex: "</body>",
  replacement: noScriptText,
  paths: ['dist/index.html'],
  //   silent: true,
});
replace({
  regex: "</head>",
  replacement: manifestContent,
  paths: ['dist/index.html'],
  //   silent: true,
});

fs.stat('./dist/service-worker.js', function (err, stats) {
  if (err)
    return console.error(err);
  var result = UglifyJS.minify({
    "service-worker.js": fs.readFileSync('./dist/service-worker.js', "utf8")
  });
  fs.writeFile('./dist/service-worker.min.js', result.code, function (err) {
    if (err)
      return console.error(err);
    console.log('Service Worker file minified.');
    fs.unlink('./dist/service-worker.js', function (err) {
      if (err) return console.log(err);
      console.log('Pretty Service Worker file deleted.');
    });
  });
});

fs.createReadStream('manifest.json').pipe(fs.createWriteStream('./dist/manifest.json'));
fs.createReadStream('launcher-icon-192x192.png').pipe(fs.createWriteStream('./dist/launcher-icon-192x192.png'));
fs.createReadStream('launcher-icon-512x512.png').pipe(fs.createWriteStream('./dist/launcher-icon-512x512.png'));

