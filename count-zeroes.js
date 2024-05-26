function countZeroes(arr) {
  let zero_counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0){
      zero_counter++;
    }
  }
  return zero_counter
}

module.exports = countZeroes