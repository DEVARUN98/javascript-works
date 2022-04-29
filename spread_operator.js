// spread operator- ethra values kodthum work cheyyippikkaam

var math={
    add(...args){
        return args.reduce((n1,n2)=>n1+n2)
    }
}

console.log(math.add(10,20));