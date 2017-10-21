/*******************************************
 * 游戏实体类，使用es6
 ******************************************/
"use script"
/*
 * 基础属性类类
 * 被从者和怪物继承
 */
class Character{
	constructor() {  
        this.BasicMaxHP;//基础生命总量
        this.BasicMaxMP;//基础法力总量
        this.CurrentHP;//当前血量
        this.CurrentMP;//当前蓝量
        this.StrikingDistance;//攻击距离
        this.AttackSpeed;//攻击速度
        this.PhysicalDefence;//基础物理防御
        this.MagicalDefence;//基础魔法防御
        this.Dodge;//闪避   
        this.BasicResistance;//基础抗性
        this.BasicSpeed;//移动速度
        this.Fortune;//幸运
        this.BasicHealthRegen;//基础生命恢复
        this.BasicManaRegen;//基础法力恢复
        this.CriticalRating;//暴击率
        this.CriticalMultiplier;//暴击倍率
        this.StatusArray;//状态数组
   		
   } 
   //设置属性
   SetValue(parameter,value)
   {
	   	for(var p in parameter)
	   	{
	   		if(p==parameter)
	   		{
	   			this[p]=value;
	   		}
	   	}
   }
   //获取属性
   GetValue(parameter)
   {
	   	for(var p in parameter)
	   	{
	   		if(p==parameter)
	   		{
	   			return this[p];
	   		}
	   	}
   }
   
}
/*
 * 从者类
 */
class Servant extends Character{
	constructor() {
		super();
		this.Name;
        this.Class;
	}
}
/*
 * 怪物类
 */
class Enemy extends Character{
	constructor() {
		super();
		this.Name;
        this.Type;
	}
}
