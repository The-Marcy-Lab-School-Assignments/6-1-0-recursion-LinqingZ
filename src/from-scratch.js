// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  // if (arr.length === 1){
  //     return arr[0]
  // }
  return arr[0] + sum(arr.splice(1));
};

// Reverse string using recursive approach
const reverse = (str) => {
  if (str.length === 0) {
    return "";
  }
  return str[str.length - 1] + reverse(str.slice(0, -1));
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
  if (n === 0) {
    return 0;
  }
  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

// Recursive fibonacci
const fibRec = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibRec(n - 1) + fibRec(n - 2);
};

// Return the index of target in arr, or -1 if not found using recursion
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  //     if(start === end) {
  //         if (arr[start] === target){
  //             return start
  //         }
  //         return -1;
  //     }
  //     start = start + 1
  //     end = end -1
  //     return binarySearch(arr, target, start, end)

  // };

  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
