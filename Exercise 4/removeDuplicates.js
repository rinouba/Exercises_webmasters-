const removeDuplicates = (arr) => { 
  let uinqueNumbers = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
  return uinqueNumbers
 }

module.exports = removeDuplicates