/**
 * 循环语句
 * 当条件成立时，操作会反复执行
 * 1.循环条件 2.循环操作 3.中断条件
 */
// while循环
/**
 * 先进行判断条件是否成立，如果成立继续执行
 */
// var a = 10;
// while(a < 10){
//     console.log('while循环',a);
//     ++a;
// }

// do...while
/**
 * 先进行一次操作，然后再判断循环条件
 */


// var b = 10;
// do{
//     console.log('do...while循环',b);
//     ++b;
// }while(b < 10)
/**
 * while和do...while
 * do...while不管初始条件是否满足循环条件，始终会执行一次
 * while先判断条件，如果初始条件不满足循环，始终都不会执行
 */

/**
 * for循环 for in、 for of、 for
 * for循环通常用在循环次数已知情况,结构相比于while更清晰
 */
/**
 * break 与 continue
 * continue结束当前循环，进行下一次循环
 * break结束整个循环
 */

// for(var i = 0;i<100;i++){
//     if(i==50){
//         break
//     }
//     if(i%2==0){
//         console.log('这是偶数',i);
//     }else{
//         console.log('这是基数',i);
//     }
// }

/**
 * 对象的概念
 * 一组基本数据类型和对象类型的集合
 * 属性：对象本身就存在的内容
 * 方法：函数，用来修改对象的属性，方法包含，自定义方法和内置方法
 */
var student = {
    name: '张三',
    score: 59,
    number: 0,
    jump(){
        this.number++;
    },
    teacher: {
        name: '李四'
    }
}

// 读取对象的属性
console.log(student.teacher.name);
// 设置对象的属性
student.name = '王五'

/**
 * 数组：一组变量的集合，这组变量只有一个名字，通过下标来区分
 * 数组是对象类型
 * 数组是一个特殊的对象，数组的属性是从0开始的整数
 * 特点：1.长度不限 2.类型不限, 数组可以存储任意类型的数据
 * 数组中的元素：数组名[索引] , 索引从0开始，到数组length-1 , 当索引不存在时，返回undefined
 * 属性：length表述数组的长度
 * 方法：es5（https://wangdoc.com/javascript/stdlib/array.html） es6（https://es6.ruanyifeng.com/#docs/array）
 */
var arr = [1,3,4,5,6,'abc','def',['a','b','c'],[],{},{}];

// 数组赋值/取值
arr[0] = 110;
console.log(arr.length);
// 循环数组
// for(var i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// 向数组添加数据
/**
 * 1.直接使用下标进行添加
 * 2.使用push方法
 */
arr[arr.length] = 119;
arr[arr.length] = 120;
console.log(arr);

arr.push(114);
arr.push(122);
console.log(arr);
// 取值
console.log(arr[7][0]);

/**
 * 函数：通过一个名字封装一块有特定功能的代码块
 * 函数调用
 */

// √ function关键字声明,函数声明
function fn(){
    console.log('这里定义了一个函数');
    console.log('我是附加的内容');
    console.log('定义函数，送可乐一瓶');
}

// 函数表达式
/**
 * 定义一个匿名函数，将匿名函数付给一个变量
 * 匿名函数不能直接定义
 * 
 */
var fn2 = function(){
    console.log('这里定义了一个函数');
    console.log('我是附加的内容');
    console.log('定义函数，送雪碧一瓶');
}

// 函数调用
fn();
fn2();
// fn();

// fn();
