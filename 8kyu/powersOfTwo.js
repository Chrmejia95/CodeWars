function powersOfTwo(n){
    let newArr = []
    for(let i = 0; i <= n; i++){
      newArr.push(2**i)
    }
    return newArr
  }