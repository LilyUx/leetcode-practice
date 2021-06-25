/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 暴力解法 三层循环
  // 利用map去重
  // let res = []
  // const map = new Map();
  // const len = nums.length
  // if (!nums || len < 3) return res;
  // for (let i = 0; i < len - 2; i++) {
  //   for (let j = i + 1; j < len - 1; j++) {
  //     for (let k = j + 1; k < len; k++) {
  //       if (nums[i] + nums[j] + nums[k] === 0) {
  //         const value = [nums[i], nums[j], nums[k]]
  //         const key = value.sort((a, b) => a - b).join('')
  //         if (!map.get(key)) {
  //           map.set(key, value)
  //           res.push(value)
  //         }
  //       }
  //     }
  //   }
  // }
  // return res



  // 1. 先判断数组长度以及数组是否为空数组
  // 2. 对数组进行排序
  // 3. 遍历数组
  // 4. 如果当前item > 0, 则 a + b + c > 0 breat
  // 5. 如果nums[i] == nums[i - 1],重复，跳过
  // 6. 当 sum == 0，nums[L] == nums[L+1]，会重复，跳过 L++
  // 7. 当 sum == 0，nums[R] == nums[R-1]，会重复，跳过 R--

  let res = []
  const len = nums.length
  if (!nums || len < 3) return res
  nums.sort((a, b) => a - b)
  console.log(nums)
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (sum == 0) {
        res.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] == nums[L+1]) L++
        while (L < R && nums[R] == nums[R-1]) R++
        L++;
        R--;
      } else if (sum < 0) {
        L++
      } else if (sum > 0) {
        R--
      }
    }
  }
  return res
};
// @lc code=end