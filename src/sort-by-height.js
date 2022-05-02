const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let myArr = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == -1) {
      myArr.push(j)
    }
  }
  let resultArr = arr.filter(element => element > 0)
  resultArr.sort((a, b) => a - b);
  for (i = 0; i < myArr.length; i++) {
    resultArr.splice(myArr[i], 0, -1)
  }
  return resultArr

}


module.exports = {
  sortByHeight
};
