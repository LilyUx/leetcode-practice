/**
 * @param {number} x
 * @return {number}
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。

 */
var mySqrt = function (x) {
  // ! 1

  // 二分法
  if (x === 0) return 0;
  if (x === 1) return 1;

  let left = 0,
    right = x,
    ans = -1;
  while (left <= right) {
    const mid = ((right - left) >> 1) + left;
    if (mid * mid <= x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};

console.log(mySqrt(4));
console.log(mySqrt(8));
