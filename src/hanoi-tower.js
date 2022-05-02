const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let minStep;
  let minTime;
  minStep = 2 ** disksNumber - 1;
  minTime = Math.floor(minStep * 3600 / turnsSpeed)
  let myObj = {}
  myObj['turns'] = minStep;
  myObj['seconds'] = minTime
  return myObj
}

module.exports = {
  calculateHanoi
};
