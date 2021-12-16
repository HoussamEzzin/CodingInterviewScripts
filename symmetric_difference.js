function flatArray(array){
  let result = []
  for(a in array){
    for(i in a){
      result.push(parseInt(a))
    }
  }
  return result
}

function checkForOcc(element,index,arr){
  return element === arr[index]
}

function sym(...args) {
    /*
    const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(array1.reduce(reducer));

    */
    let all = []
    for(i in args){
      all.push(args[i])
    }
    console.log(all);
    all = flatArray(all);
    let l = []
    for(elem in all){
      // console.log(elem)
      if(checkForOcc(all[elem],elem,all)){
        l.push(parseInt(elem));
      }
    }
    return l;
    
  }

console.log("Result 1 :", sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))
console.log("Result 2 : ",sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) )
console.log("Result 3 :",sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))

  /*
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.
// tests completed

  */

console.log("Result : ",sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))  