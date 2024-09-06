export default function BubbleSort(arr: number[]) {
  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // loop current value up through the arr
    for (let j = 0; j < arr.length; j++) {
      // if current value is greater than next value, swap it
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}
