//https://www.codewars.com/kata/5a7f58c00025e917f30000f1/train/javascript

function longest(str) {
    // Good luck :)
    let ans = 0;
    let test = 0;
    let length = 0;
    let lengthtest = 1;
    for(let x = 1; x <= str.length; x++)
      {
        if(str[x-1] <= str[x])
          {
            lengthtest++
          }
        else
          {
            if(lengthtest > length)
              {
                length = lengthtest
                ans = test
              }
            test = x
            lengthtest = 1
          }
      }
    return str.substring(ans, ans+length)
  }