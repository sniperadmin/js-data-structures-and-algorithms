<style type="text/css">
  .alert {
    border: 1px solid red;
    color: yellow;
  }
</style>

# Run Time Analysis
An estimate of increasing the runtime of an algo as its input grows

It is used for measuring the efficiency of the algo

## Time Factor (Time complexity)
number of operations required for a particular algorithm

## Space Factor (Space complexity)
amount of memory required used by an algorithm

---

# Notations for Run Time Analysis
- Omega Notation $Ω(n)$ -- Best Case
- Big O Notation $O(n)$ -- Worst Case
- Theta Notation $Θ(n)$ -- Average Case

## Omega Notation $Ω(n)$
- Gives Lower bound of an algorithm
- Used to measure the best case of the algorithm

## Big O notation $O(n)$
- Gives Upper bound of an algorithm
- Used to measure the worst case of the algorithm

## Theta notation $Θ(n)$
- Gives average for both Lower & Upper bound of an algorithm
- Used to measure the average case of the algorithm

# Guided Examples of Run Time Analysis
| Complexity   |        Name        |                                            Example |
| :----------- | :----------------: | -------------------------------------------------: |
| $O(1)$       |      Constant      |           Adding element in front of a linked list |
| $O(log n)$   |    Logarithmic     | Searching an element in a sorted arr / linked list |
| $O(n)$       |       Linear       |              Searching element in a unsorted array |
| $O(n log n)$ | Linear algorithmic |                               Merge sort algorithm |
| $O(n^2)$     |     Quadratic      |          shortest path between 2 points in a graph |
| $O(n^3)$     |       Cubic        |                              Matrix Multiplication |
| $O(2^n)$     |    Exponential     |       Naive solution for the nth Fibonacci problem |
| $O(n!)$      |     Factorial      |     Naive solution for travelling salesman problem |

---
# Practical examples for all types
## Constant time $O(1)$
  - It is not affected by the size of an input
      ```ts
        function (n: number): number {
          const a: number = n * n
          console.log(a)
          return a
        }
      ```
---
## Linear time $O(n)$
  - Performs n of operations as it accepts n input size
  ```ts
  let nums: object = {1,2,3,4,5,6}
  for (let i: number = 0; i < nums.size(); i++) {
    console.log(nums[i])
  }
  ```
---
## Logarithmic Time $O(log n)$
  - Algo than has running time O(log n) si slightly faster than O(n) [Example Binary Search algo]
  ```js
  const binarySearch = function (nums, target) { // -- T(n)
    let left = 0; // --- O(1)
    let right = len(nums - 1) // --- O(1)

    while (left <= right) { // --- O(n/2)
      let mid = left + (right - left) / 2; // --- O(1)
      if (nums[mid] == target) { // --- O(1)
        return mid; // --- O(1)
      }
      else if (target > nums[mid]) { // --- O(1)
        left = mid + 1; // --- O(1)
      }
      else { // --- O(1)
        right = mid - 1; // --- O(1)
      }
    }

    return -1; // --- O(1)
  }

  ```
To calculate time complexity <br>
  1....... $length = n = n/2^0$ <br>
  2....... $length = n = n/2^1$ <br>
  3....... $length = n = n/2^2$ <br>
  4....... $length = n = n/2^3$ <br>
  k....... $length = n = n/2^k$ <br>


  After k division length = $n/2^k = 1$ <br>
  $n = 2^k$ <br>
  $log{_2}(n) = log{_2}(2^k)$ <br>
  $log{_2}(n) = k*log{_2}(2)$ <br>
  $k = log{_2}(n)$ <br>

TC => $O(log{_2}(n))$ <br>
SC => $O(1)$

---
## Linear Logarithmic Time: $O(n log n)$
It divides the problem into sub problems and then merges them in n time 
(Example => Merge & sort algorithm)

```js
function mergeSort(nums, left, right) { // -- T(n)
  if (right > left) { // -- O(1)
    let mid = left + (right - left) / 2; // -- O(1)
    mergeSort(nums, left, mid) // -- T(n/2)
    mergeSort(nums, mid + 1, right) // -- T(n/2)
    merge(nums, left, mid, right) // --O(n)
  }
}

function merge() {// -- O(n)}
```
**Solving it: **<br>

$T(n) = O(1) + O(1) + T(n/2) + T(n/2) + n$ <br>
$T(n) = 2T(n/2) + n$ **---->> eq.1**<br>

--> **Divide n by 2** <br>

