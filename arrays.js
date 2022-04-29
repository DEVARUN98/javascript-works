var expenses=[10000,15000,20000,25000]
console.log(expenses);

// for(let amount of expenses){
//     console.log(amount);
// }

var sum=0;
for (let amount of expenses){
    sum=sum+amount
}
console.log(sum);




var arr=[23,1,10,7,20]
// arr.sort((num1,num2)=>num1-num2)    num1-num2 means num1 cheruthanenkil descendimg orderil


// even numbers
var evens=arr.filter((num)=>num%2==0)


// number greater than 5
var numgt5=arr.filter((num)=>num>5)