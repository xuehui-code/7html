// 关于引用类型注意点
/**
 * 基本数据类型和对象类型
 * 基本数据类型，数据直接存储在栈
 * 对象类型，数据存储在堆，堆的地址存储在栈里面，变量存储的是堆的地址
 * 两个对象存储的是同一个堆的不同栈的引用
 * 浅拷贝：js里面所有对象的赋值操作都是浅拷贝
 * 深拷贝：通过递归循环将对象赋给另一个对象
 */
// var obj1 = {
//     name: '张三',
//     age: 16
// }

// var obj2 = obj1;
// console.log(obj1,obj2);
// obj2.name = '李四';
// obj1.age = 24;
// console.log(obj1,obj2);

/**
 * BOM：浏览器对象模型
 * 1.操作浏览器窗口: window
 * 2.操作HTML元素(标签、属性)：document DOM
 * 3.操作URL（地址栏中访问地址）: location
 * 4.操作访问过的历史记录: history
 */

/**
 * window对象：浏览器窗口，js顶级对象
 * 全局变量，函数都在window对象里面
 * window对象上的方法和部分属性，可以直接使用，无需使用window.来标识
 * 常用的方法：
 * 对话框：alert弹出提示框 prompt弹出输入框 confirm弹出确认框
 * 窗口：open打开新窗口，close关闭窗口，close只能关闭由open打开的窗口
 * 定时器：1.按特定时间来执行特定任务, 隔一段时间执行一次JS代码 2.在特定时间结束后执行一次
 * setInterval 定时器需要手动停止，否则会无限循环,定时器会返回一个id,如果不清除定时器，可能会造成内存泄露
 * setTimeout 只会执行一次，在指定时间结束之后执行
 * 
 * window的成员可以不用带window前缀
 */

var a1 = '测试全局变量';
var a2 = function(){
    console.log('打印全局变量');
}
console.log(window);

// window.confirm('弹出一句话')

// var info = window.open('https://www.jd.com');
// console.log(id);
// window.close(info)

var flag = 0;

function fn(){
    console.log('两秒后执行一次',flag,timer);
    flag++;
}

// var timer = setInterval(fn(),1000); // var timer = setInterval(undefined,1000)
var timer = setInterval(fn,1000)

clearInterval(timer)

var timer2 = setTimeout(function(){
    console.log('三年之期已到，请龙王归位');
},3000)

clearTimeout(timer2)

/**
 * Location
 * http://1.117.166.129:999/
 * 999是端口号
 * https://www.runoob.com/jsref/obj-location.html
 */
console.log(location);
/**
 * 打开一个新页面：
 * 超链接、表单
 * window.open
 * location.assign location.replace location.href = 'xxx'
 */
// location.assign('https://www.baidu.com');
// location.replace('https://www.baidu.com');
// location.href = "https://www.baidu.com";
// 通常用来刷新页面
// location.reload();
/**
 * history对象：保存和操作用户（在浏览器窗口中）访问过的 URL
 * history.length表示存储过的url的数量
 * history.back history.forward history.go
 * 可以使用go实现back和forward方法
 */

