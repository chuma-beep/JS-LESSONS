//binary search 
//note that binding  is  in action 
//bing is always in action //hewheheje 

function binarySearch(arr, target){

//we'll use two pionters
let leftIndex = 0;
let rightIndex = arr.length - 1 // this is set tothe last element in the array


while(leftIndex <= rightIndex)
{
    let middleIndex = Math.floor(leftIndex + rightIndex)/2 // were are actually doing something crazy here wtf
    if(target == arr[middleIndex]){//middle  index still holds the value of that equation 
        return middleIndex //still holds the value
    }
    if (target < arr[middleIndex]){ //still holds
        rightIndex = middleIndex -1 //still holds
    }else{
        rightIndex = middleIndex + 1 //still holds
    }
}

return -1
}


console.log(binarySearch([-5, 2, 4, 6, 10], 10))
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
console.log(binarySearch([-5, 2, 4, 6, 10], 20))