$T(n/2) = 2T(n/4) + n/2$ **---->> eq.2**<br>

**substitute eq.2 in eq.1** <br>
$T(n) = 4 *  T(n/4) + 2 * n$ <br>

**substitute n by n/4 in eq.1** <br>
$T(n/4) = 2 T(n/8) + n/4$ **---->> eq.3**<br>

<div class="alert">
  <b>Pattern will be: </b> <br>
  $T(n) = 2^i * T(n/2^i) + i * n$ <br>
</div>

let $n/2^i = 1$ <br>

$n = 2^i$

$log{_2}(n) = log{_2}(2^i)$

$log{_2}(n) = i$

after substituting in the discovered pattern

<div class="alert">
  <b>Pattern will be: </b> <br>
  TC => O(n*log(n)) <br>
  SC => O(n)
</div>

---

## Quadratic Time: $O(n^2)$
Bubble sort algorithm takes quadratic time complexity (loop nested inside a loop)

```js
for (let i = 0; i < n; i++) { // o(n)
  for (let j = 0; j < n; j++) { // o(n)
    // statement here --- O(1)
  }
} // -- total O(n^2)
```
---

## Cubic Time: $O(n^3)$
Same principle of $O(n^2)$

```js
for (let i = 0; i < n; i++) { // o(n)
  for (let j = 0; j < n; j++) { // o(n)
    // statement here --- O(1)
  }
  for (let k = 0; k < n; k++) { // o(n)
    // statement here --- O(1)
  }
} // -- total O(n^3)
```

## Exponential Time $O(2n)$
Very slow algo as input grows up. If n = 100,000 .. then T(n) would be 21000000.
(Example => brute forcing algorithm [Backtracking])
---

## Factorial Time $O(n!)$
Slowest EVER!

---

# Digging deeper in calculation of time complexity

## Example #1
```js
for (let i = 0; i < 10; i++) { // -- O(n)
  console.log(i) // -- O(1)
}
```
$T(n) = n/2 = n$ --- Reject any constants --- <br>

TC => O(n) <br>
SC => O(1) --- This means that we don't save any data structures in memory

---
## Example #2
```js
for (let i = 0; i < 10; i += 2) { // -- O(n/2)
  console.log(i) // -- O(1)
}
```
TC => O(n) <br>
SC => O(1) --- This means that we don't save any data structures in memory

---
## Example #3
```js
for (let i = 0; i < 10; i++) { // -- O(n)
  for (let j = 0; j < 10; j++) { // --O(n)
    console.log(i) // -- O(1)
  }
}
```
| i    |     j      | Execution |
| :--- | :--------: | --------: |
| 0    |            |         0 |
| 1    |     0      |         1 |
| 2    |    0,1     |         2 |
| 3    |   0,1,2    |         3 |
| 4    |  0,1,2,3   |         4 |
| ...  |    ...     |       ... |
| n    | 1....(n-1) |         n |

<div class="alert">
<p>Result will be</p>
</div>

$1+2+3+4+5+6+n = n(n-1)/2 = (n^2 + n)/2$ <br>

TC => $O(n^2)$ <br>
SC => O(1) --- This means that we don't save any data structures in memory

---
## Example #4
```js
let p = 0; // -- O(n)
for (let i = 0; p <= n; i += p) { // -- O(root n)
  Do something // -- O(1)
}
```

| i    |         j          |
| :--- | :----------------: |
| 0    |                    |
| 1    |       0 + 1        |
| 2    |     0 + 1 + 2      |
| 3    |   0 + 1 + 2 + 3    |
| 4    | 0 + 1 + 2 + 3  + 4 |
| ...  |        ...         |
| k    |     1.... + k      |

Taking the stop condition if p > n

$p = 1+2+3+4+5+...+k = k(k+1)/2 = (k^2+k)/2$ <br>

Then, $(k^2+ k)/2 > n$ <br>
Then, $k^2 > n$ <br>
Then, $k > \sqrt{n}$ <br>

TC => O(n) <br>
SC => O(1) --- This means that we don't save any data structures in memory

---
## Example #5
```js
for (let i = 0; i < n; i *=2) { // -- O(n)
  console.log(i) // -- O(1)
}
```

| i    |   j   |
| :--- | :---: |
| 0    |       |
| 1    | $2^1$ |
| 2    | $2^2$ |
| 3    | $2^3$ |
| 4    | $2^4$ |
| ...  |  ...  |
| k    | $2^k$ |

