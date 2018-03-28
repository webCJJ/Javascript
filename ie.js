function ajax(url,succFun){
	var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
	if(xhr.readystate == 4){
		if(xhr.status == 200){
			succFun(xhr.responseText);
		}
		else{
			if(filedFun)
				filedFun(xhr.status);
		}
	}
}
    xhr.open("post",url,true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencode");
    xhr.send();
}
