// Main function to find the index of a target value in a rotated sorted array
function findRotatedIndex(arr, num) {
  // Find the pivot point where the array is rotated
  const pivot = findPivot(arr);

  // If no pivot is found, the array is not rotated, perform a standard binary search
  if (pivot === -1) {
    return binarySearch(arr, num, 0, arr.length - 1);
  }

  // If the pivot itself is the target value, return the pivot index
  if (arr[pivot] === num) {
    return pivot;
  }

  // Determine which part of the array to search based on the target value
  if (arr[0] <= num) {
    return binarySearch(arr, num, 0, pivot - 1);
  }

  return binarySearch(arr, num, pivot + 1, arr.length - 1);
}

// Function to find the pivot point in the rotated sorted array
function findPivot(arr) {
  let left = 0;
  let right = arr.length - 1;

  // If the array is not rotated, return -1
  if (arr[left] < arr[right]) {
    return -1;
  }

  // Perform binary search to find the pivot
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if mid is the pivot
    if (mid < right && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    // Check if mid-1 is the pivot
    if (mid > left && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }

    // Decide whether to go left or right
    if (arr[left] >= arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1; // Pivot not found
}

// Function to perform binary search in a sorted subarray
function binarySearch(arr, num, left, right) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Element not found
}


module.exports = findRotatedIndex