Taking the stop condition if i >= n
$i = 2^k$ <br>
Then $2^k >=n$ <br>
Then $log{_2}(2^k) = log{_2}(n)$ <br>
Then $k = log{_2}(n)$ <br>

TC => $O(log{_2}(n))$ <br>
SC => O(1) --- This means that we don't save any data structures in memory

---
## Example #6
```js
for (let i = 0; i <= 1; i /=2) { // -- O(n)
  console.log(i) // -- O(1)
}
```

| i    |    j    |
| :--- | :-----: |
| 0    |         |
| 1    | n/$2^1$ |
| 2    | n/$2^2$ |
| 3    | n/$2^3$ |
| 4    | n/$2^4$ |
| ...  | n/ ...  |
| k    | n/$2^k$ |

Taking the stop condition if i < 1
$i = n/2^k$ <br>
Then $1 >=n/2^k$ <br>
Then $2^k >=n$ <br>

Then $log{_2}(2^k) > log{_2}(n)$ <br>
Then $k > log{_2}(n)$ <br>

TC => $O(log{_2}(n))$ <br>
SC => O(1) --- This means that we don't save any data structures in memory

---
## Example #7
```js
for (let i = 0; i*i < n; i++) { // -- O(n)
  console.log(i) // -- O(1)
}
```
This will stop if -- $i*i = n$

$i * i = n$ <br>
Then $i^2 >=n$ <br>
Then $i >=\sqrt{n}$ <br>

TC => $O(\sqrt{n})$ <br>
SC => O(1) --- This means that we don't save any data structures in memory

---

# Data Strucutres

## Array
Array is a data structure that contains a group of elements, each is identified by array index.

### Properties
- Can store data of different types
- Has contiguous memory location
- Index starts from 0
- Size of array need to be specified and cannot be changed

### Example
- Simple Array => $[1, 2, 3, 4, 5, 6, ....]$

### Types of Array
- One Dimensional Array => $[1, 2, 3, 4, 5, 6, ....]$
- Multi-dimenstional Array => $[[], [], [], [], []]$

#### One Dimensional Array
Each element is represented by a single subscript. Elements are stored in consecutive memory location

#### Two Dimensional Array
Each element is represented by two subscripts. The Two-dimensional array `mxn` has `m` Rows and `n` columns and contains `m*n` elements.

for instance `3X4` Array => $[[1,2,3,4], [5,6,7,8], [9,10,11,12]]$

### How Array is stored in RAM (Random Accessed Memory)
#### 1D Array
```js
let nums = [1, 2, 3, 4, 5, 6, 7, 8]
```
let's assume it will render like this
<table border>
<tr>
    <th>.</th>
    <th>.</th>
    <th>.</th>
    <th>.</th>
    <th>.</th>
    <th>.</th>
    <th>.</th>
    <th>.</th>
    <th>.</th>
    <th>.</th>
    <th>.</th>
    <th>.</th>
</tr>
<tbody>
  <tr>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
  </tr>
  <tr>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
  </tr>
  <tr>
    <td>.</td>
    <td>.</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>.</td>
    <td>.</td>
  </tr>
  <tr>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
  </tr>
  <tr>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
  </tr>
  <tr>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
    <td>.</td>
  </tr>
</tbody>
</table>

The key is that each array value will be converted to a binary equivalent and then will be stored in a memory slot

#### 2D Array
Same concept

### How to create 1D Array
- Declare
  - Create a reference to the array
- Instantiation
  - Create an array
- Initialization
  - Assign Values to the array

### Declaration of Array
```ts
let Example: Array<number> // [1, 2, 3, 4]
let Example: Array<string> // ['a', 'b',...]
```

### Instantiation of Array
```ts
let example: Array<number> // [1, 2, 3, 4]
example = new Array()
```

### Initialization of Array
```ts
example = new Array()
```

### Searching algorithms
#### Linear search
#### Binary Search
The Idea of Binary Search is to divide the array into 2 halfs and must be sorted.
if the target number is larger than the `mid` value, then we discard the first half and vice versa.
this technique is very powerful.
```ts
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

search(nums, 34)

```
TC => $O(log{_2}(n))$ <br>
SC => O(1) --- This means that we don't save any data structures in memory

---

### 2D Arrays
```ts
let x: Array<number> = new Array(2);

for (let i = 0; i < x.length; i++) {
  x[i] = new Array(2);
}

x[0][0] = 1
x[0][1] = 2
x[1][0] = 3
x[1][1] = 4
```

This initialization costs only $O(1)$
