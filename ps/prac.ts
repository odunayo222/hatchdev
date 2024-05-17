//linear search
const linearSearch = (scores: number[], target: number) => {
    for(let i = 0; i < scores.length; i++) {
        if(target === scores[i]) {
            return i;
        }
    }

    return -1
}
// console.log(linearSearch([6,7,8,9,4], 90))

//binary search
type result = {
      numOfIter: number
      idx: number
    
    }
function binarySearch (input: number[], target: number): result{
        let high = input.length - 1;
        let low = 0;
        let mid;
        for (let i = 0; i < input.length; i++) {
            mid = Math.floor((high + low) / 2);
            const middleElement = input[mid];
            if (middleElement === target) {
                return {numOfIter: i+1, idx: mid};
            } else if (middleElement < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    
        return {numOfIter: -1, idx: -1}
    }
     
    console.log("Binary Search: ", binarySearch([2,3,7,7,11,15,25], 3));