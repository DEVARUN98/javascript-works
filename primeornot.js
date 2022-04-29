var n=11;
var flag=0;
for (i=2;i<n;i++){
    if (n%i==0){
        flag=1;
        break;
    }
}
console.log(flag==0?"prime":"not prime");