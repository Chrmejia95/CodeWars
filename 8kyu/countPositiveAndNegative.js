function countPositivesSumNegatives(input) {
    let positiveNum = 0
    let negativeNum = 0
    if( input === null || input === 0){
      return []
    }else{
      input.forEach((num) => num > 0 ? positiveNum++ : negativeNum += num)
       }
  return[positiveNum,negativeNum]
}