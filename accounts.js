var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]


//   transaction of 100rs

// var amount_transaction=accounts.map(data=>data.transactions).flat().filter(trans=>trans.amount=100)
// console.log(amount_transaction);



// print transactions of account number 1000

// var accnt_num=accounts.find(ac_no=>ac_no.acno==1000).transactions
// console.log(accnt_num);



// print transactions of account number 1000 and transaction above 500
// var trans_500=accounts.find(acc=>acc.acno==1000).transactions.filter(t=>t.amount>500)
// console.log(trans_500);



// sum of amount transactions done by phonepe

// var sum_phonepe=accounts.map(data=>data.transactions).flat().filter(mthd=>mthd.method=="phone-pay").
// map(t=>t.amount).reduce((amt1,amt2)=>amt1+amt2)
// console.log(sum_phonepe);



// // details of savings account

// var saving=accounts.filter(sav=>sav.ac_type=="savings")
// console.log(saving);



// 1002 credit transactions

// var credit_1002=accounts.map(dat=>dat.transactions).flat().filter(acc=>acc.to==1002)
// console.log(credit_1002);
//  OR
var credit_1002=accounts.map(dat=>dat.transactions).flat().filter(acc=>acc.to==1002).forEach(t=>console.log(t))