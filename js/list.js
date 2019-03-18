function selectList() {
  var Rlist = [
    { lv: "S", value: 451 },
    { lv: "A", value: 1679 },
    { lv: "B", value: 3165 },
    { lv: "C", value: 3109 },
    { lv: "D", value: 1596 }
  ];

  var S = Rlist[0].value;
  var A = S + Rlist[1].value;
  var B = A + Rlist[2].value;
  var C = B + Rlist[3].value;

  var roll = parseInt(Math.random() * 20000);

  if (roll <= S) {
    var rankcss = "s";
    document.getElementById("getS").innerHTML++;
    var list = [
      { name: "SSR：咕噜喵小插图一张（只有第一个截图到群里的生效）" },
      { name: "咕噜喵原声大碟-Ⅱ" },
      { name: "咕噜喵原声大碟-Ⅰ）" },
      { name: "水母喵的小水母毛绒玩具" },
      { name: "doge喵的肉骨头" },
      { name: "zeta喵的甜甜圈" },
      { name: "炸炸喵纸折的角" },
      { name: "梦梦喵的胖次" },
      { name: "miya喵的小翅膀" },
      { name: "蛋蛋喵小太刀" },
      { name: "幻玖喵小云朵毛绒玩具" }
    ];
  } else if (roll <= A && roll > S) {
    var rankcss = "a";
    document.getElementById("getA").innerHTML++;
    var list = [
      { name: "猫茶屋四折优惠券" },
      { name: "猫茶屋免费吃一顿优惠券" },
      { name: "猫茶屋名品抹茶芭菲套餐" },
      { name: "猫茶屋名品抹茶巧克力套餐" },
      { name: "特殊红色战士2次头衔兑换券" },
      { name: "猫茶屋名品抹茶拿铁套餐" },
      { name: "猫茶屋名品三色团子套餐" },
      { name: "猫茶屋名品抹茶冰淇淋套餐" },
      { name: "咕噜喵握手券" },
      { name: "咕噜喵的笔记本" },
      { name: "咕噜游戏-精灵宝可喵-日" },
      { name: "咕噜游戏-精灵宝可喵-月" },
      { name: "咕噜游戏-超级咕噜喵大战" },
      { name: "咕噜游戏-咕噜之魂" },
      { name: "咕噜游戏-怪物猎喵" },
      { name: "咕噜游戏-喵之轨迹" },
      { name: "咕噜游戏-星之咕噜" },
      { name: "水母喵的小水母毛绒玩具" },
      { name: "咕噜喵耳朵发卡＆玩具尾巴（炸炸猫）" },
      { name: "咕噜喵耳朵发卡＆玩具尾巴（小蝶猫）" },
      { name: "咕噜喵耳朵发卡＆玩具尾巴（边域猫）" },
      { name: "咕噜喵耳朵发卡＆玩具尾巴（幻玖猫）" },
      { name: "咕噜喵耳朵发卡＆玩具尾巴（黑桃猫）" },
      { name: "咕噜喵耳朵发卡＆玩具尾巴（水母猫）" },
      { name: "咕噜喵耳朵发卡＆玩具尾巴（doge猫）" },
      { name: "咕噜喵耳朵发卡＆玩具尾巴（zeta猫）" },
      { name: "咕噜喵耳朵发卡＆玩具尾巴（梦梦猫）" },
      { name: "咕噜喵耳朵发卡＆玩具尾巴（miya猫）" },
      { name: "咕噜喵耳朵发卡＆玩具尾巴＆面具（文字猫）" },
      { name: "咕噜喵耳朵发卡＆玩具尾巴＆呆毛（蛋蛋猫）" }
    ];
  } else if (roll <= B && roll > A) {
    var rankcss = "b";
    document.getElementById("getB").innerHTML++;
    var list = [
      { name: "咕噜喵扭蛋-在吃小鱼干的咕噜喵" },
      { name: "咕噜喵扭蛋-在钓鱼的咕噜喵" },
      { name: "咕噜喵扭蛋-趴在笔记本电脑上的咕噜喵" },
      { name: "咕噜喵扭蛋-异色咕噜喵" },
      { name: "咕噜神社的神签" },
      { name: "咕噜神社的护身符" },
      { name: "咕噜神社的御守" },
      { name: "猫茶屋九折优惠券" },
      { name: "猫茶屋八折优惠券" },
      { name: "猫茶屋七折优惠券" },
      { name: "猫茶屋六折优惠券" },
      { name: "猫茶屋五折优惠券" },
      { name: "水母喵的小水母毛绒玩具" },
      { name: "咕噜列车车票" },
      { name: "猫猫布丁-巧克力榛果" },
      { name: "猫猫布丁-原味焦糖" },
      { name: "猫猫布丁-清凉薄荷" },
      { name: "猫猫布丁-草莓奶油" }
    ];
  } else if (roll <= C && roll > B) {
    var rankcss = "c";
    document.getElementById("getC").innerHTML++;
    var list = [
      { name: "咕噜喵扭蛋-在犯困的咕噜喵" },
      { name: "咕噜喵扭蛋-打滚的咕噜喵" },
      { name: "咕噜喵扭蛋-坐下的咕噜喵" },
      { name: "咕噜喵大图鉴" },
      { name: "咕噜喵的携带食料" },
      { name: "咕噜喵的天毛" },
      { name: "咕噜喵的肉球印章" },
      { name: "咕噜喵的白毫" },
      { name: "咕噜喵的毛玉" },
      { name: "咕噜喵肉垫形状靠垫" },
      { name: "咕噜雪花冰" },
      { name: "咕噜快乐水" },
      { name: "黑桃喵的披风" },
      { name: "小蝶喵的帽子" },
      { name: "岱山喵的擀面杖" },
      { name: "咕噜喵耳朵发卡＆玩具尾巴（岱山猫）" },
      { name: "边域喵的扳手" },
      { name: "水母喵的小水母毛绒玩具" },
      { name: "猫猫山谷参观券" },
      { name: "水洗颜料（一次性模仿其他猫）" },
      { name: "咕噜村一日游" },
      { name: "咕噜温泉无料券" },
      { name: "温泉名产水果牛奶兑换券" },
      { name: "温泉名产咖啡牛奶兑换券" },
      { name: "温泉名产巧克力牛奶兑换券" },
      { name: "咕噜温泉蛋" },
      { name: "熟过头了的咕噜温泉蛋" }
    ];
  } else if (roll > C) {
    var rankcss = "d";
    document.getElementById("getD").innerHTML++;
    var list = [
      { name: "吃剩下的鱼骨头（10个）" },
      { name: "咬了一口的曲奇饼干（10个）" },
      { name: "掉头的狗尾巴草（10个）" },
      { name: "吃剩下的猫饼干（10个）" },
      { name: "烤糊的小鱼干（10个）" },
      { name: "味道不可名状的猫罐头（1个）" },
      { name: "猫薄荷（5个）" }
    ];
  }
  
  var s = parseInt(Math.random() * list.length);
  var newPrize=rankcss+':'+ list[s].name +'&#13;&#10;';
  document.getElementById('getlist').insertAdjacentHTML('afterBegin', newPrize);
}
