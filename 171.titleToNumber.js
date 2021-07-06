/**
 * @param {string} columnTitle
 * @return {number}
171. Excel表列序号
给定一个Excel表格中的列名称，返回其相应的列序号。

例如，

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
示例 1:

输入: "A"
输出: 1
示例 2:

输入: "AB"
输出: 28
示例 3:

输入: "ZY"
输出: 701
 */
var titleToNumber = function (columnTitle) {
  // ! 2
  let ans = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const num = columnTitle[i].charCodeAt() - "A".charCodeAt() + 1;

    ans = ans * 26 + num;
  }

  return ans;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));
