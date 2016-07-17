// Return phone number always in (NNN) NNN-NNNN format
// input--> 1234567890 output--> (123) 456-7890
// input--> +123-456-7890 output--> (123) 456-7890
// input--> +0011234567890 output--> (001) 456-7890
function formatPhonenumber(phonenumber){
	var phonenumber_format = "(NNN) NNN-NNNN";
	var i = 0;
	var j = 0;
	var len_template = phonenumber_format.length;
	var out_phonenumber = "";
	while(j < len_template){
		var template_char = phonenumber_format.charAt(j);
		var phonenumber_char = phonenumber.charAt(i);
		if(template_char !== "N"){
			out_phonenumber = out_phonenumber + template_char;
			j++;
		} else if(isInteger(phonenumber_char)) {
			out_phonenumber = out_phonenumber + phonenumber_char;
			i++;
			j++;
		} else {
			i++;
		}
	}

	return out_phonenumber;
}

function isInteger(char){
	var number = parseInt(char);
	if(isNaN(number)){
		return false;
	} else {
		return true;
	}
}
