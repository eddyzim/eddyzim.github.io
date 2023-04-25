
    // here calculation is happening USA Dollar is dominat Currency  // 
	function Currency(){
		y = document.getElementById("converterGBP").value;
		return y;
	}
// thisis where the calculation is happening each valeu has setted formula whow to claclutate and outcome is diplayed in main HTML page //	
	function Calculate(){
		y = Currency();
		
		x = document.getElementById("valueGBP").value;
		
		if(x == ""){
			parseFloat(document.getElementById("valueGBP2").value).toFixed(2) = "";
		}else{
			switch(y){
				case "PLN":
					document.getElementById("valueGBP2").value = parseFloat(x * 0.19).toFixed(2)
				break;
				
				case "BYN":
					document.getElementById("valueGBP2").value = parseFloat(x * 0.32).toFixed(2)
				break;
				
				case "EUR":
					document.getElementById("valueGBP2").value = parseFloat(x * 0.89).toFixed(2)
				break;
			}
		}
	}
	