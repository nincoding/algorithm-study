const insertionSort = function (arr, callback = (num) => num) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && callback(arr[j]) > callback(currentVal); j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};


