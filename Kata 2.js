//https://www.codewars.com/kata/5946a0a64a2c5b596500019a/train/javascript
function splitAndAdd(arr, n) {
    let arr1 = []
    let arr2 = []
    let result = []
    let offset = 0
    let arrCycle = Math.floor(arr.length/2)
    if(n>=1)
    {
        if(arrCycle != arr.length/2)
        {
          offset = 1
        }
        for(let i = 0; i < arr.length; i++)
        {
          if ( i < arrCycle)
          {
            arr1[i] = arr[i]
          }
          else
          {
            arr2[i-arrCycle] = arr[i]
          }
        }
        for(let i = 0; i < arrCycle+offset; i++)
        {
          if(arr1[i-offset])
          {
            result[i] = arr1[i-offset] + arr2[i]
          }
          else
          {
            result[i] = arr2[i]
          }
        }
        return splitAndAdd(result,n-1)
    }
    return arr
  }
  