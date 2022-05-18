function past(h, m, s){
    let convertH = h * 60 * 60 * 1000
    let convertM = m * 60 * 1000
    let convertS = s * 1000
    return convertH + convertM + convertS
  }