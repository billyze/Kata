//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/solutions/javascript/me/best_practice

function cleanString(s) {
    let ans = ""
    for(let x = 0; x < s.length; x++)
      {
        if(s[x] !== "#")
          {
            ans += s[x]
          }
        else
          {
            ans = ans.substring(0, ans.length-1)
          }
      }
    return ans
  };