// we have 3 approach to solve any problem(-> Brute force -> better solution -> optimize solution)
/*
    brute force :-> the worst solution you can think of
    better solution :-> the solution which is better than brute force
    Optimal solution:-> most optimal or best solution of any problem 8
*/

// Question 1 --------------------------------------------
// Find a largest element in an array

// Brute force Approach

/*function largestElement(array) {
  let maxElement = [];
  let result = array.sort((a, b) => a - b);

  maxElement.push(result[result.length - 1]);
  return maxElement;
}

console.log(largestElement([2, 4, 1, 6, 4, 9])); */
// time complexity: O(n log n) and the space Complexity is : O(1);

// Optimal Approach

/* function largestElem(arr){
    let max = arr[0]
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log(largestElem([1,3,5,15,3,6,4,9])) */ 
// time complexity: O(n) and the space Complexity: O(1);


// Question 2 ------------------------------------------------------------
// Find the second largest element in the array

// Brute force Approach

/* function secondLargest(array){
   array.sort((a,b) => b-a) // sort array to decending order from large to small
   for(let i = 1; i<array.length; i++){
    if(array[i] !== array[0]){ // check array[i] is different from array[0]
        return array[i]
    }
   }
   return undefined // if there is no second largest value
}
console.log(secondLargest([34,2,5,54,9,67])) */ 
// Time complexity : o(n log n) and space complexity : o(1)


// Optimal Approach

/* function secondLargest(array){
    let largest = -Infinity
    let second = -Infinity
    for(let i = 1; i<array.length; i++){
        if(array[i] > largest){
            second = largest
            largest = array[i]
        }else if(array[i] > second && array[i] < largest){
            second = array[i]
        }
    }
    return [largest, second]
}
console.log(secondLargest([1,89,8,56,90])) */ 
//Time Complexity: o(n)
// space Complexity: o(1)
