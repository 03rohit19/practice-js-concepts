// two sums

function twoSums(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
const nums = [3, 4, 6, 8];
const target = 14;
const result = twoSums(nums, target);
console.log(result);
