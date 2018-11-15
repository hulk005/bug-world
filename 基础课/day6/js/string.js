//格式化时间  2018-1-7 09:35:36  =>  01月7日 09时35分

function addZero (val) {
    return val.length > 1 ? val : '0' + val;
}

function time (date) {
    var str = '';
    var dateArr = null;
    dateArr = date.split(' ');
    var d = dateArr[0].split('-');
    var month =d[1];
    var day = d[2];
    var a = dateArr[1].split(':');
    var hour = a[0];
    var min = a[1];

    
    str = addZero(month) +'月'+ addZero(day) + '日' + ' ' + addZero(hour) +'时' + min +'分';
    return str;
}
console.log(time('2018-1-7 19:05:36'));


var url = 'https://www.baidu.com/s?ie=utf-8&username=caoyuanye&password=123&age=11&height=165#hey';

function query (url){
    var obj = {};
    var indexQ = url.indexOf('?');
    var indexW = url.indexOf('#');
    var queryStr = " ";
    if (indexW === -1){
        queryStr = url.slice(indexQ + 1);
    }else{
        queryStr = url.slice( indexQ + 1, indexW);
    }
    var queryArr = queryStr.split('&');
    for (var i = 0; i < queryArr.length; i++) {
        var cur = queryArr[i];
        var curArr = cur.split('=');
        obj[curArr[0]] =curArr[1];
    }

    return obj;
}

console.log(query(url));



//2018-1-8 19:24:36 => 2018 年 10月18日 19时24分36秒 练习

function addZero (val){
    return val.length === 2 ? val: 0 +val;
}

function time (hours) {
    var str = '';
    var arrBig = hours.split(' ');
    var left = arrBig[0].split('-');
    var year = left[0];
    var month = left[1];
    var day = left[2];

    var right = arrBig[1].split(':');
    var hour = right[0];
    var minute = right[1];
    var second = right[2];

    str = year + '年' + addZero(month) +'月' + addZero(day) + '日' + ' ' + hour +"时"  + minute +'分' + second + '秒'
    return str;
}
console.log(time('2018-1-8 19:24:36'));






//9-7 21:53  => 10月17日 21时53分

function add (val){
    return val.length >1 ? val:0+val;
}
function time (any) {
    var str ='';

    var strBig = any.split(' ');
    var left = strBig[0].split('-');
    var month = left[0];
    var day = left[1];

    var right =strBig[1].split(':');
    var hour = right[0];
    var min = right[1];

    str = add(month) +'月' + add(day) + '日' + ' ' + hour + '时' + min + '分';

    return str;
}
console.log(time('9-7 21:53'));









