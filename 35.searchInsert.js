/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1
示例 3:

输入: [1,3,5,6], 7
输出: 4
示例 4:

输入: [1,3,5,6], 0
输出: 0

 */
var searchInsert = function (nums, target) {
  // ! 2
  const n = nums.length;
  let left = 0,
    right = n - 1,
    ans = n;

  while (left <= right) {
    const mid = ((right - left) >> 1) + left;
    if (nums[mid] >= target) {
      ans = mid
      right = mid - 1;
    } else {
      left = mid + 1
    }
  }

  return ans
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
