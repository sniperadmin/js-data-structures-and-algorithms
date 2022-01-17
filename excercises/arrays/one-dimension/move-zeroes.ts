/**
 * This solution takes O(n) complexity to resolve
 */
const nums: Array<number> = [0, 1, 0, 3, 12]

let moveZeroes = function (nums: Array<number>) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i]
    }
  }

  for (let i = count; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
}

console.log(moveZeroes(nums));
