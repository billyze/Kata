//https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

function longestRepetition(s) {
    let a = ""
    let letter = ""
    let length = 0;
    let maxlength = 0;
    for(let x = 0; x < s.length; x++)
      {
        if (a !== s[x])
        {
          length = 1
          a = s[x]
         }
        else if(a === s[x])
          { 
            length++
          }
        if(length > maxlength)
          {
            maxlength = length
            letter = a
          }
      }
    return [letter,maxlength];
  }