// Time Complexity: O(n)
// Space Complexity: O(n)

function twoSum(nums, target) {
  let hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    let currentValue = target - nums[i];

    if (currentValue in hashmap) {
      return [hashmap.currentValue, i];
    }
    hashmap.nums[i] = i;
  }
}

console.log(twoSum([2, 3, 5, 6, 7], 11)); // [2, 3]
console.log(twoSum([3, 5, 6, 7], 8)); // [0, 1]
console.log(twoSum([5, 6, 7], 13)); // [1, 2]
console.log(twoSum([2, 3, 5, 7], 12)); // [2, 3]
