//forEach
var array = ['a', 'b', 'c', 'd', 'e']
//执行arr.length次 遍历数组里面的内容
//第三个参数array代表的是调用Foreach的原数组
//item，index分别代表每次执行的内容(arr[index])和索引
array.forEach(function (item,index,array) {
    console.log(item,index,array)    
});


//时间格式化
 //2017/9/2 09:20:11 => 09月02日 09时20分
 function addZero (val){
     return val.length ===2 ? val:'0'+val;
 }
function  date (str) {
    // var strnew = '';
    var bigstr = str.split(' ');
    var left = bigstr[0].split('/');
    var man = left[1];
    var day = left[2];

    var right = bigstr[1].split(':');
    var time = right[0];
    var min = right[1];

    return  addZero(man) +'月' + addZero(day) + '日' + ' ' + time + '时' + min +'分';
    
}

console.log(date('2017/9/2 09:20:11'));


//查询字符串
//query(url); //=> {name=caoyuanye,age=18,heigth=170}

var url = 'baidu.com?name=caoyuanye&age=18&heigth=170#hey';

function query(str) {
    var obj = {};
    //第一步 拿到 name=caoyuanye&age=18&heigth=170#hey
    var quertArr = str.split('?')[1]
                        .split('#')[0]
                        .split('&')
    quertArr.forEach(function(item){
        var cur = item.split('=');
        //第四步 obj[name] = caoyuanye
        obj[cur[0]] = cur[1];
        
    })
    return obj;  
}
console.log(query(url));

      



//3. a-z A-Z 0-9 获取4位不重复的随机值形成一个验证码


//循环4次
// 在0-62个字符中取一个随机数
//将str[index] 放入结果(放入之前判断是否重复)

function code(){
    var str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0987654321';
    var result ='';

    while(result.length < 4){
        var index = Math.floor(Math.random()*str.length);
        var cur = str.charAt(index);
        if(!result.includes(cur))  result += cur;
       }
       return result;
};
console.log(code());


// 任意数求和
//number(1,3,5,'hello','hey','12',true,['1']); //=> 21

//遍历实参
//盘多只要number和string
//判断是不是有效数字 是就累加

// function num () {
//     var type = ['number','string']
//     var total = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         var cur = arguments[i];
//         if(type.includes(typeof cur)){
//             var curNum = +cur;
//             if (!isNaN(curNum)) total += curNum;
//         }
//     }
//     return total;8
// }
// var add = num(1,3,5,'hello','hey','12',true,['1']);


function num () {

    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        var cur = arguments[i];
        if(typeof cur === 'number' || typeof cur === 'string'){
            var curNum = +cur;
            if (!isNaN(curNum)) total += curNum;
        }
    }
    return total;
}
var add = num(1,3,5,'hello','hey','12',true,['1']);

console.log(add);



//递归 函数自己调用自己
//必须有一个临界值 结束自己调用自己

function fn(n){
    if(n<1) return 0;
    return n + fn(n-1);
}
fn(9); //9+8+7...+1


// 奇数项想乘
function fn1(n) {
    if (n === 1) return 1;
    if(n % 2 === 0){
        return fn1(n-1)
    }   
    return n*fn1(n-2);
}
console.log(fn1(5));


//获取所有的元素
function queryAllId (id) {
    var ids = [];
    var allHtml = document.getElementsByTagName('*');
    for (var i = 0; i < allHtml.length; i++) {
        var cur = allHtml;
        if(cur.id === id) ids.push(cur);
    }
    return ids;
}

