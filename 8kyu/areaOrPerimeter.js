const areaOrPerimeter = function(l , w) {
    let perimeter = l + l + w + w
    let area = l * w
    if(l == w){
      return area
    }else if(l > w || l < w){
      return perimeter
    }
  };