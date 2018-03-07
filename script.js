var times=0;
function doclick() {
    times++;
    location.hash = times;
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



function inArray(par, arr){
	for(var i=0; i<arr.length; i++){
		if (arr[i]==par){
			return true;
		}	
	}
	
	return false;
}


function getBodyHTML(file){
	$.ajax({
			
			url: file, dataType:"text", async: false, 
			success: function(result){

            alert(result);
			
			
			}
		});
}