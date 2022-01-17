/**
 * Given mxn matrix
 * return all elements in spiral order
 */


const spiralMatrix = function (matrix: Array<number[]>) {
  let list = new Array()
  if (matrix.length == 0) return list;

  let r1 = 0, r2 = matrix.length - 1, c1 = 0, c2 = matrix[0].length - 1;

  while (r1 <= r2 && c1 <= c2) {
    for (let c of numRange(c1, c2)) list.push(matrix[r1][c]);
    for (let r of numRange(r1, r2)) list.push(matrix[r][c2]);

    if (r1 < r2 && c1 < c2) {
      for (let c of numRange(c2 - 1, c1 + 1)) list.push(matrix[r2][c]);
      for (let r of numRange(r2, r1 + 1)) {
        if (matrix[r])
          list.push(matrix[r][c1])
      }
    }
    r1++; r2--; c1++; c2--;
  }
  return list
}

/**
 * TODO: Resolve the range correctly
 */
function numRange(start: number, end: number): number[] {
  const diff = Math.abs(end - start)
  console.log(diff);
  console.log(start)

  return new Array(diff).fill(0).map((val, i) => i + start)
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

console.log(spiralMatrix(matrix));
