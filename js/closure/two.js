arr = []
for(var i = 1;i <= 5;i++){
    (function(j){
        arr.push(function(){
            console.log(j)
        })
    })(i)
}

for(let i = 0;i < arr.length;i++){
    arr[i]()
}