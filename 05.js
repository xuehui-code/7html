/**
 * 形参实参
 * 形参(形式参数)：函数定义时，设置的用来接收参数的变量，用法和变量一样
 * 实参(实际参数)：函数调用时，需要传给形参（函数内部）的值
 * 调用函数时，实参可以给，也可以不给, 如果不给，形参数默认值为undefined
 */
// function add(a,b){
//     console.log(a,b,a+b);
// }

// add(10,15);

/**
 * 函数返回值：
 * 如果希望函数调用之后返回一个调用结果，可以使用return语句得到一个返回值
 * return 后面可以是常量，表达式，或者函数
 * 返回值类型：所有的基本数据类型，对象类型，函数
 * 默认返回值：undefined
 * 建议：函数始终有一个返回值，并且，无论什么时候，传入相同的值，始终返回相同的返回值
 */
// var test = 0;
// function add(a,b,c){
//     return a+b+c
// }

// ++test;
// var result = add(15,10,test);
// console.log(result);

/**
 * 匿名函数:创建函数没有函数名
 * 1. 使用匿名函数定义函数表达式
 * 2. 自执行函数(IIFE) : 创建函数后立即调用(匿名｜隐式)
 */
var fn = function(){

}

// (function(){
//     console.log('匿名函数1');
// })();
// (function() {
//     console.log('自执行函数');
// })();

// var a = 456;
// console.log(a);

(function(){
    console.log(a);
    var a = 123;
    console.log(a);
}());

// console.log(a);
/**
 * 变量的全局污染
 * 有的变量，只在加载的时候，使用一次
 * 在匿名函数里面定义的变量，无法在外部使用，有效解决了变量的全局污染
 */

/**
 * 变量的作用域
 * 1.全局作用域 在js任意地方都可以调用
 *      定义在函数外部的变量（直接定义在js文件最外层的变量）
 * 2.局部作用域 只在特定的地方才可以调用 function
 *      函数内部是一个局部作用域，在内部定义的变量，无法在外部使用
 *      函数内部存在局部作用域，但是他的变量提升仍然存在，只不过被提升到了函数的最上层
 */
var global_data = 110;
function add(){
    var a = 123;
    var b = 456;
    console.log(window);
}

// console.log(a);

add();

// window对象，表示整个浏览器窗口
console.log(window);

/**
 * 回调函数：
 * 将A函数作为参数传入另一个B函数，在B函数运算结束之后，调用A函数
 */
function aa(bb,cc){
    var result = bb*bb; // 144
    console.log(cc(result));
}

function cc(d){
    console.log('计算的结果是'+d/2);
}

var result = aa(12,cc)