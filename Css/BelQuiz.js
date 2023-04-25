/*===============================this is Estonia quiz section========================================*/
function check(){
//===================================Variable set up area============================================//     
    var Belquestion1 = document.BelQuiz.Belquestion1.value;
    var Belquestion2 = document.BelQuiz.Belquestion2.value;
    var Belquestion3 = document.BelQuiz.Belquestion3.value;
    var Belquestion4 = document.BelQuiz.Belquestion4.value;
    var Belquestion5 = document.BelQuiz.Belquestion5.value;
    var Belquestion6 = document.BelQuiz.Belquestion6.value;
    var correct = 0;
 //===================================This is setted answers for quiz qestions============================================//      
        if (Belquestion1 == "Alexander Lukashenko") {
            correct++;
        }
        if (Belquestion2 == "Beetroot") {
            correct++;
        }
        if (Belquestion3 == "Europe") {
            correct++;
        }
        if (Belquestion4 == "Estonia") {
            correct++;
        }
        if (Belquestion5 == "Berries") {
            correct++;
        }
        if (Belquestion6 == "Red,Green,White") {
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
