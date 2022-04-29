var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

// sort employee wrt exp asc 
employees.sort((e1,e2)=>(e1[5]-e1[4])-(e2[5]-e2[4]))
console.log(employees);



// sort developers wrt to salary

// var devlps=employees.filter(emp=>emp[3]=="developer").sort((e1,e2)=>e1[2]-e2[2])
// console.log(devlps);




// print developer names whose exp > 6years

// var dev_name=employees.filter(emp=>emp[3]=="developer" && emp[5]-emp[4]>6).map(e=>e[1])
// console.log(dev_name);



// add bonus of 5000 rs for all developers

var upraise=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2]+5000)
console.log(upraise);

// add bonus of 5000 rs for all developers

var upraised=employees.filter(emp=>emp[3]=="developer").map(emp=>[emp[2]+5000,emp])
console.log(upraised);

// add bouns of 2000 rs for all employees

// var bns=employees.map(employee=>employee[2].replace)
// console.log(bns);


// add incentives of 5000 rs for mrkt team filter




// print all employee names whose name starts with a


// var emp_a=employees.filter((a)=>a[1].startsWith("a"))    
var emp_a=employees.filter((a)=>a[1][0]=="a")

console.log(emp_a);


// print developer names only 
// var dvlpr=employees.filter((n)=>n[3]=="developer")
// console.log(dvlpr);

// // // print highest_salary
// var highest_salary=employees.reduce((p1,p2)=>p1[2]>p2[2]?p1:p2)
// console.log(highest_salary);

// // print name of developer  who is taksing highest salary
var max_dev_salary=employees.filter(emp=>emp[3]=="developer").reduce((e1,e2)=>e1[2]>e2[2]?e1:e2)
console.log(max_dev_salary);


// // print name of highest exp employee
// // print total sum of salary group by developers
var devsum=employees.filter(e=>e[3]=="developer").reduce((e1,e2)=>e1[2]+e2[2])
console.log(devsum);


// // print exp of each employee?
//is ther any employee working as developer

//print details of tom details

var tom_d=employees.filter((n)=>n[1]=="tom")
console.log(tom_d);