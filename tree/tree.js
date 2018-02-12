

function hashTwoSum(array, target) {
   let result = []
   let pairs = {}

   array.forEach( num => {
     pairs[num] = target - num
     console.log(pairs[num])
   })

   array.forEach( num => {
     if (array.includes(pairs[num])) {
       result.push([num, pairs[num]])
     }
   })

   return result
 }

function sumPairs (nums, sum) {
  let pairs = []

  for (let i = 0; i < nums.length; i++){
    for (let j = 1; j < nums.length - 1; j++){
        if (nums[i] + nums[j] === sum) {
              pairs.push([nums[i], nums[j]])
        }
    }
  }
    return pairs;
}

function maxChar (array) {
  let maxChar = ''
  let maxNum = 0
  let charMap = {}

  for (let char of array){
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  for (let char in charMap){
    if (charMap[char] > maxNum) {
      maxNum = charMap[char]
      maxChar = char
    }
  }
  return maxChar;
}



function maxSubarray(array) {
    var currentMax = 0;
    var max = 0;
    for (var i = 0; i < array.length; i += 1) {
      currentMax = Math.max(0, currentMax + array[i]);
      max = Math.max(max, currentMax);
    }
    return max;
  }
