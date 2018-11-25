//树形菜单


function treeMenu(node_data){
    let ul = document.createElement('ul');
    let li = document.createElement('li');

    li.setAttribute('data-id',node_data.id);

    li.innerHTML = `<div class="tree-title tree-ico close"><span><i></i>` 
                    + node_data.title + `</span></div>`
    
    li.onclick = function(event){
        let clickedLi = event.target.parentNode.parentNode;
        let node_id = clickedLi.getAttribute('data-id');
        showList(node_id);
    }
    ul.appendChild(li);

    if(node_data.pid == -1){
        let treeMenu = document.getElementsByClassName('tree-menu')[0];
        treeMenu.appendChild(ul);
    }else{
        ul.className += 'indent-left'
        let parent = document.querySelectorAll("[data-id='" + node_data.pid+"']")[0];
        let div = parent.getElementsByTagName('div')[0];

        div.classList.remove('close');
        div.classList.add('open');

        parent.appendChild(ul);
    }
}


function showList(node_id){
    let folders = document.getElementsByClassName('folders')[0];
    folders.innerHTML = '';
    
    for(let key in data){
        let node_data = data[key];
        if(node_data.pid == node_id){
            let  div = document.createElement('div');

            div.className = 'file-item';

            div.setAttribute('date-id',node_data.id);

            div.innerHTML = `<img src="img/folder-b.png" alt="" />
							<span class="folder-name">` + node_data.title + `</span>
							<input type="text" class="editor"/>
							<i class="` + (node_data.checked ? 'checked' : '') + `"></i>`
            
            div.onclick = function(ev){
                if (!div.classList.contains('active')) {
					div.classList.add('active');
				}
				else {
					div.classList.remove('active');
				}
            }
            div.ondblclick = function(event) {
				let node_id = node_data.id;
    			showList(node_id);
    		}

   			folders.appendChild(div);
        }

    }
    active_tree_menu(node_id);
}

function active_tree_menu(node_id) {
	let tree_menu = document.getElementsByClassName('tree-menu')[0];
	let lis = tree_menu.getElementsByTagName('li');
	console.log('lis: ', lis);
	for (let i = 0; i < lis.length; ++i) {
		let li = lis[i];
		let span = li.getElementsByTagName('span')[0];

		span.classList.remove('active');

		let data_id = li.getAttribute('data-id');
		if (data_id == node_id) {
			span.classList.add('active');
		}
	}
}


for (let key in data) {
	let node_data = data[key];
	treeMenu(node_data);
}

showList(0)