/**
 * The file has method to find longest string in an array
 *
 * Input: String[] = an array of strings
 * Output: String = the longest of the strings in the array
 */

const findLongestString = (arr) => {
  if (!arr || !arr.length) {
    return '';
  }

  const longestStr = arr.reduce((result, str) => {
    return result.length < str.length ? str : result;
  }, '');

  return longestStr;
};

module.exports = { findLongestString };
