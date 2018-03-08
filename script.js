/*

Made by Josh Sutton (zukedog18@gmail.com) 2018-04-08

Syntax:

hash.set(value); 
changes the loaded body html to the contents betwne the <body></body> tags in "value".html
also changes the # value in the address bar to "value"

Purpose:

to allow the use of multiple body html files within a single html document and allow users to use the back button

Dependancies:

jQuery

*/
var hash = {
	init: function(){	//This function must be run on first load to set the onhashchange to our onChange function
		var hash = this;	//make it easier to reference if main variable name changed
		window.onhashchange = function() {  
 			hash.onChange();
		};
	},
	
	onChange: function(){	//Our on change function
		var curentHash = this.joinArray(location.hash.split("#"));	//Get our current hash
		if(curentHash==""){
			curentHash="index";	//If there is no hash or it is empty use index
		}
		curentHash += ".html";	//add the .html to the end of our function for cleaner hashes
		this.processHTML(curentHash); //run the processHTML function to load the body
	},
	
	set: function(value){	//Our set function just changes our hash to "value"
		location.hash=value;
	},
	
	joinArray: function(arr){	//adds the contents of an array together
		var final ="";	//define our final string
		for(var i=0; i<arr.length; i++){
			final += arr[i];	//add each string in the array to our fianl output
		}
		return final;
	},
	
	processHTML: function(file){	//Load the contents of our "file" <body></body> tags to our pages body
		$.ajax({
			url: file, dataType:"text", async: false, 
			success: function(result){	
				$("body").html(result.split("<body>")[1].split("</body>")[0]);	//if ajax got our file successfully set the body to the contents of the "file" <body></body> tags
			}
		});
	}
};
hash.init();	//initialise our object