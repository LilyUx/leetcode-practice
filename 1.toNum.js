/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

  你可以按任意顺序返回答案。

  示例 1：

  输入：nums = [2,7,11,15], target = 9
  输出：[0,1]
  解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
  示例 2：

  输入：nums = [3,2,4], target = 6
  输出：[1,2]
  示例 3：

  输入：nums = [3,3], target = 6
  输出：[0,1]


 */
var toNum = function (nums, target) {
  // ! 5
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const n2 = target - n;

    if (map.has(n2)) {
      return [map.get(n2), i];
    }

    map.set(n, i);
  }
};

var nums = [3, 2, 4],
  target = 6;
console.log(toNum(nums, target));
console.log(toNum([3, 3], target));
