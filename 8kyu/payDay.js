function bonusTime(salary, bonus) {
  let newSalary = salary * 10
  if(bonus == true){
    return '£'+ newSalary
  }else{
    return '£' + salary
  }
}