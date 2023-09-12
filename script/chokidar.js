const chokidar = require('chokidar');
let shell = require('shelljs')
let exec = shell.exec

chokidar.watch('./src/**/*.scss').on('all', (event, path) => {
  exec('node script/sass_dev')
  console.log(event, path)
});
