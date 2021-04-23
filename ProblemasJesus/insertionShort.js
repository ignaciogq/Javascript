let array = [4, 3, 6, 8, 1, 9, 2, 5, 7, 0];

function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
      let number = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > number) {
          array[j + 1] = array[j]
          j--;
      }
      array[j + 1] = number;
  }
  return array;
}

console.log(insertionSort(array));