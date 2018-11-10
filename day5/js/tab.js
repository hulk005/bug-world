
var tabBox =document.getElementById('tabBox');
var ul = tabBox.getElementsByClassName('ul1')[0];
var lis = ul.getElementsByTagName('li');
// var lis= tabBox.getElementsByTagName('li');
var divlis= tabBox.getElementsByTagName('div');

function  change (z){
    for (var i = 0;i < lis.length;i++){
        lis[i].className = '';
        divlis[i].className = '';
    }
        lis[z].className = ' active';
        divlis[z].className = ' active';
}

for (i=0;i<lis.length; i++) {
    lis[i].zindex = i;
    lis[i].onclick = function () {
        change(this.zindex)
    }
}