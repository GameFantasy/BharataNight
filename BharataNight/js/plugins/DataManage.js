/*******************************************
 * 定义游戏静态数据，如技能，物品等
 ******************************************/

/*
 * 攻击类型，攻击类型包含该类型的范围集合，范围集合里包括多组相对位子格子集合
 */
var AttackTypes={
	
	//普通攻击，针对对象附近一格攻击
	NormalAttack:{
		RangeList:[
			{Direction:Enum.Direction.Forward,PointList:[{x:0, y:-1}]},
			{Direction:Enum.Direction.Down,PointList:[{x:0, y:1}]}, 
			{Direction:Enum.Direction.Left,PointList:[{x:-1, y:0}]}, 
			{Direction:Enum.Direction.Right,PointList:[{x:1, y:0}]}
		]
	}
}
