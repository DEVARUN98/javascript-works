// prototypal inheritance

var baleno={
    manufacture:"nexa",
    colors:["red","white","blue"],
    variants:["petrol"],
    price:"7 lakhs",
    breaks:"abs",
    getPrice(){
        return this.price
    },
    getManufacture(){
        return this.manufacture
    }
}

var glanza={
    manufacture:"toyota",
    price:"black"
}

glanza.__proto__=baleno    
// inherit cheyyyaaan vendi aaan    __proto__
console.log(glanza.getManufacture())









var parent={
    mobile(){
        console.log("samsung a6");
    }
}
var child={
    mobile(){
        console.log("iphone 12");
    }
}

child.__proto__=parent
child.mobile()