/**
 * @param {number} columnNumber
 * @return {string}
168. Excel表列名称
给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

例如：

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

示例 1：

输入：columnNumber = 1
输出："A"
示例 2：

输入：columnNumber = 28
输出："AB"
示例 3：

输入：columnNumber = 701
输出："ZY"
示例 4：

输入：columnNumber = 2147483647
输出："FXSHRXW"
 */
var convertToTitle = function (columnNumber) {
  // ! 4 10 -> 26
  let sb = [];
  while (columnNumber !== 0) {
    columnNumber--;
    sb.push(String.fromCharCode((columnNumber % 26) + "A".charCodeAt()));
    columnNumber = Math.floor(columnNumber / 26);
  }

  return sb.reverse().join("");
};

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
console.log(convertToTitle(2147483647));
