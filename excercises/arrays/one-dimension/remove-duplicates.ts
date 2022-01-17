/**
 * Given a sorted array nums
 * remove duplicates
 * Solution will be an O(n)
 */

let nums: number[] = [1, 1, 2, 3, 3, 4, 5, 5]
/**
 * this has a space complexity
 */
const filterDups = function (nums: number[], prev = 0, res = []) {
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (!(i in nums)) continue;
    if (current !== prev) res.push(current);
    prev = nums[i];
  }

  return res
}
console.log(filterDups(nums));

/**
 * Second solution
 */
const filterDups2 = function (nums: number[]) {
  return nums.filter((val, i, array) => {
    val != array[i - 1]
  })
}
console.log(filterDups2(nums));