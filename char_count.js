var text="hello hai hello hai"
var word_count={}
var words=text.trim(" ")
for(let word of words){
    if(word==" "){

    }
    else{
    if(word in word_count){
        word_count[word]+=1
    }
    else{
        word_count[word]=1
    }
}
}
console.log(word_count);