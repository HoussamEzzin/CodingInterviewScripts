function sym(...args) {


    for(let i = 0; i< Math.max(args[0].length, args[1].length);i++){
        console.log("gg",i);
        if(args[1].includes(args[0][i])){
            args[1].splice(args[1].indexOf(args[0][i]),1);
        }else{
            args[1].push(args[0][i])
            args[0].splice(i,1)
        }
    }

    
    uniq = [...new Set(args[1].reverse())];
    console.log("resultddd : ", uniq);
    return uniq;
  }
  sym([1, 2, 3], [5, 2, 1, 4])