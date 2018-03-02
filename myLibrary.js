// JavaScript Document
var myLibrary = {
	validate: function (value, type){
		switch(type){
			case "string": //
				return;
				
			case "int"://any number without decimal value
				return (value == parseInt(value));
				
			case "float"://any number with or without decimal
				return (value == parseFloat(value));
				
			case "creditCard":
				if(value.length != 16){
					return false;
				}
				
				var cc = value.split("");
				for(var i=0; i<cc.length; i++){
					cc[i]= parseInt(cc[i]);
				}
				
				for(var i=0; i<15; i++){
					if(i%2===0){
						cc[i] *= 2;
					}
				}
				var final = 0;
				for(var i=0; i<cc.length; i++){
					if (cc[i] > 9){
						cc[i] = (cc[i]+"").split("");
						var temp = 0;
						for(var j = 0; j < cc[i].length; j++){
							temp += parseInt(cc[i][j]);
						}
						cc[i]=temp;
					}
					final += cc[i];
				}
				return ((final%10) == 0) ;
				
			case "email":
				
				return false;
				
			default:
				console.log("error");
				return NaN;
		}
	},
	random: function(arr){//Returns a random item from arrray "arr"
		return arr[Math.floor(Math.random()*arr.length)];
	},
	joinArray: function(arr){//adds the contents of an array together
		var final ="";
		for(var i=0; i<arr.length; i++){
			final += arr[i];
		}
		return final;
	},
	removeSpaces: function(str){
		return this.joinArray(str.split(" "));
	},
	round: function(input, decimals){
		return Math.round(input*Math.pow(10,decimals))/Math.pow(10,decimals);
	}
};


//console.log(myLibrary.validate("4239540007839822", "creditCard"));
