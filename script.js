function firstChar(text) {
  // your code here
	 if(str===" " || str===""){
        return "";
    }
    if(str!=""){
        str=str.replace(/\s/g, "");
        return str.charAt(0);
    }
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
