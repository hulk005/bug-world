//数组的增删改查
var arr = [0, 1, 2, 3, , {}, []];
//length 数组内容的长度
console.log(arr.length);

//查找
var arr = ['a', 'b', 'c']

console.log[arr[0]]; //a
console.log[arr[1]]; //b

//如果索引的内容不存在，返回的值为undefined

//添加
arr[3] = 'd';
arr[4] = 'e';
console.log(arr);

//修改
arr[0] = 'hello';
arr[4] = 'world';
console.log(arr)

//删除
delete arr [0];
console.log(arr);
//删除之后这个索引并不会消失，这个索引后面的值不会往前进一步（索引减一）