/*
    获取公用元素
*/ 

// const folderBox = document.getElementsByClassName('folder-content')[0];
// const folders = folderBox.getElementsByClassName('folders')[0];
// const breadmenu = folderBox.getElementsByClassName('breadmenu')[0];
// const checkall = folderBox.getElementsByClassName('checkall')[0];
// const breadNav = folderBox.getElementsByClassName('bread-nav')[0];
// const fEmpty = folderBox.getElementsByClassName('f-empty')[0];
// const {getChild,addAttr,getParent,getParents,parentArr} =  myTools;



// function render(id){
//     folders.innerHTML = '';
//     let arr = getChild(id);
//     //有没有子集，没有子集就把默认图片打开
//     if(!arr){
//         fEmpty.style.display = 'block';
//     }else{
//         fEmpty.style.display = 'none';
//         arr.forEach((e,k) =>{
//             //文件夹样式
//             let div = document.createElement('div');
//             div.className = e.checked?'file-item active':'file-item';

//             let img = new Image();
//             img.src = 'img/folder-b.png';
//             img.ondblclick = function(){
//                 render(e.id);
//                 renderMenu(e.id);
//                 //还需要清除这些元素的选中样式
//                 arr.forEach(e=>e.checked = false)
//             }
            
//             //文件名
//             let span = document.createElement('span');
//             span.className = 'folder-name';
//             span.innerHTML = e.title;
            
//             //重命名要用的
//             let input = document.createElement('input');
//             input.type = 'text';
//             input.className = 'editor';
            
//             //是否选中
//             let i = document.createElement('i');
//             i.className = e.checked?'checked':'';
//             i.onclick = function(){
//                 data[e.id].checked = !data[e.id].checked;
//                 render(id);
//             }

//             div.appendChild(img);
//             div.appendChild(span);
//             div.appendChild(input);
//             div.appendChild(i);

//             folders.appendChild(div);
//         })
//     }
// }

// render(0);

// console.log(data);
// console.log(getChild(3));


const folderBox = document.getElementsByClassName('folder-content')[0];
const folders = folderBox.getElementsByClassName('folders')[0];
const breadmenu = folderBox.getElementsByClassName('breadmenu')[0];
const checkall = folderBox.getElementsByClassName('checkall')[0];
const breadNav = folderBox.getElementsByClassName('bread-nav')[0];
const fEmpty = folderBox.getElementsByClassName('f-empty')[0];
const {getChild,addAttr,getParent,getParents,parentArr} = myTools;


function render(id){
    folders.innerHTML = '';
    let arr = getChild(id);
    if(!arr){
        fEmpty.style.display = 'block';
    }else{
        fEmpty.style.display = 'none';
        arr.forEach((e,k) => {
            let div = document.createElement('div');
            div.className = e.checked?'file-item active':'file-item';

            let img = new Image();
            img.src = 'img/folder-b.png'
            img.ondblclick = function(){
                render(e.id);
                renderMenu(e.id);
                arr.forEach(e=>e.checked = false);
            }

            let span = document.createElement('span');
            span.className = 'folder-name';
            span.innerHTML =e.title;

            let input = document.createElement('input');
            input.type = 'text';
            input.className = 'editor';

            let i = document.createElement('i');
            i.className = e.checked?'checked':'';
            i.onclick = function(){
                data[e.id].checked = !data[e.id].checked;
                render(id);
            }

            div.appendChild(img);
            div.appendChild(span);
            div.appendChild(input);
            div.appendChild(i);

            folders.appendChild(div);
        });
    }
}

render(0);
