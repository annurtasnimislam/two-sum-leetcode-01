// Time Complexity: O(n*2)
// Space Complexity: O(1)

function twoSum(nums, target) {
  let i, j;

  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([2, 3, 5, 6, 7], 11)); // [2, 3]
console.log(twoSum([3, 5, 6, 7], 8)); // [0, 1]
console.log(twoSum([5, 6, 7], 13)); // [1, 2]
console.log(twoSum([2, 3, 5, 7], 12)); // [2, 3]
