// 数组去重

var arr = [1, 2, 3,  1, 2, 3]
//=> [1, 2, 3, 4]

for (var i = 0; i < arr.length; i++) {
    var cur = arr[i];
    for (var j = i + 1; j < arr.length; j++) {
        if( cur === arr[j]){
            arr.splice(j,1);
            j--
        }
    }
}
console.log(arr);





// 1. 两次循环去重
// for (var i = 0; i< arr.length; i++ ){
//     var cur = arr[i];
//     //用cur 和数组后面的每一项作比较
//     //i+1 就是cur 后面的第一项
//     for (var j = i + 1; j< arr.length; j++ ){
//         if( cur === arr[j]){
//             //把索引j这一项删除
//             arr.splice(j,1);
//             //j = 3
//             //[1,2,3,1,2,3] => [1,2,3,2,3]
//             //j++ => 漏了比较第二个这一项  这就是数组塌陷
//             j-- // 所以需要 -1
//         }
//     }
// }
// console.log(arr);



//两次循环嵌套
//外部循环，拿到的一个值和内部循环的每个值作比较
//如果相同就删除内部循环相同的值

//随机打乱一个数组？？ 思考题


//2.使用对象属性名方式去重
//如果一个对象的属性名进行赋值操作 没有属性名就是添加，有这个属性名的话就是更改
 var arr = ['a','b','c','d','a','b','c','d']
 var  obj= {}

 for (var i = 0; i < arr.length; i++) {
     var cur = arr[i];
     if (!obj[cur]){
        obj[cur] = true;
     } else{
         arr.splice(i,1);
         i--
     }
 }
 console.log(arr);
 


 //随机打乱一个数组
 //arr = [1, 2, 3, 4, 5]

 arr.sort(function(a, b) {
    return Math.random() - .5;
});
console.log(arr);

 // 随机打乱一个数组  （洗牌算法  最好的方法）
 Math.floor(Math.random()*5)  //随机取一个索引

 //arr = [1,2,3,4,5]
 //5个可用索引 随机取一个 2 arr[2] 和最后一项调换位置  让可用索引减1
 //4个可用索引 随机取一个 0 arr[0] 和倒数第二项调换位置 让可用索引减1

 function fn (){
     var index = Math.floor(Math.random()*5);
     
 }




 //数组去重  方式一 双for循环去除

 var arr = [1,2,3,4,5,3,4,2,4,3,5,4]

 for (var i = 0; i < arr.length; i++) {
     for (var m =i+1; m < arr.length; m++) {
         if(arr[i]===arr[m]){
             arr.splice(m,1)
             m--;
         }
     }
 }
 console.log(arr,"//////////");

//数组去重  方式二  使用对象属性名方式去重
 var arr = ['a','r','a','t','r','a','t']

var obj = { };
for (var i = 0; i <arr .length; i++) {
    var m =arr[i];
    if(!obj[m]){
        obj[m] = '0000';
    }else{
        arr.splice(i,1);
        i--;
    }
}
console.log(arr,">>>>>>>");
 