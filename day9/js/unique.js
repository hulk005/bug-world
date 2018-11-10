//1.数组去重
// 双for循环去重

var arr = [1,2,3,2,5,6,4,2,3,4,5]

for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
            arr.splice(j,1);
            j--;
        }
    }
}
console.log(arr);

//2.基于对象属性去重


var arr = [1,2,3,2,5,6,4,2,3,4,5]

var obj = {};
for (var i = 0; i < arr.length; i++) {
    var cur = arr[i];
    if(!obj[cur]){
        obj[cur] = true;
    } else{
        arr.splice(i,1);
        i--
    }
}
console.log(arr);

//冒泡排序

var arr = [9,5,2,6,7]
function puple(arr){
    for (var i = 0; i < arr.length-1; i++) {
        for (var j = 0; j < arr.length-1-i; j++) {
            if(arr[j] > arr[j+1]){
                var cur = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = cur;
            }
        }
    }
    return arr
}
console.log(puple(arr));



