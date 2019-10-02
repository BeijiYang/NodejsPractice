const actionLists = ['rock', 'scissor', 'paper'];
const breakPoint = 3;
let count = 0;

const getRobotAction = random => {
  if (random < 1) {
    return 'rock';
  } else if (random < 2) {
    return 'scissor';
  } else {
    return 'paper';
  }
};

const getResult = (user, robot) => {
  if (!actionLists.includes(user)) return false;
  if (user === robot) return '平局';
  if (
    (user === 'rock' && robot === 'scissor') ||
    (user === 'scissor' && robot === 'paper') ||
    (user === 'paper' && robot === 'rock')
  ) {
    count++;
    return '你赢了';
  } else {
    return '你输了';
  }
};

const game = (userAction) => {
  const random = Math.random() * 3;

  const robotAction = getRobotAction(random);
  const result = getResult(userAction, robotAction);
  const resultText = result
    ? `我出了${robotAction}，${result}。`
    : '好好玩儿，瞎出的啥玩意儿。'
  console.log(resultText);
  const reachBreakPoint = count === breakPoint;
  return [resultText, reachBreakPoint];
};

module.exports = game;