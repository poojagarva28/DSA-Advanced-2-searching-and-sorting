function sortarrayString(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
var arr = [
  "minato",
  "sasuke",
  "naruto",
  "obito",
  "madara",
  "indra",
  "pain",
  "kakashi",
];
console.log("input string:");
console.log(arr);
console.log("output sorted:");
console.log(sortarrayString(arr));
