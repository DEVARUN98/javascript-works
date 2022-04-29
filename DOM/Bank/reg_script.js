class Bank{
    createAccount(){
        let account_number=acno.value
        let email_id=email.value
        let phone=phn.value
        let password=pswd.value
        let user={
            account_number:account_number,
            email:email_id,
            phone:phone,
            password:password,
            balance:2000
        }
        localStorage.setItem(user.account_number,JSON.stringify(user))
        alert("user has been successfully registered")
    }
    validateAccountNumber(acno){
        return acno in localStorage?true:false
    }
    login(){
        let account_number=bnk_acno.value
        let password=bnk_pswd.value
        if(this.validateAccountNumber(account_number)){
            let data=JSON.parse(localStorage.getItem(account_number))
            if(password==data.password){
                alert("Access granted")
                sessionStorage.setItem("user",account_number)
                window.location.href="./userhome.html"
            }
            else{
                alert("Invalid password")
            }
        }
        else{
            alert("Invalid account number")
        }
    }
    logout(){
        console.log("here");
        if("user" in sessionStorage){
            sessionStorage.removeItem("user")
            // window.location.href="./login.html",false
            let link=document.querySelector("#logout")
            link.href="./login.html"
        }
        else{
            alert("You must login first")
        }
    }
    balanceEnquiry(){
        let loggedUserAccntNo=sessionStorage.getItem("user")
        let data=sessionStorage.JSON.parse(localStorage.getItem(loggedUserAccntNo))
        alert(data.balance)
    }
    validatAccountNumbers(to_acno,cto_acno){
        return to_acno==cto_acno?true:false
    }
    getDataFromLocalStorage(acno){
        return JSON.parse(localStorage.getItem(acno))
    }
    fundTransfer(){
        let to_acno=bk_to_acno.value
        let c_toacno=bk_cto_acno.value
        let fund=Number(bk_fund.value)
        if(this.validatAccountNumbers(to_acno,c_toacno)){
            if(this.validateAccountNumber(to_acno)){
                let loggedUserAcno=sessionStorage.getItem("user")
                let loggedUserData=this.getDataFromLocalStorage(loggedUserAcno)
                let cur_balance=loggedUserData.balance
                if (fund>cur_balance){
                    alert("Insufficient Balance")
                }
                else{
                    let payeeNewBalance=cur_balance-fund
                    loggedUserData.balance=payeeNewBalance
                    localStorage.setItem(loggedUserAcno,JSON.stringify(loggedUserData))
                    let receiverData=this.getDataFromLocalStorage(to_acno)
                    let receiverBalance=Number(receiverData.balance)
                    let newBalance=receiverBalance+fund
                    receiverData.balance=newBalance
                    localStorage.setItem(to_acno,JSON.stringify(receiverData))
                    alert("Payment completed successfully")
                }
            }
            else{
                alert("Invalid account number")
            }
        }
        else{
            alert("Account number mismatch")
        }
    }
}
var obj=new Bank()
