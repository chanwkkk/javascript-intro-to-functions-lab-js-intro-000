function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  var uppercase=string.toUpperCase()
console.log(uppercase)

}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string='I love you, Grandma.'){
    return "I love you, too."
  }else if (string.toUpperCase()===string){
    return "YES INDEED!"
  }else{
    return"I can't hear you！"
  }
}