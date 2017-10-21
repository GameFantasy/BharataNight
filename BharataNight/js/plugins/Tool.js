/*******************************************
 * 集中定义开发过程中的在多个脚本会用到的方法
 ******************************************/

/***********************************
** 通过小数获取百分比
************************************/
function GetValueByPercent_Grasp(value,percent)
{
	//传入参数小于0
	if(percent<0)
	{
		throw new Error("GetValueByPercent_Grasp(value,percent)中percent参数不小于0 ,Error in Tool.js");
		return; 
	}
	return value*percent;
}

/***********************************
** 通过整数获取百分比
************************************/
function GetValueByPercent_Decimals(value,percent)
{
	//传入参数小于0
	if(percent<0)
	{
		throw new Error("GetValueByPercent_Decimals(value,percent)中percent参数不小于0 ,Error in Tool.js" )
		return;
	}
	return value*percent/100;
}

/***********************************
** 获取弧度内攻击范围影响的格子集合（未完善）
** 参数:圆心坐标，方向，弧度，半径
** 该方法未处理特殊角度以及指适用与4方向操作系统
************************************/
function calculateRange(center, direction, arc, radius) {
    //弧度一半
	var halfArc = arc / 2;
    //向上，向下
	if (direction == 8||direction==2) {
        //获取施放坐标
		var iX = center.X;
        var iY=center.Y;
		
        if (direction == 8) {//向上
			//圆心y-（+/-）半径（当攻击共范围大于180时，为+，小于时为-）
            iY += (Math.cos(halfArc) / Math.abs(Math.cos(halfArc))) * radius;
        }
        else {//向下
			//圆心y-（+/-）半径（当攻击共范围大于180时，为+，小于时为-）
            iY -= (Math.cos(halfArc) / Math.abs(Math.cos(halfArc))) * radius;
        }
		//获取左顶点
        var v1X = iX - Math.abs(Math.tan(halfArc) * radius);
        var v1Y = iY;
		//获取右顶点
        var v2X = iX + Math.abs(Math.tan(halfArc) * radius);
        var v2Y = iY;
        
		var i = 0;
        var j = 0;
        var rightCorner = v2X;
        var grid = [v1X, v1Y];
        var rangeList = new Array();
        if (iY > center.Y) {
            while (grid[1] >= center.Y) {
                while (grid[0] <= rightCorner) {
                    rangeList.push(grid);
                    i++;
                    grid[0] = v1X + i;
                }
                j++;
                grid[1] = v1Y - j;
                grid[0] += Math.tan(halfArc);
                rightCorner -= Math.tan(halfArc);
            }
        }
        else {
            while (grid[1] <= center.Y) {
                while (grid[0] <= rightCorner) {
                    rangeList.push(grid);
                    i++;
                    grid[0] = v1X + i;
                }
                j++;
                grid[1] = v1Y + j;
                grid[0] += Math.tan(halfArc);
                rightCorner -= Math.tan(halfArc);
            }
        }
    }
    else if(direction==4||direction==6){
        var iX = center.X;
        var iY = center.Y;
        if (direction == 6) {
            iX += (Math.cos(halfArc) / Math.abs(Math.cos(halfArc))) * radius;
        }
        else {
            iX -= (Math.cos(halfArc) / Math.abs(Math.cos(halfArc))) * radius;
        }
        var v1Y = iY - Math.abs(Math.tan(halfArc) * radius);
        var v1X = iX;
        var v2Y = iY + Math.abs(Math.tan(halfArc) * radius);
        var v2X = iX;
        var i = 0;
        var j = 0;
        var rightCorner = v2Y;
        var grid = [v1X, v1Y];
        var rangeList = new Array();
        if (iX < center.X) {
            while (grid[0] <= center.X) {
                while (grid[1] <= rightCorner) {
                    rangeList.push(grid);
                    i++;
                    grid[1] = v1Y + i;
                }
                j++;
                grid[0] = v1X + j;
                grid[1] += Math.tan(halfArc);
                rightCorner -= Math.tan(halfArc);
            }
        }
        else {
            while (grid[0] >= center.X) {
                while (grid[1] <= rightCorner) {
                    rangeList.push(grid);
                    i++;
                    grid[0] = v1Y + i;
                }
                j++;
                grid[0] = v1X - j;
                grid[1] += Math.tan(halfArc);
                rightCorner -= Math.tan(halfArc);
            }
        }
    }
    return rangeList;
}

/***********************************
 ** 执行攻击的函数，基于格子坐标
 ** 参数为攻击的动作，攻击动作是枚举对象
************************************/
function DefaultAttack(playerAction)
{
	//获取玩家坐标，该参数后期应改为动态
	var playerX = $gamePlayer.x;
	var playerY = $gamePlayer.y;
	
    //获取方向
    var dir=$gamePlayer.direction();
	//获取攻击方式
	var attackType = AttackTypes.NormalAttack;
	//通过攻击方式和朝向获取攻击范围(相对点集合)
	var relativeRange;
	for(var i=0;i<attackType.RangeList.length;i++)
    {
    	if(dir==attackType.RangeList[i].Direction)
    	{
    		relativeRange = attackType.RangeList[i].PointList;
    		break;
    	}
    	
    }
	
	var attackRange=new Array();
    for(var i=0;i<relativeRange.length;i++)
    {
    	//将相对点集合根据施放攻击的点（玩家）转化为绝对坐标加入集合
    	var obj={x:playerX+relativeRange[i].x,y:relativeRange[i].y+playerY};
    	attackRange.push(obj);
    }
    //console.log(attackRange);
	switch(playerAction)
	{
	    case Enum.PlayerAction.Attack:
	  		mapDetection(attackRange);
	        break;
	    case Enum.PlayerAction.CharacterAbility:;
	    	break;
		case Enum.PlayerAction.JobAbility:; 
			break;
		case Enum.PlayerAction.NoblePhantasm:; 
			break;
		default:; 
			break;
		
	}
}

/***********************************
 **通过范围格子集合和怪物事件集合进行处理
************************************/
function rangeDetection(ranges, arrayEnemy) {
   //console.log(ranges);
   //console.log(arrayEnemy);
    for (var i = 0; i < ranges.length;i++){
        for (var j = 0; j < arrayEnemy.length;j++){
        	
       		if(Math.abs(ranges[i].y-arrayEnemy[j]._y)<1 && Math.abs(ranges[i].x-arrayEnemy[j]._x)<1){
       			//对arrayEnemy[j]执行扣血操作，在此处记录被伤害的对象的名称
       			console.log("打中了"+$dataMap.events[arrayEnemy[j].eventId()].name);
       		}
    	}
    }
}

/***********************************
 **解析敌人集合
************************************/
function mapDetection(range){
	
   var arrayEnemy=new Array();
   //循环所有事件，获取描述为enemy的事件，加入集合
   for (var i = 1; i < $dataMap.events.length; i++) {
        if ($dataMap.events[i] != null) {
            if ($dataMap.events[i].note == "enemy") {
                
                arrayEnemy.push($gameMap._events[i]);
               
            }
        }
    }
    rangeDetection(range, arrayEnemy);
}