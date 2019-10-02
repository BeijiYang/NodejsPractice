const actionLists = ['rock', 'scissor', 'paper'];

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

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
    return '你赢了';
  } else {
    return '你输了';
  }
};

const game = (userAction) => {
  const random = getRandom(0, 3);
  const robotAction = getRobotAction(random);
  const result = getResult(userAction, robotAction);
  const resultText = result
    ? `我出了${robotAction}，${getResult(userAction, robotAction)}。`
    : '好好玩儿，瞎出的啥玩意儿。'
  console.log(resultText);
  return resultText;
};

module.exports = game;