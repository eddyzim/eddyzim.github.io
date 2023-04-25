/*===============================this is Lithuania quiz section========================================*/
function check(){
//===================================Variable set up area============================================//     
    var LTquestion1 = document.LTQuiz.LTquestion1.value;
    var LTquestion2 = document.LTQuiz.LTquestion2.value;
    var LTquestion3 = document.LTQuiz.LTquestion3.value;
    var LTquestion4 = document.LTQuiz.LTquestion4.value;
    var LTquestion5 = document.LTQuiz.LTquestion5.value;
    var LTquestion6 = document.LTQuiz.LTquestion6.value;
    var correct = 0;
 //===================================This is setted answers for quiz qestions============================================//      
        if (LTquestion1 == "Vilnius") {
            correct++;
        }
        if (LTquestion2 == "Potato") {
            correct++;
        }
        if (LTquestion3 == "Europe") {
            correct++;
        }
        if (LTquestion4 == "Cabage") {
            correct++;
        }
        if (LTquestion5 == "Norway") {
            correct++;
        }
        if (LTquestion6 == "Yellow,Green,Red") {
            correct++;
        }
  //===================================This is Mesage and range variable============================================//          
    var Message = ["Well Done you got all questions correct", "Well done", "Not bad but you can do better", "WoW that's really embarrassing"];

    var range;  //===================================in this section is setted up what mesages will be displayed======================================// 
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

