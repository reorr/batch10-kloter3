function randomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function checkArray(randStrings, newString) {
  const isInArray = randStrings.includes(newString);
  if (isInArray) {
    var otherString = randomString(32);
    return checkArray(randStrings, otherString);
  } else {
    return newString;
  }
}

function randomArray(total) {
  var randStrings = [];
  for (var i=0; i<total; i++) {
    var newString = randomString(32);
    checkArray(randStrings, newString);
    randStrings.push(newString);
    console.log(newString);
  }
  return randStrings;
}

console.log(randomArray(5));