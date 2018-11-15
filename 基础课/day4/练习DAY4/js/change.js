console.log( document.getElementById("box"))
var obox = ( document.getElementById("box"));
// obox.style.backgroundColor ="pink"; 行内样式修改

// obox.className += " bgColor"; 通过增加属性名 改变样式， " "里面空格+新属性名
var oboxList = obox
    .getElementsByTagName('li')
    // console.dir(oboxList);

// oboxList[1].style.color = "red";   box里面第二个li文字颜色设置为红色
for (var i = 0;i< oboxList.length; i++) {
    if (i%2 !==0){
        // oboxList[i].style.background ="pink";
        oboxList[i].className += " bgColor";
       
    }
}