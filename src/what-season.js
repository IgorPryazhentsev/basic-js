const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

//  Object.prototype.toString.call(date) === '[object Date]'
function getSeason(date) {
  if (typeof date === "undefined") {
    return ('Unable to determine the time of year!')
  }
  try {
    if (date.getTime()) {
      if (date instanceof Date) {
        let a;
        a = date.getMonth();
        if (a <= 1 || a > 10) {
          return "winter"
        }
        else if (a > 1 && a <= 4) {
          return "spring"
        }
        else if (a > 4 && a <= 7) {
          return "summer"
        }
        else { return "autumn" }
      }
      else throw new Error("Invalid date!")
    }
  }
  catch (e) { throw new Error("Invalid date!") }
}

module.exports = {
  getSeason
};
