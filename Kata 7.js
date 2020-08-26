//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

multiplicationTable = function(size) {
    // insert code here
    let ans = []
    for (let x = 0; x < size; x++)
      {
        ans[x] = new Array(size)
        for (let y = 0; y < size; y++)
          {
            ans[x][y] = (y+1) * (x+1)
          }
      }
    return ans
  }
  