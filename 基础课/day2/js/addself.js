//自增
var i = 1;
i++;
console.log(i);
++i;
console.log(i);
i = i + 1;
console.log(i);
i += 1;
console.log(i);

console.log(++i +1);// ++i 表达式用的是自增之后的值，先自增在运算
console.log(i++ +1);// i++ 表达式用的是自增之前的值，先运算在自增
console.log(i++ + 1 + i++);// 1+1+2
console.log(i);//3

console.log(i++ + ++i + i++);//1+3+3
console.log(i)// 4