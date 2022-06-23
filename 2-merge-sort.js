const merge = (arr1, arr2) => {
  let res = [],
    li = 0;
  ri = 0;
  while (li < arr1.length && ri < arr2.length) {
    if (arr1[li] < arr2[ri]) {
      res.push(arr1[li]);
      li++;
    } else {
      res.push(arr2[ri]);
      ri++;
    }
  }
  if (arr1[li]) {
    let rem = arr1.slice(li);
    for (let i = 0; i < rem.length; i++) {
      res.push(rem[i]);
    }
  }
  if (arr2[ri]) {
    let rem = arr2.slice(ri);
    for (let i = 0; i < rem.length; i++) {
      res.push(rem[i]);
    }
  }
  return res;
};

let mergeSort = (arr) => {
  let n = arr.length;
  if (n <= 1) {
    return arr;
  }
  let midPos = Math.floor(n / 2);
  let leftArr = arr.slice(0, midPos);
  let rightArr = arr.slice(midPos);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

let arr = [5, 2, 7, 9, 1, 3];
console.log(mergeSort(arr));
