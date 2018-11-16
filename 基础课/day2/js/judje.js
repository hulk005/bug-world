//判断语句
var a =1;
//0 null NaN undefined ''  这5个值转成Boollean是false其它都是true
var num = -6;
// num>=0 ? (num--):(num += 2,num += 10);
// console.log(num);

(num>10) ? num++ :(num>=0 ? num--:num +=2);
console.log(num);




var age = 10;

if (age==11){
    age++
}else if(age>8){
    age--
}else{
    age +=3
}
console.log(age);






var apple ={
    name:"1222",
};
console.log(apple);



var a = 0;
var b = 11;
a && b
switch (a && b) {
    case 1,1:
    console.log('hello');
    break;
    case 0,11:
         a = 3+3,
         b = 11/2
         console.log(a,b)
         break;
    default:
    console.log('>>>>')     
}

// var a = 0;
// var b = 11;
// a && b
// switch (a && b) {
//     case 1,1:
//     console.log('hello');
//     break;
//     case 0,11:
//          a = 3+3,
//          b = 11/2
//          console.log(a,b)
//          break;
//     default:
//     console.log('>>>>')     
// }
// VM71:14 >>>>
// undefined
// a && b
// 0

 var a =15;
 switch (a) {
    case "15":
        a++
        break
     case 14:
        a--;
        break;
     default:
        a++ + a--;
        console.log(a)   
 }
 

 var obj={a:22,b:'eheeh'}