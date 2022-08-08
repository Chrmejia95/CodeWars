function getSize(width, height, depth){
    let newArr = []
    let area = 2*((depth*width)+(depth*height)+(width*height))
    let volume =  width * height * depth
    newArr.push(area)
    newArr.push(volume)
    return newArr
  }