// Time Complexity: O(n)
// Space Complexity: O(1) if array is sorted

function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let sum = 0;

  while (left < right) {
    sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else right--;
  }
}

console.log(twoSum([2, 3, 5, 6, 7], 11)); // [2, 3]
console.log(twoSum([3, 5, 6, 7], 8)); // [0, 1]
console.log(twoSum([5, 6, 7], 13)); // [1, 2]
console.log(twoSum([2, 3, 5, 7], 12)); // [2, 3]
