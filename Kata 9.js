//https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3/train/javascript

function solve(s){
    let reverse = ""
    let reversecheck = ""
    let normalcheck = ""
   for(let x = s.length-1; x >= 0; x--)
     {
       reverse += s[x]
     }
    if(reverse === s)
      return "OK"
    else
      {
        for(x = 0; x<s.length; x++)
          {
            reversecheck = ""
            normalcheck = ""
            reversecheck = reverse.substring(0,x) + reverse.substring(x+1,s.length)
            for(let y = reversecheck.length-1; y >= 0; y--)
             {
               normalcheck += reversecheck[y]
             }
            if(reversecheck === normalcheck)
              return "remove one"
          }
        return "not possible"
      }
  };