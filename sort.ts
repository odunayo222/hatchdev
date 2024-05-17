//bubble sort
 function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// selection sort
 function selectionSort(arr: number[]): number[] {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// insertion sort
 function insertionSort(arr: number[]): number[] {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// merge sort
//  function mergeSort(arr: number[]): number[] {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(arg0: number[], arg1: number[]): number[] {
//     throw new Error("Function not implcemented.");
// }
// console.log(mergeSort([5, 3, 8, 4, 2, 7, 1, 6]));