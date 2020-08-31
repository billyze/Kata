//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
    //happy coding!
    A = A.sort(function(a,b){return a-b})
    let counter = 0;
    let prev = ""
    for(let x = 0; x < A.length; x++)
      {
        if(prev === A[x])
          {
            counter++
          }
        else
          {
            if(counter%2 === 1)
              return prev
            prev = A[x]
            counter = 1
          }
      }
    return prev;
  }