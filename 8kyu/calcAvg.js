function find_average(array) {
    let total = 0
    if(array.length === 0){
      return 0
    }else{
    for(let i = 0; i < array.length; i++){
     total += array[i]
    }
    let avg = total / array.length;
    return avg
      }
  }