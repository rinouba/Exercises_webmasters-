const ReverseAString = (text1) => { 
  const array = []
  for (let i = 0; i < text1.length; i++) {
    const element = text1[i];
    array.push(element)
    
  }
  const string = array.reverse().toString().replace(/,/g,"")
  return string
 }

 module.exports = ReverseAString