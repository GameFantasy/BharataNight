/*******************************************
 * 将所有测试输出集中到该脚本
 ******************************************/
var laoQing = new Servant();
//laoQing.BasicMaxHP = 50;
laoQing.SetValue("BasicMaxHP", 50);

function insightBuff() {
    laoQing.SetValue("CriticalRating", 1);
    for (var i = 0; i < 3; i++) {
        setTimeout("console.log('critical rate boosted for " + (3 - i) + " seconds')", 1000 * i);
    }
    setTimeout(laoQing.SetValue('CriticalRating', 0), 3000);
    setTimeout("console.log('laoqing critical rate goes back to "+laoQing.GetValue("CriticalRating")+"')",3000);
}

function regenBuff() {
    isRegenAvailable = false;
    for (var i = 0; i < 3; i++) {
        setTimeout(laoQing.SetValue("BasicMaxHP", laoQing.GetValue("BasicMaxHP")+10), 1000 * i);
        setTimeout("console.log('laoqing vitality is: " + laoQing.GetValue("BasicMaxHP") + "')", 1000 * i);
    }
    setTimeout("console.log('regeneration ended')", 3000);
    setTimeout("isRegenAvailable=true",10000);
}

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


