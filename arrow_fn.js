var arr=[10,2,3,4]


// map
var cubes=arr.map(num=>num**3)
console.log(cubes);


var add_by_two=arr.map(num=>num+2)
console.log(add_by_two);

// .5 num+1     num<5 num-1

var a=arr.map(num=>num>5?num+1:num-1)
console.log(a);