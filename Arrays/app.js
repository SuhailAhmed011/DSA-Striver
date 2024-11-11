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
    let i = 0; 
    let n = array.length; 
    
    for (let j = 1; j < n; j++) {
      
        if (array[j] != array[i]) {
         
            array[i + 1] = array[j];
            i++; // Move i forward
        }
    }
    
    // Return the modified array and the count of unique elements (i + 1)
    return [array, i + 1];
}

console.log(removeDuplicatesFromArrayOptimal([1,1,2,2,3,3]))

// the tome complexity of this code is : O(n)


// Question No. 5 =========================================================================================================



// brute force :-> 


function rotateArrayByDPlace(array,D){
    const n = array.length;
    D = D % n;
    const temp = [];

  
    for(let i = 0; i < D; i++){
        temp[i] = array[i];
    }

  
    for(let i = D; i < n; i++){
        array[i-D] = array[i]
    }
   
    for(let i = n - D; i < n; i++){
        array[i] = temp[i - (n - D)]
    }
    return array
}




// OPTIMAL SOLUTION :->  just for space complaxity 

function rotateArrayByDPlaceOptimal(array,D){
    const n = array.length;
    D = D % n;
    
    reverseArray(array,0,D - 1); 


    reverseArray(D,n - 1);


    reverseArray(0,n - 1)

    function reverseArray(arr,start,end){
        while(start < end){
           [arr[start], arr[end]] = [arr[end], arr[start]] // using destructuring
           start++
           end--
        }
    }
    return array
}

//  -> the time complexity will be O(n2) but the space will be O(n)



// Question No. 6 =========================================================================================================

//  Move all the zeros to the end of the array



function moveZerosToEnd(array){
    const n = array.length;
    let zeroCounter = 0; 
    for(let i = 0; i < n; i++){
        if(array[i] == 0){
            array.splice(i,1); 
            zeroCounter++;
            i--; 
        }
    }
    for(let i = 0; i <= zeroCounter; i++){
        array.push(0);
    }
    return array;
}



function moveZerosToEndOptimal(array){
    let j = -1;
    for(let i = 0; i < array.length;i++){
        if(array[i] == 0){
            j = i;
            break;
        }
    }
    for(let i = j+1; i < array.length; i++){
        if(array[i] !== 0){
            [array[j],array[i]] = [array[i],array[j]]
            j++
        }
    }
    return array
}
console.log(moveZerosToEndOptimal([1,2,0,3,0,8,6,0]))


