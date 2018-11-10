//验证码
//在页面中点击一个按钮 随机出现4个字符(验证码)
//这4个字符来自 A-Z a-z 0-9

//方式一
// function validata (){
//     var str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
//     var index = null;
//     var result = '';
//     for (var i = 0; i < 4; i++) {
//         // 在当前str的索引中随机取一个
//         index = Math.floor(Math.random()*str.length);
//         // 取到的index在str中的值 和 result进行字符串拼接
//         var cur = str.charAt(index);    
//         if (result.indexOf(cur) === -1) {
//             // 如果在str中没有这个值 就将它加入result
//             result += cur;
//         }else{
//             // 如果在str中有这个值 需要在循环一次
//             i--;
//         }   
//     }
//     return result;
// }
// console.log(validata());


//方式二
function validata (){
    var str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    var index = null;
    var result = '';
    var cur = '';
    while (4 > result.length) {
            //取到可用随机数(索引)
        index = Math.floor(Math.random() * str.length);
        cur = str[index]; //取到索引值
            //判断这个值在不在result 里面，不再就将这个值放入result
        if (result.indexOf(cur)=== -1)  result += cur;  
    }
    return result;
}

//获取需要绑定事件的button
var button =document.getElementsByTagName('button')[0];
//获取到需要替换验证码的div
var cont =document.getElementById('cont');
//给button绑定点击事件，点击的时候更换验证码
button.onclick = function () {
    var data = validata();
    cont.innerText = data;
}

console.log(validata());

