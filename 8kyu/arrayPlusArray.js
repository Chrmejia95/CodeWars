function arrayPlusArray(arr1, arr2) {
    let sumOfArr1 = 0
    let sumOfArr2 = 0
    let totalSum = 0
    for(let i = 0; i < arr1.length; i++){
      sumOfArr1 += arr1[i]
    }
   for(let i = 0; i < arr2.length; i++){
     sumOfArr2 += arr2[i]
   }
   return totalSum = sumOfArr1 + sumOfArr2
 }