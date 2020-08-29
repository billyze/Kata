//https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

function ipsBetween(start, end){
    start = start.split('.')
    end = end.split('.')
    let sum = 0
    for(let x = 0; x < end.length; x++)
      {
        sum = sum + (end[x] - start[x])*Math.pow(256,3-x)
      }
    return sum
  }