    // here calculation is happening Euro is dominat Currency // 
	function Currency(){
		y = document.getElementById("converterEUR").value;
		return y;
	}
// thisis where the calculation is happening each valeu has setted formula whow to claclutate and outcome is diplayed in main HTML page //		
	function Calculate(){
		y = Currency();
		
		x = document.getElementById("valueEUR").value;
		
		if(x == ""){
			parseFloat(document.getElementById("valueEUR2").value).toFixed(2) = "";
		}else{
			switch(y){
				case "PLN":
					document.getElementById("valueEUR2").value = parseFloat(x * 0.22).toFixed(2)
				break;
				
				case "BYN":
					document.getElementById("valueEUR2").value = parseFloat(x * 0.36).toFixed(2)
				break;
				
				case "GBP":
					document.getElementById("valueEUR2").value = parseFloat(x * 1.13).toFixed(2)
				break;
			}
		}
	}
	