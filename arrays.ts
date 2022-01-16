let salad = new Array(
  '🍅',
  '🍄',
  '🥦',
  '🥒',
  '🌽',
  '🥕',
  '🥑',
  '🍋'
);

const nums: Array<number> = new Array(1, 3, 5, 8, 12, 34, 35)

let get = function (arr, index) {
  return arr[index];
}

let search = function (arr, target) {
  let left: number = 0
  let right: number = arr.length - 1;

  while (left <= right) {
    let mid: number = (left + right) / 2;
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

console.log(search(nums, 34))



let x: Array<number> = new Array(2);

for (let i = 0; i < x.length; i++) {
  x[i] = new Array(2);
}

x[0][0] = 1
x[0][1] = 2
x[1][0] = 3
x[1][1] = 4

console.log(x)