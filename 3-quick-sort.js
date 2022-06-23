const partition = (arr, l, h) => {
  let pivot = arr[l];
  let i = l,
    j = h;
  do {
    do {
      i++;
    } while (arr[i] <= pivot);
    do {
      j--;
    } while (arr[j] > pivot);
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  } while (i < j);
  let temp = arr[j];
  arr[j] = arr[l];
  arr[l] = temp;
  return j;
};

const quickSort = (arr, l, h) => {
  let j;
  if (l < h) {
    j = partition(arr, l, h);
    quickSort(arr, l, j);
    quickSort(arr, j + 1, h);
  }
};

let arr = [20, 30, 3, 28, 12, 0];
quickSort(arr, 0, arr.length);
console.log(arr);
