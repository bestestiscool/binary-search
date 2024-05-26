function findFloor(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let floor = -1; // Initialize the floor value to -1
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === x) {
      return arr[mid]; // If the middle element is equal to x, return it
    } else if (arr[mid] < x) {
      floor = arr[mid]; // Update the floor value
      left = mid + 1; // Move the left pointer to the right of mid
    } else {
      right = mid - 1; // Move the right pointer to the left of mid
    }
  }

  return floor; // If no exact match is found, return the last recorded floor value
}



module.exports = findFloor