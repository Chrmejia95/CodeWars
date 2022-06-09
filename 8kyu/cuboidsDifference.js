function findDifference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current)  -  b.reduce((previous, current) => previous * current))
   }