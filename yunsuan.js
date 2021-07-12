var a = Number(prompt('请输入数据1'));
var b = Number(prompt('请输入数据2'));
var c = prompt('请输入运算方法');
var res = 0;

console.log('数据1是'+a);
console.log('数据2是'+b);
console.log('运算方法是'+c);

if(c=='+'){
    res = a+b;
}else if(c=='-'){
    res = a-b;
}else if(c=='*'){
    res = a*b;
}else if(c=='/'){
    res = a/b;
}else if(c=='%'){
    res = a%b;
}
console.log('结果是'+res);