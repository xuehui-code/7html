/**
 * 控制语句：
 * 针对不同的条件，运行不同的内容
 * 1.分支语句 if括号里面可以是布尔值，表达式，变量，函数
 *      if elseif else
 * 2.switch 等值判断
 *      switch(){} 每一个分支结束之后要加上break跳出整个switch,default表示所有条件不满足，运行，放在switch最后
 * 
 * 
 */
// 如果是true则运行大括号里面的内容，如果为其他值，则运行else里面的代码
var a = true;
if(a){
    console.log('结果为true')
}else{
    console.log('结果为false');
}

// var age = 0;

// if(age < 18){
//     console.log('未成年');
// }else if(age>=18&&age<30){
//     console.log('青少年');
// }else if(age >=30&&age<50){
//     console.log('中年');
// }else{
//     console.log('老年人');
// }

var score = 0;
switch(score){
    case 0:
        console.log('不及格');
        break;
    case 1:
        console.log('勉强几个');
        break;
    case 2:
        console.log('及格');
        break;
    default:
        console.log('错误的分数');
}

var input = prompt('请输入工资');
var input2 = Number(prompt('请输入工资'));
// prompt获取到的是字符串，需要用String、Number、Boolean强制转换成需要的数据
console.log(input+100);