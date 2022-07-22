function isPalindrome(line) {
    let reversed = line.split('').reverse().join('')
    if(line == reversed){
      return true 
    }else if(line == reversed.toString){
      return true 
    }else{
      return false 
    }
  }