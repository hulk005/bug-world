// 递归 自己调用自己  （考）

fn (9) //9+8+7+6+5+4+3+2+1

function fn (n) {
    if (n < 1) return 0; // 临界值 中断函数
    return n + fn(n-1)
}

// function fn (n) {
//     return (1+n) * (n/2) //等差公式
// }


var arr = [1,2,3, [4,5, [6,7, [8,9]]]]
// > [1,2,3,4,5,6,7,8,9]

//数组扁平化 方式一  算法 0级面试题
function myFlat(arr) {
    return [].concat(...arr.map(x => Array.isArray(x) ? myFlat(x) : x))
}

//数组扁平化 方式二
function myFlat(arr, result) {
    if (!result) {
        var result = []
    }
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        if (typeof cur === 'object') {
            myFlat(cur, result);
        } else {
            result.push(cur)
        }
    }
    return result;
}



// return

// function fn () {
//     var a = 123;
//     console.log(1);
//     console.log(2);
//     return a;
//     console.log(3);
//     console.log(4);
   
// }
// var result = fn();
// console.log(fn ()); //'a'

