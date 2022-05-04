function bmi(weight, height) {
    let calculatedNumber = weight / height **2
    if(calculatedNumber <= 18.5){
      return 'Underweight'
    }else if(calculatedNumber <= 25.0){
      return 'Normal'
    }else if(calculatedNumber <= 30.0){
      return 'Overweight'
    }else if(calculatedNumber > 30){
      return 'Obese'
    }
  }

