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

const titleCased = () => {

  const newTut= tutorials.map((student)=>{
    return camelCase(student);
  })
 return newTut;
}


function camelCase(stringX){
  let string=stringX.trimStart();
  let indexArray=[0,];
   let newString=string[0].toUpperCase();
  for (let i=1;i<string.length;i++){
    if(string[i]===" "){
      indexArray.push(i+1);
      newString=newString.concat(string[i],string[i+1].toUpperCase())
      i++;
    }
    else{
      newString=newString.concat(string[i]);
    }
    }

return newString;
}

let test=" implementing blockchain web api";


console.log(camelCase(test));
console.log(titleCased());

