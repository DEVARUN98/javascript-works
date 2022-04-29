function displayText(num){
    result.value+=num   
    // result ennullath first row yile id name aaan
}
function clearBox(){
    result.value=""
}

function evaluateExpression(){
    let res=eval(result.value)
    result.value=res
}