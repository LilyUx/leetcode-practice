/**
 * @param {number} n
 * @return {number}
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

 */
var climbStairs = function (n) {
  // ! 3
  // * ----------------

  // ** 1 递归优化
  // if (n <= 1) return 1;
  // if (cache[n]) return cache[n];
  // cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  // return cache[n];

  // * 2 动态规划 滚动数组
  // let p = 0,
  //   q = 0,
  //   r = 1;
  // for (let i = 1; i <= n; i++) {
  //   p = q;
  //   q = r;
  //   r = p + q;
  // }
  // return r;

  // * 3 斐波那契数列
  let sqrt5 = Math.sqrt(5);
  let fobi =
    Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
  return Math.floor(fobi / sqrt5);
};

var cache = [];

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));
