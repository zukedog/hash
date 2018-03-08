function doclick() {
    location.hash = 2;
}

var hash = {
	init: function(){
		var hash = this;
		window.onhashchange = function() {  
 			hash.onChange();
		};
	},
	
	onChange: function(){
		var curentHash = this.joinArray(location.hash.split("#"));
		if(curentHash==""){
			curentHash="index";
		}
		curentHash += ".html";
		this.processHTML(curentHash);
	},
	
	set: function(value){
		location.hash=value;
	},
	
	joinArray: function(arr){//adds the contents of an array together
		var final ="";
		for(var i=0; i<arr.length; i++){
			final += arr[i];
		}
		return final;
	},
	
	processHTML: function(file){
		$.ajax({
			url: file, dataType:"text", async: false, 
			success: function(result){
				$("body").html(result.split("<body>")[1].split("</body>")[0]);
			}
		});
	}
};
hash.init();