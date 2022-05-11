function maps(x){
    let test = []
    for(let i = 0; i < x.length; i++){
      let newValue = Number(x[i] * 2)
      test.push(newValue)
    }
    return test
  }