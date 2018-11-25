// console.log("data: ", data);

// 添加菜单项至左侧的树形菜单
function add_tree_menu(node_data) {
	let ul = document.createElement('ul');

    let li = document.createElement('li');
    li.setAttribute('data-id', node_data.id);

    li.innerHTML = `<div class="tree-title tree-ico close">
                            <span><i></i>` + node_data.title + `</span>
                    </div>`;

    li.onclick = function(event) {
    	
    	let clickedLi = event.target.parentNode.parentNode;
    	let node_id = clickedLi.getAttribute('data-id');
    	show_folders_under_node(node_id);
    }

    ul.appendChild(li);

    if (node_data.pid == -1) {
    	ul.id = 'tree-root';

    	let tree_menu = document.getElementsByClassName('tree-menu')[0];
    	tree_menu.appendChild(ul);
    }
    else {
    	ul.className += 'indent-left';

    	let parent = document.querySelectorAll("[data-id='" + node_data.pid + "']")[0];
    	let div = parent.getElementsByTagName('div')[0];

    	div.classList.remove('close');
    	div.classList.add('open');

    	parent.appendChild(ul);
    }
}

// 选中左侧菜单项时，更新右侧文件夹列表
function show_folders_under_node(node_id) {
	let folders = document.getElementsByClassName('folders')[0];
	folders.innerHTML = '';

	for (let key in data) {
		let node_data = data[key];
		if (node_data.pid == node_id) {
			let div = document.createElement('div');

			div.className = 'file-item';

			div.setAttribute('data-id', node_data.id);

			div.innerHTML = `<img src="img/folder-b.png" alt="" />
							<span class="folder-name">` + node_data.title + `</span>
							<input type="text" class="editor"/>
							<i class="` + (node_data.checked ? 'checked' : '') + `"></i>`

			div.onclick = function(event) {
				// 点击效果
				if (!div.classList.contains('active')) {
					div.classList.add('active');
				}
				else {
					div.classList.remove('active');
				}

				// // 编辑状态下的选中
				// if (!div.classList.contains('checked')) {
				// 	div.classList.add('checked');
				// }
				// else {
				// 	div.classList.remove('checked');
				// }
    		}

    		div.ondblclick = function(event) {
				let node_id = node_data.id;
    			show_folders_under_node(node_id);
    		}

   			folders.appendChild(div);
		}
	}

	active_tree_menu(node_id);
}

// 将菜单项设置为active
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

//////////////// main ////////////////
for (let key in data) {
	let node_data = data[key];
	add_tree_menu(node_data);
}

show_folders_under_node(0)

