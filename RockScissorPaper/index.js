const userAction = process.argv[process.argv.length - 1];

let robotAction, result;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const random = getRandom(0, 3);

const getRobotAction = random => {
  if (random < 1) {
    return 'rock'
  } else if (random < 2) {
    return 'scissor'
  } else {
    return 'paper'
  }
}

robotAction = getRobotAction(random);

const getResult = (user, robot) => {
  if (user === robot) return '平局'
  if (
    (user === 'rock' && robot === 'scissor') ||
    (user === 'scissor' && robot === 'paper') ||
    (user === 'paper' && robot === 'rock')
  ) {
    return '你赢了'
  } else {
    return '你输了'
  }
}

const print = () => {
  console.log(
    robotAction,
    getResult(userAction, robotAction)
  )
}

print();