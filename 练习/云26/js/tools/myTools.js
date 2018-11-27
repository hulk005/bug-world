/*
    通过父级的id获取子集
*/

// let myTools = (function(){
//     function getChild(pid){
//         if(!data[pid])return null;//先看这个数据有没有，没有直接返回一个null
//         let arr = [];
//         let onOff = false;
//         for(let attr in data){
//             if(data[attr].pid === pid){
//                 arr.push(data[attr]);
//                 onOff = true;
//             }
//         }
//         if(onOff){
//             return arr;
//         }else{
//             return null;
//         }
//     }

//     //通过id找pid
//     function getParent(id){
//         /*
//             如果没有id对应的这个数据， 或者当前id数据的pid为-1，说明上面没有数据了
//         */ 
//         if(!data[id] || data[id].pid == -1)return null;
//         return data[data[id].pid];
//     }
//     function getParents(id){//找父级的父级
//         let parentArr = [];
//         let now = data[id];//当前的id [3]
//         while(now){//0
//             parentArr.unshift(now);//[0,2,3]
//             now = getParent(now.id);//null
//         }
//         return parentArr;
//     }
//     function addAttr(attr,value){
//         for(let k in data){
//             data[k][attr] = value;
//         }
//     }
//     return {
//         getChild,
//         addAttr,
//         getParent,
//         getParents
//     }
  
// })();

// console.log(myTools)



let myTools =(function(){
    function getChild(pid){
        if(!data[pid])return null;
        let arr = [];
        let onOff = false;
        for(let attr in data){
            if(data[attr].pid === pid){
                arr.push(data[attr]);
                onOff = true;
            }
        }
        if(onOff){
            return arr;
        }else{
            return null;
        }
    }
    function getParent(id){
        if(data[id] || data[id].pad == -1)return null;
        return data[data[id].id];
    }
    function getParents(id){
        let parentArr = [];
        let now = data[id];
        while(now){
            parentArr.unshift(now);
            now = getParent(now.id);
            console.log(now);
            
        }
        return parentArr;
    }
    function addAttr(attr,value){
        for(let k in data){
            data[k][attr] = value;
        }
    }
    return{
        getChild,
        addAttr,
        getParent,
        getParents
    }
})();