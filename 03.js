/**
 * 事件：将函数和HTML元素进行绑定
 * 1.行内绑定 
 *  不利于复杂的业务代码
 *  代码与界面没有分离
 * 2.获取元素，给元素添加onclick属性
 * 3.添加事件监听
 * 第二种方法只能绑定一次事件无法重复绑定
 * 第三种方法可以在不破坏原来代码的情况下，继续给元素添加事件
 * 事件三要素：
 * 1.事件源 HTML元素，事件是通过哪个元素触发
 * 2.事件 如何触发事件内容，比如click dbclick mouseover mouseout
 * 3.事件处理程序 事件触发之后运行哪些代码
 * 常用事件：
 * 1.系统事件 无需手动触发
 * onload 页面所有元素加载完成之后触发，防止代码运行时候，还有网页元素没有加载
 * image.onload 图片加载完成之后触发 图片懒加载,有的图片非常大，
 * 可以先加载一张非常小的图片，在网页完全加载结束之后，重新加载原始图片
 * 人工事件：由用户触发的事件
 * click
 * 键盘事件：onkeyup
 * 其他事件：如focus blur表单获取和失去焦点
 */
var a = 123;
function fn1() {
    alert('点击了fn1按钮')
}



window.onload = function () {
    var btn2 = document.getElementById('btn2');
    btn2.onclick = function () {
        alert('点击了fn2按钮')
    }
      /**
        * 事件对象event
        * target属性表示点击的元素的对象
        * preventDefault: 取消默认行为 , 可以使用 return false来代替
        * stopPropagation：取消事件派发,触发事件之后，取消继续冒泡
        * 事件冒泡：子 -> 父
        * 事件捕获: 父 -> 子
        * 事件委托：
        *  只在最外层父元素添加事件监听
        *  将所有子元素触发的事件全部委托给父元素，通过target.id判断是哪个元素触发的事件
        */
    var btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', function (e) {
        console.log(e);
        alert('点击了fn3按钮')
    })
    var div1 = document.getElementById('div1');
    div1.addEventListener('click', function (e) {
        console.log(e.target.id);
        if(e.target.id === 'div2'){
            alert('点击了div2')
        }else if(e.target.id === 'div1'){
            alert('点击了div1')
        }
        alert('点击了div1')
    })
//     var div2 = document.getElementById('div2');
//     div2.addEventListener('click', function (e) {
//         alert('点击了div2')
//         e.stopPropagation();
//     })
}

