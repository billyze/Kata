//https://www.codewars.com/kata/5a941f3a4a6b34edf900006f/train/javascript

function solve(arr) {
    //..
  let sum = 0;
  arr.sort(function(a, b){return a - b});
  if(arr[0] > 1) return 1
  sum = arr[0]
  for(let x = 1; x < arr.length; x++)
    {
      if(sum + 1 < arr[x])
        return sum + 1
      else
        sum += arr[x]
    }
  return sum+1
}