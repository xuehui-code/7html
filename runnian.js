var year = prompt('请输入年份');


console.log('年份是'+year);

if((year%4==0&&year%100!=0)||year%400==0){
    console.log('是闰年');
}else{
    console.log('不是闰年');
}