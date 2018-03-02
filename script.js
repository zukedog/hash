var times=0;
function doclick() {
    times++;
    location.hash = times;
}
window.onhashchange = function() {  
 	temp = myLibrary.joinArray(location.hash.split("#"));
	$("body").load("SubPages/"+temp+".html");
	console.log(temp+".html");

};




function inArray(par, arr){
	for(var i=0; i<arr.length; i++){
		if (arr[i]==par){
			return true;
		}	
	}
	
	return false;
}