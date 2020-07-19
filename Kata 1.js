//https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
var encryptThis = function(text) {
    // Implement me! :)
    let firstLetter = true
    text = text.split('')
    let secondLetter = 0
    let letterStore = ''
    let secondLetterCheck = 1
    for(let i=0;i<text.length;i++)
    {
      if(firstLetter)
      {
        if(text[i+1] !== ' ')
        {
          secondLetter = i+1
        }
        text[i] = text[i].charCodeAt()
        firstLetter = false
        secondLetterCheck = i+1
      }
      else if(text[i] === ' ')
      {
        if(secondLetter === secondLetterCheck)
        {
          letterStore = text[i-1]
          text[i-1] = text[secondLetter]
          text[secondLetter] = letterStore
        }
        firstLetter = true
      }
      else if(i === text.length-1)
      {
        letterStore = text[i]
        text[i] = text[secondLetter]
        text[secondLetter] = letterStore
        firstLetter = true
      }
    }
    return text.join('')
  }