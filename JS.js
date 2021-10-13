//BRENDAN LI | NUID: 001386816
//CS 1800 FINAL PROJECT
//JAVASCRIPT FOR NUMBER REPRESENTATION PAGE

// CREATING GLOBAL VARIABLES
let input1 = document.getElementById("input1"),
    input2 = document.getElementById("input2"),
    input3 = document.getElementById("input3"),
    input4 = document.getElementById("input4"),
    inputT = document.getElementById("inputT"),
    inputD = document.getElementById("inputD");


// FOR CONVERTING FROM DECIMAL
function deciToAll() {
    // SET INPUT VARIABLES
    let valInput1 = parseInt(input1.value, 10),
        valInput2 = parseInt(input2.value, 2),
        valInput3 = parseInt(input3.value, 8),
        valInput4 = parseInt(input4.value, 16);
                
        //CHECK IF IT IS A VALID DEC        
        check = isDec(input1.value);
                
        //IF IT IS INVALID, GIVE AN ALERT
        if (!check){
                alert("You Entered an Invalid Decimal Number!");
        }
        //CONVERT THE INPUT FOR OTHER REPRESENTATIONS        
        input2.value = valInput1.toString(2).toUpperCase();
        input3.value = valInput1.toString(8).toUpperCase();
        input4.value = valInput1.toString(16).toUpperCase();
}

//CONVERTING FROM OCTAL
function octToAll() {
    // MAKE VARIABLES FOR INPUTS
    let valInput1 = parseInt(input1.value, 10),
        valInput2 = parseInt(input2.value, 2),
        valInput3 = parseInt(input3.value, 8),
        valInput4 = parseInt(input4.value, 16);
        
        //CHECK IF IT IS VALID
        check = isOct(input3.value);
                
        //IF IT IS INVALID, GIVE AN ALERT
        if (!check) {
                alert("You Entered an Invalid Octal Number!");
        }
        
        //CONVERT THE INPUT FOR OTHER REPRESENTATIONS   
        input1.value = valInput3.toString(10).toUpperCase();
        input2.value = valInput3.toString(2).toUpperCase();
        input4.value = valInput3.toString(16).toUpperCase();

}

//CONVERTING FROM HEX
function hexaToAll() {
    // MAKE VARIABLES FOR INPUTS
    let valInput1 = parseInt(input1.value, 10),
        valInput2 = parseInt(input2.value, 2),
        valInput3 = parseInt(input3.value, 8),
        valInput4 = parseInt(input4.value, 16);
                
        //CHECK IF IT IS A VALID HEX     
        check=isHex(input4.value);
                
        //IF IT IS INVALID, GIVE AN ALERT
        if (!check) {
                alert("You Entered an Invalid Hex Number!");
        }

        //CONVERT TO OTHER REPRESENTATIONS
        input1.value = valInput4.toString(10).toUpperCase();
        input2.value = valInput4.toString(2).toUpperCase();
        input3.value = valInput4.toString(8).toUpperCase();

}


//IF DECIMAL IS INPUT, CONVERT
input1.addEventListener("change", function () {
    deciToAll();
});

// IF A BINARY IS ENTERED, CONVERT THE REST
input2.addEventListener("change", function () {
    // MAKE INPUT VARIABLES
    let valInput1 = parseInt(input1.value, 10),
        valInput2 = parseInt(input2.value, 2),
        valInput3 = parseInt(input3.value, 8),
        valInput4 = parseInt(input4.value, 16);

        //CHECK IF IT A VALID BINARY
        check=isBin(input2.value);
                        
        //IF IT IS INVALID, ALERT
        if (!check) {
               alert("You Entered an Invalid Binary Number!");
        }
        
        //CONVERT VALUE
        input3.value = valInput2.toString(8).toUpperCase();
        input1.value = valInput2.toString(10).toUpperCase();
        input4.value = valInput2.toString(16).toUpperCase();

});

//  IF AN OCTAL IS ENTERED, CONVERT THE REST
input3.addEventListener("change", function () {
    octToAll();
});

// IF A HEX IS ENTERED, CONVERT THE REST
input4.addEventListener("change", function () {
    hexaToAll();
});
        
//TEST IF IT IS A VALID HEX 
function isHex(string)
{
        for (i=0; i<string.length; i++)
        {
              if (isNaN(parseInt(string.charAt(i), 16)))
                {return false;}
        }
        return true;
}

//TEST IF IT IS A VALID OCTAL   
function isOct(string) {
        for (i=0; i<string.length; i++)
        {
              if (isNaN(parseInt(string.charAt(i), 8)))
                {return false;}
        }
        return true;          
}

//TEST IF IT IS A VALID BINARY
function isBin(string) {
        for (i=0; i<string.length; i++)
        {
              if (isNaN(parseInt(string.charAt(i), 2)))
                {return false;}
        }
        return true;	
}

//TEST IF VALID DECIMAL
function isDec(string) {
          for (i=0; i<string.length; i++)
          {
                if (isNaN(parseInt(string.charAt(i), 10)))
                  {return false;}
          }
          return true;	
}





