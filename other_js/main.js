/**
 * multi line comment. Mike Wilson 17 Jan 2022. 
 */
//Single line comment.

var numbers = [1, 3, 5, 7, 9, 2, 4, 8];

function missingNumber(numbers) {
  var missing = -1;

  for(i = 0; i <= numbers.length; i++) {
    if(numbers.indexOf(i) === -1) {
      missing = i;
    }
  }
  return missing;
}

console.log(missingNumber(numbers));
