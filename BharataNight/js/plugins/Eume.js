/*******************************************
 * 定义游戏中会用到的枚举对象
 ******************************************/
/*
 * 枚举对象
 */
var Enum = {};

/* 
* 在初始化时为枚举对象添加内容
*/


    if (typeof PlayerAction == "undefined") {
        /*
        * 攻击方式枚举
        */
        var PlayerAction = {};
        PlayerAction.Attack = "Attack";
        PlayerAction.JobAbility = "job ability";
        PlayerAction.CharacterAbility = "character ability";
        PlayerAction.NoblePhantasm = "noble phantasm";
        Enum.PlayerAction = PlayerAction;
        
    }


    if (typeof keyCodeNum == "undefined") {
        /*
        * 按键枚举
        */
        var keyCodeNum = {};
        keyCodeNum.q = 81;
        keyCodeNum.w = 87;
        keyCodeNum.e = 69;
        keyCodeNum.r = 82;
        Enum.KeyCodeNum = keyCodeNum;
    }


    if (typeof direction == "undefined") {
        /*
        * 方向枚举
        */
        var direction = {};
        direction.Forward = 8;
        direction.Down = 2;
        direction.Right = 6;
        direction.Left = 4;
        Enum.Direction = direction;
    }

