let folders = document.getElementsByClassName('folders')[0];
let divs = folders.getElementsByTagName('div');

function render() {
    let temp = '';

    for (let attr in data) {

        let wenjian = data[attr];

        // console.log(wenjian.title);

        temp += `<div class="file-item">
        <img src="img/folder-b.png" alt="" />
        <span class="folder-name">${wenjian.title}</span>
        <input type="text" class="editor"/>
        <i class="checked"></i>
        </div>`
        // console.log(temp);
     
    }
    folders.innerHTML = temp;

}
render();

console.log(divs);

divs.ondblclick = function(){
    console.log('2');
    
}


