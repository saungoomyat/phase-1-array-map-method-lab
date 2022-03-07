const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
  //return tutorials
//}
let returnArr = [];
function titleCased() {
  for( const name of tutorials) {
    let newArr = name.split(' ');
    let sentence = [];
    let string = '';
    for(const words of newArr) {
      let letter = words.charAt(0).toUpperCase() + words.slice(1);
      sentence.push(letter);
      string = sentence.join(' ');
    }
    returnArr.push(string);
    /*console.log(newArr);
    newArr[0] = newArr[0].charAt(0).toUpperCase() + newArr[0].slice(1);
    console.log(newArr);
    newArr = newArr.join(' ');
    console.log(newArr);*/
    //returnArr.push(newArr);
 
    
    
  }
  return returnArr;
}


