//数组不变式/循环不变式
// |---未操作---|---已操作---|




//洗牌算法 => 随机打乱一个数组
var arr = [1, 2, 3, 4, 5];
function fu1(arr){
    var len = arr.length;
    while (len > 0) {
        var index = Math.floor(Math.random() * len);

        var temp = arr[len -1];
        arr[len -1] = arr[index];
        arr[index] = temp;
        
        len--;
    }
    return arr;
}
console.log(fu1(arr));








//冒泡排序   >>>>>>>>
//  |------|i| => |-----|i-|
var arr = [2,1,6,9,7,9,7]
function bubble_sort(arr){
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length- 1 -i; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j +1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubble_sort(arr));