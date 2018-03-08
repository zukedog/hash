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
		var curentHash = myLibrary.joinArray(location.hash.split("#"));
		if(curentHash==""){
			curentHash="index";
		}
		curentHash += ".html";
		this.processHTML(curentHash);
	},
	
	set: function(value){
		location.hash=value;
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