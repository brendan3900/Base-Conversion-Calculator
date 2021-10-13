//BRENDAN LI | NUID: 001386816
//CS 1800 FINAL PROJECT
//JAVASCRIPT FOR NUMBER REPRESENTATION PAGE
		
		
// CREATE SOME GLOBAL VARIABLES
let inputT = document.getElementById("inputT"),
	inputD = document.getElementById("inputD");


//IF A TWO'S COMPLEMENT IS ENTERED , CONVERT TO DECIMAL      
inputT.addEventListener("change", function () {
	// MAKE SOME INPUT VARIALBES
	let valInputT = parseInt(inputT.value, 2),
		valInputD = parseInt(inputD.value, 10);
	
	//MAKE TEMP VAR
	var temp=inputT.value;
	//CHECK IF IT IS A VALID NUMBER
	check = isBin(inputT.value);
	//IF INVALID, GIVE ALERT
	if (!check) {
		alert("You Entered an Invalid Binary Number!");
		inputD.value = "NAN";
	}//ELSE, CONVERT
	else{
		//IF LENGTH ISN'T 8-BITS, GIVE ERROR
		if (temp.length!=8) {
			alert("Please Input an 8-bit representation!");
			inputD.value = 0;
		}
		else{//ELSE
			//IF MOST SIGNIFICANT BIT IS 0, POSITIVE
			if (temp.charAt(0)==0) {
				inputD.value = valInputT.toString(10).toUpperCase();
			}
			else{
				//IF THE MOST SIGNIFICANT BIT IS 1, NEGATIVE
				//FLIP BITS
				flipped = flipBits(temp);
				//ADD 1 TO BINARY
				n = binaryAddition(flipped, "1");
				//CONVERT TO INT
				t = parseInt(n,2);
				//DISPLAY CORRECT BINARY
				inputD.value = "-" + t.toString(10).toUpperCase();
			}
		}
	}
	
});
                

//IF A DECIMAL NUMBER IS ENTERED, CONVERT TO TWO'S COMPLEMENT   
inputD.addEventListener("change", function () {
	// MAKE SOME INPUT VARIABLES
	let valInputT = parseInt(inputT.value, 2),
		valInputD = parseInt(inputD.value, 10);
		
		//IF IT IS IN VALID RANGE OF DECIMALS FOR 8 BITS
		if (valInputD > 127 || valInputD < -128) {
				alert("The number you entered cannot be represented by 8-bits!");
				inputT.value = "NAN";
		}
		else{
			//ELSE, CONVERT
			//IF GREATER THAN OR EQUAL TO 0
			if (valInputD>=0) {
				//CONVERT TO BINARY AND MAKE IT 8 BITS
					hold = valInputD.toString(2).toUpperCase();
					while(hold.length < 8) {
							hold = "0" + hold;
					}
					inputT.value = hold;
			}
			else {
				//IF IT IS NEGATIVE, MAKE IT BINARY, 8 BITS
					temp = valInputD.toString(2).toUpperCase();
					while(temp.length <= 8) {
							temp = "0" + temp;
					}
					//FLIP THE BITS AND ADD 1 TO OUTPUT
					flip = flipBits(temp);
					inputT.value = binaryAddition(flip, "1");
			}
		}
});
        
//FOR BINARY ADDITION
function binaryAddition(a,b){
	var result = "",
		carry = 0;
  
	while(a || b || carry){
	  let sum = +a.slice(-1) + +b.slice(-1) + carry; // get last digit from each number and sum 
  
	  if( sum > 1 ){  
		result = sum%2 + result;
		carry = 1;
	  }
	  else{
		result = sum + result;
		carry = 0;
	  }
	  
	  // trim last digit (110 -> 11)
	  a = a.slice(0, -1)
	  b = b.slice(0, -1)
	}
	return result;
}

//TESTING IF IT IS A VALID BINARY
function isBin(string) {
	for (i=0; i<string.length; i++)
	{
	  if (isNaN(parseInt(string.charAt(i), 2)))
		{return false;}
	}
	return true;	
}

//FOR FLIPPING THE BINARY BITS
function flipBits(bits) {
	//MAKE A FLIPPED STRING
	let flipped = "";
	let characters = bits.split("");
	//FOR EACH BITS IN BINARY
	for(let i = 0; i < characters.length; i++) {
		//MAKE 1 IF 0
		if(characters[i] === "0") {
			flipped += "1";
		}
		else if(characters[i] === "1") {
			//MAKE 0 IF 1
			flipped += "0";
		}
	}
	//RETURN FLIPPED BITS STRING
	return flipped;
}
        
        
        
