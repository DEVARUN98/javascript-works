var baleno={
    name:"baleno",
    brand:"nexa",
    price:"8lac",
    variants:["petrol","diesel"],
    colors:["red","greay","white"]
}
console.log(baleno.variants);
console.log(baleno.price);
if("fast_tag" in baleno){
    baleno["fast_tag"]=true
}
else{
    baleno["fast_tag"]=false
}
console.log(baleno);