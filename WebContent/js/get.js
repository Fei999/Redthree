get();
/*
 * 分牌逻辑，使用随机生成的数组来分牌
 */
function get(){
	var all = ["红桃A","红桃2","红桃3","红桃4","红桃5","红桃7","红桃8","红桃9","红桃10","红桃J","红桃Q","红桃K",
		       "方块A","方块2","方块3","方块4","方块5","方块7","方块8","方块9","方块10","方块J","方块Q","方块K",
		       "梅花A","梅花2","梅花3","梅花4","梅花5","梅花7","梅花8","梅花9","梅花10","梅花J","梅花Q","梅花K",
		       "黑桃A","黑桃2","黑桃3","黑桃4","黑桃5","黑桃7","黑桃8","黑桃9","黑桃10","黑桃J","黑桃Q","黑桃K","大王","小王"];
	var index = rndFn(0,49,50);
	var list  = [];
	var list1 = new Array();
	var list2 = [];
	var list3 = [];
	var list4 = [];
	var list5 = [];
	for(var i = 0; i<index.length; i++){
		list[i] = all[index[i]];
	}
	for(var i = 0; i<10; i++){
		list1.push(list[i]);
	}
	for(var i = 10; i<20; i++){
		list2.push(list[i]);
	}
	for(var i = 20; i<30; i++){
		list3.push(list[i]);
	}
	for(var i = 30; i<40; i++){
		list4.push(list[i]);
	}
	for(var i = 40; i<50; i++){
		list5.push(list[i]);
	}
//	console.log(list1);
//	console.log(list2);
//	console.log(list3);
//	console.log(list4);
//	console.log(list5);
	$("#div1").html(list1);
	$("#div2").html(list2);
	$("#div3").html(list3);
	$("#div4").html(list4);
	$("#div5").html(list5);
}

function rndFn(min,max,n){
    // 将整数取值范围作为变量提取出来
    var min = min,
        max = max;

    // 健壮性:参数校验

    // 准备一个容器
    var arr = [];
    // 循环
    for(var i = 0 ; i < n ; i++){
        // 创建一个随机数
        var rnd = GetRandomNum(min,max);
        // 检查是否重复
        if(checkInArr(arr, rnd)){
            i--;
        }else{
            arr.push(rnd);
        }
    }
    return arr;
    
}

// 获取某个范围的随机数
function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}
// 检查数组内是否重复
function checkInArr(arr,rnd){
    // if(var rnd in arr){
    //     return true;
    // }else {
    //     return false;
    // }
    for(var i = 0; i < arr.length; i++){
        if(rnd === arr[i]){
            return true;
        }
    }
    return false;
}

