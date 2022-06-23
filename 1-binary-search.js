const binarySearch = (arr, key) => {
  let low = 0,
    high = arr.length - 1,
    mid;
  while (low <= high) {
    mid = parseInt((low + high) / 2);
    if (arr[mid] == key) {
      console.log(
        `element ${key} is found at position ${mid} in given array [${arr}]`
      );
      return mid;
    } else if (arr[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return "element not found";
};

console.log(binarySearch([3, 2, 5, 7], 10));
