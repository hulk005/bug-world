// var box = document.getElementById('box');
// var lis = box.getElementsByTagName ('li');
// var divlis = box.getElementsByTagName ('div');

// function changeTab (n){
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].className = '';
//     divlis[i].className = '';

//     lis[n].className = 'active';
//     divlis[n].className = 'active';
//     }
    

// }

// for (var i = 0; i <lis.length; i++) {
//     lis[i].index = i;
//     lis[i].onclick = function (){
//         changeTab(this.index);
//     }
    
// }
var box = document.getElementById('box');
var lis = box.getElementsByTagName('li');
var divs = box.getElementsByTagName('div');

function changeTab (n){
    for (var i = 0; i < lis.length; i++) {
         lis[i].className = '';
         divs[i].className = '';

         lis[n].className = 'active';
         divs[n].className = 'active';
    }
}

for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onclick = function(){
        changeTab(this.index);
    }
}