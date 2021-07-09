/**
 * @param {number[]} nums
 * @return {number}
169. 多数元素
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1：

输入：[3,2,3]
输出：3
示例 2：

输入：[2,2,1,1,1,2,2]
输出：2
 

进阶：

尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 */
var majorityElement = function (nums) {
  // ! 5
  const n = nums.length;
  // * 1
  // const map = new Map();
  // nums.forEach((n) => {
  //   map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  // });

  // for (const [key, val] of map) {
  //   if (val > n / 2) {
  //     return key;
  //   }
  // }

  // * 2

  const sort = nums.sort((a, b) => a - b);
  return sort[Math.floor(n / 2)];
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
