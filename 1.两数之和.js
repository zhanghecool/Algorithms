/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const another = target - current;
    if (m.has(another)) {
      return [m.get(another), i];
    }
    m.set(current, i);
  }
};
