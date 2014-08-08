var nums = process.argv.slice(2).map(function(num) {return +num;});
var sum = nums.reduce(function(x, y) {return x + y;}, 0);
console.log(sum);
