var user={
    accnt_n0:1002,
    email:"ac@gmail.com",
    name:"ac",
    ac_type:"savings",
    balance:1000,
    password:"ac@123"
}
// localStorage.setItem(key,value)
// localStorage.setItem(user.accnt_n0,JSON.stringify(user))

// var userdata=JSON.parse(localStorage.getItem(1000))
// console.log(userdata.password);


// console.log(1005 in localStorage);

// localStorage.removeItem(1002)

function fundTransfer(acno,amount){
    let data=JSON.parse(localStorage.getItem(acno))
    let newBalance=data.balance+amount
    data.balance=newBalance
    localStorage.setItem(data.accnt_n0,JSON.stringify(data))
}
// fundTransfer(1000,3000)

function authenticateUser(acno,pswrd){
    if (acno in localStorage){
        let data=JSON.parse(localStorage.getItem(acno))
        if(data.password==pswrd){
            console.log("Access Granted");
        }
        else{
            console.log("Invalid Password");
        }
    }
    else{
        console.log("Invalid User");
    }

}
authenticateUser(1000,"abc@123")