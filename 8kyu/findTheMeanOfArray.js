function getAverage(marks){
    let sum = 0
    let total = 0
    for(let i = 0; i < marks.length; i++){
      sum += marks[i]
      total = sum / marks.length
    }
    return Math.floor(total)
  }