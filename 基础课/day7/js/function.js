//arguments 实参集合

//任意数求和

function fn (){
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
var total = fn(1,2,3,4,5);
console.log(total);

//实名函数 
console.dir(function name (){});
// 匿名函数
console.dir(function (){});

//自执行函数
var str = 'hello world';
~(function(a){
    alert(a);
})(str); 