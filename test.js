


//一，基础功能
//1，查询接口：判断当前客户版本是否支持指定JS接口
	function checkApi(){
		console.log("checkApi");
		TenvideoJSBridge.invoke('checkApi', {"apiList":["getDeviceInfo","actionLogin","harraytest"]}, function(ret){
			alert(ret);
			document.getElementById("apiResult").value = ret;
			//var jret = JSON.parse(ret);
			//alert(JSON.stringify(jret.errCode));
			//alert(ret.errMsg);
			//alert(ret.errCode + ": " + ret.errMsg + ": " + JSON.stringify(ret.result));
		});
	}




