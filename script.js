//Messages object with arrays of the different message parts

const loveMess = {
    beginning : ['I like', 'I love', 'I adore', 'I kiss', 'I touch'],
    middle : ['your eyes', 'your face', 'your hands', 'your ears', 'your carpet'],
    end : ['they glide', 'they sparkle', 'they shine', 'they glow', 'they wilt'],
    metaphor : ['like stars', 'like the sun', 'like diamonds', 'like flowers', 'like chocolates']
      
    };
    
    // random index generator function
    
    const randomNum = () => {
      return Math.floor(Math.random() * 4);
    }
    
    // funtion to print random parts of the message arrays
    
    const printMessages = () => {
      console.log(loveMess.beginning[randomNum(loveMess.beginning.length)], loveMess.middle[randomNum(loveMess.middle.length)], loveMess.end[randomNum(loveMess.beginning.length)], loveMess.metaphor[randomNum(loveMess.metaphor.length)]);
    }
    
    printMessages();