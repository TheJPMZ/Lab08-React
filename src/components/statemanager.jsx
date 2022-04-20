import celebaudio from '../assets/celebration.mp3';

const celebration = new Audio(celebaudio);
celebration.volume = 0.2;

const log = [];
const left = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let movements = 0;

const useStateManager = () => {
  const addLog = (meme) => {
    log.push(meme);
  };

  // remove meme from log
  const removeLog = (meme) => {
    log.splice(log.indexOf(meme), 1);
  };

  const checkLog = (meme) => {
    return log.includes(meme);
  };

  // check if log has 2 memes
  const checkLogLength = () => {
    return log.length === 2;
  };

  const checkLeft = (meme) => {
    return left.includes(meme);
  };

  // Check if left is empty
  const checkComplete = () => {
    if (left.length === 0) {
      celebration.play();
      /* eslint-disable no-alert */
      alert('You won!');
      /* eslint-enable no-alert */
    }
  };

  const pair = (meme) => {
    left.splice(left.indexOf(meme), 1);
    removeLog(meme);
    checkComplete();
  };

  const addMovement = () => {
    movements += 1;
  };

  const getMovements = () => movements;

  const getLeftLength = () => left.length;

  return {
    addLog,
    removeLog,
    checkLog,
    checkLogLength,
    checkLeft,
    pair,
    addMovement,
    getMovements,
    getLeftLength,
  };
};

export default useStateManager;
