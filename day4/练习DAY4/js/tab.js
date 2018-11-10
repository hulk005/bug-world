var tabBox= document.getElementById('tabBox');
var tabList= tabBox.getElementsByTagName('li');
var divList= tabBox.getElementsByTagName('div');

for (var i= 0;i<tabList.length; i++){
    tabList[i].zfindex = i;
    // tabList[i]=>每一轮循环操作的对象
    tabList[i].onclick= function (){
        //事件绑定；绑定的时候没有执行，手动触发点击事件的时候才会执行
        changeTab(this.zfindex);
    }   
}

//封装一个方法 完成页卡切换
function changeTab (n){
    //=>1.所有li div都没有选中样式
    for (var i= 0;i<tabList.length;i++){
        tabList[i].className= '';
        divList[i].className= '';
    }
    //2.当前点击的有选中样式
        tabList[n].className= 'active';
        divList[n].className= 'active';
}