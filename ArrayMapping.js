//this is adding 1 to original array
var originalNumbers = [1,2,3,23];
//create another array based on the first Array
var newNumbers = originalNumbers.map(function(number){
  return number+1;
});
// for each array item our new array with have +1
console.log(newNumbers);

//converting an array to all uppercase
var words = ["jane", "clare", "anna"];
var newWords = words.map(function(word) {
  return word.charAt(0).toUpperCase() //+ word.slice(1);
});
console.log(newWords);
