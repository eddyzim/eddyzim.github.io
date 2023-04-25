/*===============================this is Estonia quiz section========================================*/
function check(){
//===================================Variable set up area============================================//     
    var Estquestion1 = document.EstQuest.Estquestion1.value;
    var Estquestion2 = document.EstQuest.Estquestion2.value;
    var Estquestion3 = document.EstQuest.Estquestion3.value;
    var Estquestion4 = document.EstQuest.Estquestion4.value;
    var Estquestion5 = document.EstQuest.Estquestion5.value;
    var Estquestion6 = document.EstQuest.Estquestion6.value;
    var correct = 0;
 //===================================This is setted answers for quiz qestions============================================//      
        if (Estquestion1 == "Baltic Sea") {
            correct++;
        }
        if (Estquestion2 == "Potato") {
            correct++;
        }
        if (Estquestion3 == "1991") {
            correct++;
        }
        if (Estquestion4 == "Europe") {
            correct++;
        }
        if (Estquestion5 == "I dont know") {
            correct++;
        }
        if (Estquestion6 == "Red") {
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
