function htmlEncode(str) {
	 var s = "";
	 if (str.length == 0) return "";
	 s = str.replace(/&/g, "&amp;");
	 s = s.replace(/</g, "&lt;");
	 s = s.replace(/>/g, "&gt;");  
	 s = s.replace(/\'/g, "&#39;");
	 s = s.replace(/\"/g, "&quot;");
	 return s;
}

function htmlDecode(str){   
	var s = "";   
	if (str.length == 0) return "";
	s = str.replace(/&amp;/g, "&");
	s = s.replace(/&lt;/g, "<");
	s = s.replace(/&gt;/g, ">"); 
	s = s.replace(/&#39;/g, "\'");   
	s = s.replace(/&quot;/g, "\""); 
	return s;   
}

/**
* 时间对象的格式化;
*/
Date.prototype.format = function(format){
 /*
  * eg:format="YYYY-MM-dd hh:mm:ss";
  */
 var o = {
	"M+" :  this.getMonth()+1,  //month
	"d+" :  this.getDate(),     //day
	"h+" :  this.getHours(),    //hour
    "m+" :  this.getMinutes(),  //minute
    "s+" :  this.getSeconds(), //second
    "q+" :  Math.floor((this.getMonth()+3)/3),  //quarter
    "S"  :  this.getMilliseconds() //millisecond
   }
  
   if(/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
   }
 
   for(var k in o) {
    if(new RegExp("("+ k +")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
    }
   }
 return format;
}

 