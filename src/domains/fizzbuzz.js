function fizzbuzz(a) {
  var _a = parseInt(a);
  var output = '';
  if (_a % 3 === 0) {
    output += 'Fizz';
  }
  if (_a % 5 === 0) {
    output += 'Buzz';
  }
  return output;
}
module.exports = fizzbuzz;
