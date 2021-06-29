/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // * 1. 移动非0元素
  // if (!nums || nums.length === 0) {
  //   return
  // }

  // let index = 0
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== 0) {
  //     nums[index++] = nums[i]
  //   }
  // }

  // while (index < nums.length) {
  //   nums[index++] = 0
  // }

  // * 2. 双指针
  if (!nums || nums.length === 0) {
    return
  }

  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 0) {
      i++
    } else if (i !== 0) {
      nums[j-i] = nums[j]
      nums[j] = 0
    }
  }

  // * 3 双指针
  // if (!nums || nums.length === 0) {
  //   return
  // }

  // let i = 0
  // for (let j = 0; j < nums.length; j++) {
  //   if (nums[j] !== 0) {
  //     [nums[i], nums[j]] = [nums[j], nums[i]]
  //     i++
  //   }
  // }
};
// @lc code=end

// * 1. 遍历，记录0的个数，移动非0元素
// * 2. 开新数组，i(head), j(tail)
// * 3. index

// const arr = [0,1,0,3,12]
// moveZeroes(arr)
// console.log(arr)



