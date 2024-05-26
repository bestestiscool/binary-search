
function findRotationCount(arr) {
  const pivot = findPivot(arr);
  return pivot;
}

function findPivot(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // If the array is already sorted, return the first index
    if (arr[left] <= arr[right]) {
      return left;
    }

    let mid = Math.floor((left + right) / 2);

    // Check if mid is the pivot
    if (mid < right && arr[mid] > arr[mid + 1]) {
      return mid + 1;
    }

    // Check if mid-1 is the pivot
    if (mid > left && arr[mid] < arr[mid - 1]) {
      return mid;
    }

    // Decide whether to go left or right
    if (arr[left] <= arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 0; // If no rotation, return 0
}
  


module.exports = findRotationCount