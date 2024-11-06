// we have 3 approach to solve any problem(-> Brute force -> better solution -> optimize solution)
/*
    brute force :-> the worst solution you can think of
    better solution :-> the solution which is better than brute force
    Optimal solution:-> most optimal or best solution of any problem 8
*/

// Question 1 --------------------------------------------
// Find a largest element in an array

// Brute force Approach

function largestElement(array) {
  let maxElement = [];
  let result = array.sort((a, b) => a - b);

  maxElement.push(result[result.length - 1]);
  return maxElement;
}

console.log(largestElement([2, 4, 1, 6, 4, 9])); 
// time complexity: O(n log n) and the space Complexity is : O(1);

// Optimal Approach

function largestElem(arr){
    let max = arr[0]
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log(largestElem([1,3,5,15,3,6,4,9])) 
// time complexity: O(n) and the space Complexity: O(1);


// Question 2 ------------------------------------------------------------
// Find the second largest element in the array

// Brute force Approach

 function secondLargest(array){
   array.sort((a,b) => b-a) // sort array to decending order from large to small
   for(let i = 1; i<array.length; i++){
    if(array[i] !== array[0]){ // check array[i] is different from array[0]
        return array[i]
    }
   }
   return undefined // if there is no second largest value
}
console.log(secondLargest([34,2,5,54,9,67])) 
// Time complexity : o(n log n) and space complexity : o(1)


// Optimal Approach

 function secondLargest(array){
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
console.log(secondLargest([1,89,8,56,90])) 
//Time Complexity: o(n)
// space Complexity: o(1)

// Question 3 ------------------------------------------------------------
// check if the array is sorted
// This approach is optimal and best approach. so we can single approach for this question

 function isArraySorted(arr){
    //for(let i = 0; i<=arr.length; i++){  // array sorted in asending order
       // if(arr[i] >= arr[i+1]){ // this approach work for only check array is sorted in asending order
          for(let i =1; i<arr.length; i++){
            if(arr[i] >= arr[i-1]){
                return false
            }
          }
          return true
}
console.log(isArraySorted([5,4,3,2,1])) 
// the Time complexity will be O(n) coz we used only single loop i


// Question 4 -----------------------------------------------------------
// Remove duplicates from sorted array
// Brute force Approach
 function removeDuplicate(arr){
    let result = arr.filter((item, index) => arr.indexOf(item) === index)
    return result
}
console.log(removeDuplicate([1,2,2,3,3])) 
// the time complexity of this code is : O(n2) coz every time arr and filter method cals indexOf method and indexOf is also a O(n) operations.


function removeDuplicateFormArray(arr){
    let unique = Array.from(new Set(arr))
    let n = unique.length
    for(let i = 0; i<n; i++){
        arr[i] = unique[i]
    }
    return [arr, n]
}
console.log(removeDuplicateFormArray([1,2,2,3,2,3,1,4,4]))  

// Optimal Approach
// with 2 pointer

function removeDuplicatesFromArrayOptimal(array) {
    let i = 0; // Initialize pointer i at the start
    let n = array.length; // Store the length of the array
    
    // Loop starts with j at 1, since we assume the first element is unique
    for (let j = 1; j < n; j++) {
        // Check if the current element (array[j]) is different from the element at i (array[i])
        if (array[j] != array[i]) {
            // If unique, move i to the next position and assign array[j] to array[i+1]
            array[i + 1] = array[j];
            i++; // Move i forward
        }
    }
    
    // Return the modified array and the count of unique elements (i + 1)
    return [array, i + 1];
}

console.log(removeDuplicatesFromArrayOptimal([1,1,2,2,3,3]))

// the tome complexity of this code is : O(n)
