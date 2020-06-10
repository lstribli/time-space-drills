const Array = require('./array');



function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
  arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);
  // arr.pop();
  // arr.pop();
  // arr.pop();
  arr.push("tauhida");

  console.log('Array:', arr);
  console.log('Targeted value/s:', arr.get(0));
  console.log('Targeted value/s 2:', arr.get(1));
  console.log('Targeted value/s 2:', arr.get(2));
}
main();

function URLify(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      result += '%20';
    }
    else {
      result += string[i];
    }
  }
  return result;
}
const answer4 = URLify('tauhida parveen');
console.log('number 4 answer:', answer4);


function FilterArray(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 5) {
      continue;
    }
    else {
      result.push(numbers[i]);
    }
  }
  return result;
}

const number6answer = FilterArray([0, 1, 3, 5, 7, 9]);
console.log('number 6 answer:', number6answer);


function MaxSum(numbers) {
  let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < numbers.length; i++) {
    max1 += numbers[i];
    if (numbers[i - 1] < 0) {
      max2 = max1 < max2 ? max2 : max1;
    }

  }
  return max1 > max2 ? max1 : max2;
}
const answer7 = MaxSum([4, 6, -3, 5, -2, 1]);
console.log('answer7:', answer7);



function mergeArrays(arr1, arr2) {
  let idx1 = 0, idx2 = 0, ret = [];

  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] <= arr2[idx2]) {
      ret.push(arr1[idx1]);
      idx1++;
    } else {
      ret.push(arr2[idx2]);
      idx2++;
    }
  }
  // one array is now empty.
  // Join the rest of the other array on.
  // this step needs some thinking!
  // can give you another hint that there's 
  // no concatenation involved!

  if (idx2 < arr2.length) {
    // we need to swap indeces
    idx1 = idx2;
    // and also array;
    arr1 = arr2;
  }
  // lastly, push the remaining element/s
  while (idx1 < arr1.length) {
    ret.push(arr1[idx1]);
    idx1++;
  }
  // finally return ret;
  return ret;
}

const answer8 = mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);
console.log('answer8', answer8);



