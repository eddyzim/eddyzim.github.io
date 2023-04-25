/*===============================this is Latvian quiz section========================================*/
function check(){
//===================================Variable set up area============================================//     
    var LVquestion1 = document.LVQuiz.LVquestion1.value;
    var LVquestion2 = document.LVQuiz.LVquestion2.value;
    var LVquestion3 = document.LVQuiz.LVquestion3.value;
    var LVquestion4 = document.LVQuiz.LVquestion4.value;
    var LVquestion5 = document.LVQuiz.LVquestion5.value;
    var LVquestion6 = document.LVQuiz.LVquestion6.value;
    var correct = 0;
 //===================================This is setted answers for quiz qestions============================================//      
        if (LVquestion1 == "Riga") {
            correct++;
        }
        if (LVquestion2 == "Potato") {
            correct++;
        }
        if (LVquestion3 == "Europe") {
            correct++;
        }
        if (LVquestion4 == "Meat") {
            correct++;
        }
        if (LVquestion5 == "Germany") {
            correct++;
        }
        if (LVquestion6 == "Red,White,Red") {
            correct++;
        }
  //===================================This is Mesage and range variable============================================//          
    var Message = ["Well Done you got all questions correct", "Well done", "Not bad but you can do better", "WoW that's really embarrassing"];

    var range;              //===================================in this section is setted up what mesages will be displayed======================================// 
        if (correct < 2) {
            range = 3;
        }
    
    if (correct > 1 && correct < 3) {
        range = 2;
    }
    
    if (correct > 2 && correct < 6) {
        range = 1;
    }
    
    if (correct > 5) {
        range = 0;
    }
//===================================in this command line Stlyle css elements will be changed============================================//      
    document.getElementById("after-submit").style.visibility = "visible";
//===================================This is outcome message area what messages will be diplsayed based on Esters score============================================//   
    document.getElementById("Message").innerHTML = Message[range]
    document.getElementById("correct-answers").innerHTML = "You got " + correct + " correct.";
}

