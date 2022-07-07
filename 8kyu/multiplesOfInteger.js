function findMultiples(integer, limit) {
    const newArr = []
    for(let i = integer; i <= limit; i+=integer){
      newArr.push(i)
    }
    return newArr
  }