const game = require('./lib');

// const userAction = process.argv[process.argv.length - 1];

process.stdin.on('data', e => {
  const userAction = e.toString().trim();
  const [, suicide] = game(userAction);

  if (suicide) {
    console.log('你太厉害了，不玩儿了。');
    process.exit()
  }
})