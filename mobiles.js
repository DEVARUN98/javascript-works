var mobiles=[
    [1000,"redmi","redmi note 9",13000,50],
    [1001,"redmi","redmi note10 pro",17000,40],
    [1002,"redmi","redmi note 10 pro max",20000,50],
    [1003,"samsung","a52 s",28000,20],
    [1004,"samsung","a52s 5g",30000,50],
    [1000,"apple","iphone 12 ",100000,0],
]

// // all mobile names
// var mobile_names=mobiles.map(mobile=>mobile[2])
// console.log(mobile_names);

// // print all name in uppercase

// var name=mobiles.map(mobile=>mobile[2].toUpperCase())
// console.log(name);


// // print all samsung mobile details

// var samsung_mobile=mobiles.filter(pdct=>pdct[1]=="samsung")
// console.log(samsung_mobile);


// // print details of mobile under 15000
// var mobile_lt_5000=mobiles.filter(lt=>lt[3]<15000)
// console.log(mobile_lt_5000);

// // sort mobile wrto price(Descending)

// mobiles.sort((p1,p2)=>p2[3]-p1[3])
// console.log(mobiles);


// // sort mobile wrto price(Ascending)

// mobiles.sort((p1,p2)=>p1[3]-p2[3])
// console.log(mobiles);

// // mobile with highest price

// var price=mobiles.reduce((p1,p2)=>p1[3]>p2[3]?p1:p2)
// console.log(price);


// // find
// // finding mobile with name "samsung"
// var samsung_pdct=mobiles.find(product=>product[1]=="samsung")
// console.log(samsung_pdct);


// some
// prints true or false

var avl=mobiles.some(product=>product[3]<=10000)
console.log(avl);