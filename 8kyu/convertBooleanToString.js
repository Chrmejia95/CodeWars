function boolToWord( bool ){
    let check = bool.toString()
    if(check == 'true'){
      return 'Yes'
    }else if(check == 'false') {
      return 'No'
    }
  }