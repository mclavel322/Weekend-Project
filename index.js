let  readlineSync  =  require('readline-sync');
console.log( "*".repeat(20) );
console.log( "Welcome to Hurricane Game" );
console.log( "*".repeat(20) );

let questionOneAnswered = false
while(!questionOneAnswered)
{
  console.log( "Did you check the weather?" );
  let option = readlineSync.question( "Options: yes, no " );
  switch(option.toLowerCase()) {
    case "yes":
      questionOneAnswered = true
      console.log( "Nice! You are informed." );
      break;
    case "no":
      console.log( "You are dead, you should check the weather!" );
      break;
    default: 
      console.log( "Invalid answer." );
  }
}
console.log( "*".repeat(20) );
let questionTwoAnswered = false
let arrOfSupplies = []
while(!questionTwoAnswered)
{
  
  if(arrOfSupplies.length > 0){
    console.log("Did you get another supply fron the list?")
  }else{
    console.log( "What of the following supply did you get?" );
  }
  let supplies = ["water", "batteries", "gas", "candles", "drugs", "canned food", "ice", "flashlight", "end"]
  supplies = supplies.filter( ( el ) => !arrOfSupplies.includes( el ) );

  let option = readlineSync.question( "Options: " + supplies.join(', ') + " ");
  let optionIndex = supplies.indexOf(option.toLowerCase())
  
  if(optionIndex == -1)
  {
    console.log("Invalid supply")
  } else {
    if(supplies[optionIndex] == "end")
    {
      questionTwoAnswered = true
    } else {
      arrOfSupplies.push(supplies[optionIndex])
    }
  }
}

console.log( "*".repeat(20) );
if(arrOfSupplies.length >= 3)
{
  console.log("You have high survival rate!")
}else{
  console.log("You are goingt to die! Go a get some more supplies!")
}
console.log( "*".repeat(20) );
