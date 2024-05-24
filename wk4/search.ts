// const scores = [88, 75, 40, 60, 90]
// const sortedScores = [40, 60, 75, 88, 90]
// const target = 60


// function linearSearch(input: number[], target: number): number {
//   for (let i = 0; i < input.length; i++) {
//     const currentElement = input[i]
//     if (currentElement === target) {
//       return i
//     }
//   }
//   return -1
// }
// type result = {
//   numOfIter: number
//   idx: number

// }

// function binarySearch (input: number[], target: number): result {
//     let high = input.length - 1;
//     let low = 0;
//     let mid;
//     for (let i = 0; i < input.length; i++) {
//         mid = Math.floor((high + low) / 2);
//         const middleElement = input[mid];
//         if (middleElement === target) {
//             return {numOfIter: i+1, idx: mid};
//         } else if (middleElement < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }

//     return {numOfIter: -1, idx: -1}
// }

// // console.log(linearSearch(scores, target)) 
// console.log("Binary Search: ", binarySearch(sortedScores, target));