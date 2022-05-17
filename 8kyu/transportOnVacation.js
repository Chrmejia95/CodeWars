function rentalCarCost(d) {
    let costPerDay = 40
    let totalCost = d * costPerDay
    if(d >= 7){
      totalCost -= 50
    }else if(d >= 3){
      totalCost -= 20
    }
     return totalCost
   }