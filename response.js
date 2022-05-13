function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    
    if ((input == "hello") || (input=="hi") || (input=="hey")) {
        return "Hello there!";
    } else if ((input == "how are you") || (input=="how is it going?") || (input=="what is your name")) {
        return "My name is Yohan. I am good thank you!";
    } else if ((input == "what software tools were used to build you?") || (input=="how were you made")) {
        return "HTML, CSS, JavaScript and a bit of love <3";
    } else if (input == "tell me a joke")  {
        return "When Will Smith slapped Chris Rock it was a hair raising moment for everyone but his wife";
    } else if ((input == "i don't know") || (input=="you are boring") || (input=="i am confused")) {
        return "Haha take your time xD";
    } else if ((input == "goodbye") || (input=="bye") || (input=="I quit") || (input=="tata") || (input=="adios")) {
        return "Talk to you later!";
    } else if((input=="how old are you?") || (input=="what is your age")){
        return "I was born on 13th May 2022!"
    } else if(input=="funny"){
        return "Why are black men good at basketball? Run shoot steal"
    }
    else if(input=="joke") {
        return "God created war so Americans can learn geography"
    }
    else if(input=="make me laugh"){
        return "Pikachu and Jews have something in common. They were both Ash's"
    }
     else {
        return "Try asking something else!";
    }

    
}
 
 
