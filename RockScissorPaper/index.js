const game = require('./lib');

const userAction = process.argv[process.argv.length - 1];

game(userAction);