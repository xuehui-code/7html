/**
 * javascript数据类型
 * 1. Number 包含整数和浮点数
 * 2. 字符串 用单引号或者双引号包裹，不区分字符和字符串
 * 3. 布尔值 true或者false
 * 4. undefined 表示变量定义未声明，只有一个值undefined，指向内存空间
 * 5. null 只有一个值null。表示不指向内存空间
 * 6. 对象类型 由一组基本类型或者对象类型组成
 * 7. Function类型 函数，代码块
 */

// var num = 18;
// num = 9.99;

// var str = 'this is a string';
// str = 't';
// str = "i";

// var bool = true;
// bool = false;

// var und = undefined;
// var noData;

// var n = null;

// 所有复杂类型，都是对象，比如数组就是对象
// var obj = {};
// var arr = [];
/**
 * 数据类型的检查：
 * 1.基本类型检查 typeof
 * 2.复杂类型检查 instanceof
 */

// console.log(typeof num); // number 不区分浮点数和整数
// console.log(typeof str); // string 不区分字符和字符串
// console.log(typeof bool); // boolean true||false
// console.log(typeof und,typeof n); // undefined object
// console.log(typeof obj,typeof arr); // object object

// console.log(obj instanceof Object);
// console.log(arr instanceof Array);

/**
 * 数据类型转换
 * 变量在重复赋值过程中，因为值类型的不同，导致变量最终类型改变
 * 隐式转换：字符串->数值 数值->字符串 数值 -> boolean ...
 * 3*2 = 6
 * 判断语句，运算语句（+）+可以用来拼接两个字符串，会产生很多隐式转换
 * 显式转换：通过String、Number、Boolean等关键字进行强制转换、parseInt和parseFloat必须以数值开头
 * '123' => 123
 * '123abc' => 123
 */

var num = 9;
// num = String('string');
console.log(num+'a'); // number

num = 'number';
console.log(typeof num); // string

num = false;
console.log(typeof num); // boolean

num = 100 - num; // 隐式转换，在运算过程中，true转换成了1,false转换成了0
var age = 0;
// 1被if转换成了true，0被转换成了false
if(age){
    alert('我出生了')
}
console.log(parseInt('123abc')); // 123
console.log(parseInt('abc123')); // NaN not a number

/**
 * 运算符：
 * 1.赋值运算符 = (+= -= *= /=)
 *  赋值运算通过=实现向变量赋值,将=右边值赋给左边，通过格式为 变量名 = 常量｜变量｜表达式｜函数; 
 *  num = xxx;
 * 2.算术运算符 + - * / %
 *  + 两边都是数值，数值相加，有一个边是字符串，会拼接字符串
 *  -* /都是数学运算
 *  % 取余
 *  自增++自减-- 自身加或者减1，运算完不需要赋值，自身会改变，只能用在数值上
 *  自增符号可以放在变量前面，也可以放在后面，放在前面优先级高，先运算再使用
 * 3.关系运算符 > < >= <= == != === !==
 *  两个值的比较，返回结果为true|false
 * 4.逻辑运算符
 * 条件比较多时，需要将多个条件合并成一个条件，这时需要逻辑运算符，最终结果依然true|false
 *      逻辑与 && 只有两边都为true结果才会是true，
 *      多个&&情况下，从最左边开始，遇到第一个false结束运算，返回false
 * 
 *      逻辑或 || 只要有一个值为true直接返回true
 *      多个||情况下，从最左边开始，遇到第一个true结束运算，返回true
 *      与短路和或短路
 * 
 *      逻辑非， 取反,不会修改原来的值
 * 
 *      运算符优先级: ! > 算术 > 关系 > && > || > 赋值, 通过小括号改变运算顺序
 */

// js运算缺陷，进制问题，如果出现小数循环，乘以一个很大的数，运算结束，再除掉
// var a = 0.1 + 0.2;
// var a = (0.1*1000000 + 0.2*1000000)/1000000;

var b = 1 + 'abc';
// console.log(a);

// 取余
var c = 7%5;
console.log(c);

// ++ -- 
var c = 1;
console.log(++c);
console.log(++c);
console.log(c++);
console.log(c);

// += -= *= /= %=
var a = 12;
a -= 12; // a = a+12;
// a -= 12; // a = a112;
console.log(a);

// 关系运算符
a = 12;
b = '12'
c = 11;
console.log(a > c);
// console.log(a > b);
console.log(a == b); // true ==不会判断数据类型
console.log(a === b); // false 严格等于，先判断数据类型，再判断具体的数值
var d = a == b;
var e = a > c;
a == b&&a>c
// if(d){
//     if(e){

//     }
// }

true || console.log('打印一句话');

console.log(!false);