/**
 * @param {number[]} nums
 * @return {number}
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [0]
输出：0
示例 4：

输入：nums = [-1]
输出：-1
示例 5：

输入：nums = [-100000]
输出：-100000

 */
var maxSubArray = function (nums) {
  // ! 4
  // 滚动数组（思想）
  // * 1
  if (nums.length === 1) return nums[0];

  // let ans = nums[0],
  //   sum = 0;

  // nums.forEach(n => {
  //   if (sum > 0) {
  //     sum += sum + n;
  //   } else {
  //     sum = n;
  //   }

  //   sum = Math.max(ans, sum);
  // });

  // return ans;

  // * 2
  let ans = nums[0],
    sum = 0;
  nums.forEach(n => {
    sum = Math.max(sum + n, n);
    ans = Math.max(sum, ans);
  });
  return ans;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([0]));
console.log(maxSubArray([-100000]));
