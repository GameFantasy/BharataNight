/*******************************************
 * 封装所有控制，包括以后的虚拟摇杆和虚拟按键
 ******************************************/
"use strict"
//键盘事件-攻击操作模块
//onkeydown = function (e) {
//  if (e.keyCode == Enum.KeyCodeNum.q) {
//      //点击q建执行操作
//      //console.log(Enum.PlayerAction.Attack);
//      DefaultAttack(Enum.PlayerAction.Attack);
//  }
//  else if (e.keyCode == Enum.KeyCodeNum.w) {
//      //点击w建执行操作
//      //console.log(Enum.PlayerAction.JobAbility);
//      DefaultAttack(Enum.PlayerAction.JobAbility);
//  }
//  else if (e.keyCode == Enum.KeyCodeNum.e) {
//      //点击e建执行操作
//      //console.log(Enum.PlayerAction.CharacterAbility);
//      DefaultAttack(Enum.PlayerAction.CharacterAbility);
//  }
//  else if (e.keyCode == Enum.KeyCodeNum.r){
//      //点击r建执行操作
//      //console.log(Enum.PlayerAction.NoblePhantasm);
//      DefaultAttack(Enum.PlayerAction.NoblePhantasm);
//  }
//}
//键盘事件-计时器模块
var isRegenAvailable = true;

onkeydown = function (e) {
 if (e.keyCode == 81) {
     //insightBuff();
     if (isRegenAvailable == true)
         regenBuff();
     else
         console.log("regeneration is cooling down");
 }
 else if (e.keyCode == 87) {
    status2();
 }
 else if (e.keyCode == 69) {
     status3(f);
 }

}