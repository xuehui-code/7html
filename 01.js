// 面向对象编程
/**
 * 对象： 生活中的具体，具备特征与行为的实例
		属性：静态特征
		方法：动态行为
    内置对象：javascript自带的对象，比如Array、Date、Math。。。。
    BOM对象
	DOM对象 document
    自定义对象
 */
var student = {
    name: '张三',
    age: 16,
    jump(length){
        console.log('张三跳了'+length+'米');
    },
    // 函数表达式 var swim = function(){}
    swim: function(){

    }
}

student.name;
student.jump(20);

// 字符串对象
var str = new String('This Is A String Object');
// 获取字符串长度
console.log(str);

// 大小写转换(方法)
// toUpperCase/toLowerCase 会将字符串对象转换成普通字符串
// 原来的字符串不会变化
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// charAt
// 根据索引获取字符串中指定位置的1个字符(字符串：字符数组)
console.log(str.charAt(5));

// substr
// 第一个参数是开始位置（下标），第二个参数是需要裁剪的字符串数量，第二个参数不带，默认后面全部裁剪
console.log(str.substr(2,5));
console.log(str.substr(5));

// substring
// 第一个参数是开始位置（下标），第二个参数是裁剪结束位置（下标），第二个参数不带，默认后面全部裁剪
console.log(str.substring(2,5));
console.log(str.substring(5));

// indexOf,用来搜索某个字符或者字符串在目标字符串中的位置
// 如果搜索的内容不在字符串里面，会返回-1
// lastIndexOf从后往前查找，返回的结果一致，但是效率不一样
console.log(str.lastIndexOf('ct'));

// split
// 如果不加任何参数，整个字符串会变成一个只有一项的数组，这一项就是整个字符串
// 如果添加一个引号，不加任何内容，会将字符串每一个字符都存入数组，包括空格
// 如果有参数，split会以参数会标记，将字符串多次切割，组成一个数组，切割后，参数位的字符不存在
console.log(str.split(''));

// 前面所有的方法都有返回值

/**
 * Math 对象
 * 执行数学任务
 * Math.random 取随机数
 * 随机整数: Math.floor(Math.random() * 上限 – 下限 + 1) + 下限
 * Math.PI
 * https://www.runoob.com/jsref/jsref-obj-math.html
 */
/**
 * Number: 是数值的包装类型
 * Boolean: 是布尔数据的包装类型
 */

var num = new Number(100);
console.log(num*100);

/**
 * Date对象，获取浏览器时间Date也是对象类型
 * 获取日期对象的属性，用日期方法获取
 */
var date = new Date();
console.log(date);
// 获取年份
console.log(date.getFullYear());
// console.log(date.getYear()); 废弃
// 获取月份
console.log(date.getMonth()); // 获取到的值范围是0-11
// 获取天数
console.log(date.getDate());

// 时分秒
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
// 2021-7-13 9:21:48

// 时间戳，1970年1月1日至今的毫秒数
console.log(date.getTime());

var time = 1626139353623;
var newDate = new Date(time);
console.log(newDate);