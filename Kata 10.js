//https://www.codewars.com/kata/52b23340c65ea422b1000045/train/javascript

function willFit(present, box){
    present.sort(function(a, b){return a-b});
    box.sort(function(a, b){return a-b});
    if(present[0] >= box[0]-1 || present[1] >= box[1]-1 || present[2] >= box[2]-1)
      {
        return false
      }
    else
      {
        if(present[0] === box[0] && present[1] === box[1] && present[2] === box[2])
          return false
      }
    return true
  }