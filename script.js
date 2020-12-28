//Messages object with arrays of the different message parts

const messageParts = {
  beginning : ['I like', 'I love', 'I adore', 'I kiss', 'I touch'],
  middle : ['your eyes', 'your face', 'your hands', 'your ears', 'your carpet'],
  end : ['they glide', 'they sparkle', 'they shine', 'they glow', 'they wilt'],
  metaphor : ['like stars', 'like the sun', 'like diamonds', 'like flowers', 'like chocolates']
    
  };
  
  // random index generator function
  
  const randomNum = (num) => {
    return Math.floor(Math.random() * num);
  }
  
  let loveMessage = [];

  

  // funtion to print random parts of the message arrays
  
const pushMessage = () => {
for (part in messageParts) {
  let partIndx = randomNum(messageParts[part].length);
  loveMessage.push(messageParts.beginning[partIndx] + ' ' + messageParts.middle[partIndx] + ' ' + messageParts.end[partIndx] + ' ' + messageParts.metaphor[partIndx]);
}
return loveMessage;
}

pushMessage()

console.log(loveMessage);