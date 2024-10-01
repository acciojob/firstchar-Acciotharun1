function firstChar(text) {
  // your code here
	 if(text===" " || text===""){
        return "";
    }
    if(text!=""){
        text=text.replace(/\s/g, "");
        return text.charAt(0);
    }
}


// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
