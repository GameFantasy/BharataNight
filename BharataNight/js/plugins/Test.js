/*******************************************
 * 将所有测试输出集中到该脚本
 ******************************************/

function setStatus(obj,status,time)
{
	status.setAttrbute(obj);
	var t=setTimeout(status.removeAttrbute(obj),time)
}

function status1()
{
	console.log("状态1开始，持续5秒");
	setTimeout("console.log('状态1结束')",5000);
}

function status2()
{
	console.log("状态2开始，，每秒输出一次，持续10秒");
	var s="持续";
	for(var i=0;i<10;i++)
	{	if(i==9)
		{
			s="结束";
		}
		setTimeout("console.log('状态2"+s+"')",1000*(i+1));
	}
	
}
function status3(f)
{
	
	setTimeout(function(){console.log("状态三开始")},3000);
	setTimeout(function(){console.log("状态三结束")},6000);
}
function f(str)
{
	console.log(str);
}
