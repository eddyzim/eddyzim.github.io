
    // here calculation is happening Pound is dominat Currency // 
	function Currency(){
		y = document.getElementById("converterBYN").value;
		return y;
	}
// thisis where the calculation is happening each valeu has setted formula whow to claclutate and outcome is diplayed in main HTML page //		
	function Calculate(){
		y = Currency();
		
		x = document.getElementById("valueBYN").value;
		
		if(x == ""){
			parseFloat(document.getElementById("valueBYN2").value).toFixed(2) = "";
		}else{
			switch(y){
				case "EUR":
					document.getElementById("valueBYN2").value = parseFloat(x * 2.78).toFixed(2)
				break;
				
				case "GBP":
					document.getElementById("valueBYN2").value = parseFloat(x * 3.14).toFixed(2)
				break;
				
				case "PLN":
					document.getElementById("valueBYN2").value = parseFloat(x * 0.60).toFixed(2)
				break;
			}
		}
	}
	