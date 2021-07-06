/**
 * @param {string} s
 * @return {boolean}
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false

 */
var isPalindrome = function (s) {
  // ! 4
  s = s.toLocaleLowerCase().match(/[a-z0-9]+/g);
  s = s ? s.join("") : "";

  let head = 0,
    tail = s.length - 1;

  while (head < tail) {
    if (s[head] === s[tail]) {
      head++;
      tail--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
