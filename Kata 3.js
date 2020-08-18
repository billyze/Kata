//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

var maxSequence = function(arr){
    let sum = 0;
    let truesum = 0;
    for(let x = 0; x < arr.length; x++)
      {
        if(arr[x] > 0)
          {
            for(let y = x; y < arr.length; y++)
              {
                sum += arr[y]
                if(truesum < sum)
                  {
                    truesum = sum
                  }
              }
            sum = 0
          }
      }
    return truesum
  }