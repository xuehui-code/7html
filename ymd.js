var y = Number(prompt('请输入年份'));
var m = Number(prompt('请输入月份'));
var d = Number(prompt('请输入日期'));
var sum = Number(0);

console.log('日期是'+y+'年'+m+'月'+d+'日');

if((y%4==0&&y%100!=0)||y%400==0){
    console.log('是闰年');
    var x = 1;
}else{
    console.log('不是闰年');
    var x = 0;
}

var m1 = m-1;
while(m1>0){
    if(m1==1||m1==3||m1==5||m1==7||m1==8||m1==10||m1==12){
        sum += 31;
        m1--;
    }else{
        sum += 30;
        m1--;
    }
}
if(x==1){
    sum = (sum+d-1);
}else{
    sum = (sum+d-2);
}
console.log('是第'+sum+'天');