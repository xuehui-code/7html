var a = prompt('请输入数据1');
var b = prompt('请输入数据2');
var c = prompt('请输入数据3');

console.log('数据1是'+a);
console.log('数据2是'+b);
console.log('数据3是'+c);

if(a>b){
    if(a>c){
        console.log('最大值是'+a);
    }else{
        console.log('最大值是'+b);
    }
}else{
    if(b>c){
        console.log('最大值是'+b);
    }else{
        console.log('最大值是'+c);
    }
}