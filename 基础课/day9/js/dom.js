var myId = document.getElementById('myId');
mySpan = document.getElementById('myspan')
myId.innerHTML = myId.innerHTML + '<p>我是p标签</p>' //改变HTML
myId.innerHTML = myId.innerHTML += '<p>我是p标签</p>'//插入HTML

var htmlp = document.createElement('p');
htmlp.id = 'hey';
htmlp.innerText = '我是一个p标签';
var htmlp = htmlp.cloneNode(); //克隆 不克隆子节点
var htmlp = htmlp.cloneNode(true); // 深度克隆 包括所有子节点



