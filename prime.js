//code for prime number check

let num = 9
for(let i =1;i<num;i++){
    if(i%num==0){
        count++
    }
    if(count==2){
        console.log("Prime Number")
    }else {
        console.log("Not  A Prime Number")
    }
}