const game = require('./lib');

// const userAction = process.argv[process.argv.length - 1];

process.stdin.on('data', e => {
  const userAction = e.toString().trim();
  game(userAction);
})