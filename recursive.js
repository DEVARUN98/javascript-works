var pattern="ABABC"
// first recursive character A

var cmt={}
for(let char of pattern){
    if(char in cmt){
        console.log(char,"is first recursive character");
        break;
    }
    else{
        cmt[char]=1
    }
}