/*===============================this is Estonia quiz section========================================*/
function check(){
//===================================Variable set up area============================================//     
    var Plquestion1 = document.PlQuiz.Plquestion1.value;
    var Plquestion2 = document.PlQuiz.Plquestion2.value;
    var Plquestion3 = document.PlQuiz.Plquestion3.value;
    var Plquestion4 = document.PlQuiz.Plquestion4.value;
    var Plquestion5 = document.PlQuiz.Plquestion5.value;
    var Plquestion6 = document.PlQuiz.Plquestion6.value;
    var correct = 0;
 //===================================This is setted answers for quiz qestions============================================//      
        if (Plquestion1 == "Warsaw") {
            correct++;
        }
        if (Plquestion2 == "Flour Daugh") {
            correct++;
        }
        if (Plquestion3 == "Europe") {
            correct++;
        }
        if (Plquestion4 == "Latvia") {
            correct++;
        }
        if (Plquestion5 == "Meat") {
            correct++;
        }
        if (Plquestion6 == "White,Red") {
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
/*===============================this is EstA quiz section========================================*/
