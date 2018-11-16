//数组去重
//1 双环循环去重 （比较浪费性能）
var arr = [1,2,3,2,1,5,3]
for (var i = 0; i < arr.length-1; i++) {
    for (var m = i+1; m < arr.length; m++) {
        if(arr[i] === arr[m]){
            arr.splice(m,1)
            m--;
        }
    }
}
console.log(arr);

//2.基于对象属性名不能重复 去重

var arr2 = [7,1,2,3,6,3,2,4,5,6,7,2,1];
var obj ={};
for (var i = 0; i < arr2.length; i++) {
    var cur = arr2[i];
    if(!obj[cur]){
        obj[cur] = true;
    }else{
        arr2.splice(i,1);
        i--;
    }
}
console.log(arr);

//3.冒泡排序
var  arr3 = [6,3,4,8,9,7]
function maopao(arr3){
    for (var i = 0; i < arr3.length-1; i++) {
   
        for (var k = 0; k< arr3.length-1-i; k++) {
            if(arr3[k]>arr3[k+1]){
                var cur = arr3[k];
                arr3[k] = arr3[k+1]
                arr3[k+1] = cur;
            }
        }
    }
    return arr3;
}

console.log(maopao(arr3));





//数组去重 

//1.双循环去重

for (var i = 0; i < arr.length-1; i++) {
    for (var j = i+1; j < arr.length; j++) {
        if(arr[i] === arr[j]){
            arr.splice(j,1);
            j--;
        }
    }
}
console.log(arr);

//2.基于对象属性名去重

var obj = {};
for (var i = 0; i < arr.length; i++) {
    var cur = arr[i];
    if(!obj[cur]){
        obj[cur] = true;
    } else{
        arr.splice(i,1);
        i--;
    }
}
console.log(arr);


//3.冒泡排序
var  arr = [2,6,3,8,5,4]
function pouple (arr) {
    for (var i = 0; i <arr.length-1; i++) {
        for (var j = 0; j <arr.length-1-i; j++) {
            if(arr[j]>arr[j+1]) {
                var cur = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = cur;
            }
        }
    }
    return arr;
}
console.log(pouple(arr)) ;

var  arr = [2,6,3,8,5,4];
function maopao (arr){
    for (var i = 0; i < arr.length-1; i++) {
        for (var j = 0; i < arr.length-1-i; j++) {
            if(arr[j]>arr[j+1]){
                var cur = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = cur;
            }
        }
    }
    return arr;
}
console.log(maopao(arr));


