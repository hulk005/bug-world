function render(data){
    let temp = '';
    data.forEach(d => {
        temp += '<li>';
        temp += `
            <span class="${d.child?'add':''}">
            ${d.title}
            </span> `;
        if(d.child){
            temp += '<ul>';
                temp += render(d.child);
            temp += '</ul>'
        }
        temp += '</li>';
    })
   return temp;
}  

oUl.innerHTML = render(data);
console.log(oUl);

let lis = document.getElementsByTagName('li');

for(let i=0;i<lis.length;i++){
    lis[i].onclick = function(){
        if(this.children[1]){
            this.children[1].style.display = 'block';
        }
    }
}

console.log(data);


