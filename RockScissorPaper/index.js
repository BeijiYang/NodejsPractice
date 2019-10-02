const game = require('./lib');

// const userAction = process.argv[process.argv.length - 1];
// 获取进程的标准输入
process.stdin.on('data', buffer => {
  const userAction = buffer.toString().trim();
  const [, suicide] = game(userAction);

  if (suicide) {
    console.log('你太厉害了，不玩儿了，哼！');
    process.exit()
  }
})