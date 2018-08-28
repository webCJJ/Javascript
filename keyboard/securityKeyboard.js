// var xhr;
if (window.XMLHttpRequest) {
    var xhr=new XMLHttpRequest();//非IE6
}else{
    var xhr=new ActiveXObject("Microsoft.XMLHTTP");//IE6
}
if(xhr != null){
    xhr.open('GET',"securityKeyboard.config.json?t="+ new Date().getTime(),true)
    xhr.send(null);  
    xhr.onreadystatechange=function(){  
        if(xhr.readyState==4&&xhr.status==200){  
            var obj = JSON.parse(xhr.responseText);  
            // for (var name in obj){  
            //     alert(obj[name].key);  
            // }  
            console.log(objs)
        }  
    };  
}