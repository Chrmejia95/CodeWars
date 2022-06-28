//Had to fix the code where it was infinitly looping. Just had to add the counter++ to fix it.

function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }