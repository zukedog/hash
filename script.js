function doclick() {
    location.hash = 2;
}

window.onhashchange = function() {  
 	hashChange();
};

function hashChange(){
	hash = myLibrary.joinArray(location.hash.split("#"));
	if(hash==""){
		hash="index";
	}
	hash += ".html";
	console.log("Filename = "+hash);
	getBodyHTML(hash);
}
hashChange();

function getBodyHTML(file){
	$.ajax({
		url: file, dataType:"text", async: false, 
		success: function(result){
			$("body").html(result.split("<body>")[1].split("</body>")[0]);
		}
	});
}