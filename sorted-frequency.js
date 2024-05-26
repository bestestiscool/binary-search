function sortedFrequency(arr, num) {
  const firstIndex = findFirstOccurrence(arr, num);
  if (firstIndex === -1) return -1;

  const lastIndex = findLastOccurrence(arr, num);
  return lastIndex - firstIndex + 1;
}

function findFirstOccurrence(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      result = mid;
      right = mid - 1; // Keep searching in the left half
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

function findLastOccurrence(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      result = mid;
      left = mid + 1; // Keep searching in the right half
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}


module.exports = sortedFrequency