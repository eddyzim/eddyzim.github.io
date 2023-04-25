
    // here calculation is happening Pound is dominat Currency // 
	function Currency(){
		y = document.getElementById("converterPLN").value;
		return y;
	}
// thisis where the calculation is happening each valeu has setted formula whow to claclutate and outcome is diplayed in main HTML page //		
	function Calculate(){
		y = Currency();
		
		x = document.getElementById("valuePLN").value;
		
		if(x == ""){
			parseFloat(document.getElementById("valuePLN2").value).toFixed(2) = "";
		}else{
			switch(y){
				case "EUR":
					document.getElementById("valuePLN2").value = parseFloat(x * 4.60).toFixed(2)
				break;
				
				case "BYN":
					document.getElementById("valuePLN2").value = parseFloat(x * 1.65).toFixed(2)
				break;
				
				case "GBP":
					document.getElementById("valuePLN2").value = parseFloat(x * 5.20).toFixed(2)
				break;
			}
		}
	}