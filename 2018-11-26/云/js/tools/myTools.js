let myTools = (function(){
    /*
        通过父级的id获取子级
    */
    function getChild(pid){
        if(!data[pid])return null;  //先看当前这个数据有没有，没有直接返回一个null
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

    //通过id找pid
    function getParent(id){
        /*
            如果没有id对应的这个数据 或者 当前id数据的pid为-1，说明当前是微云，微云上面没有数据了
        */
        if(!data[id] || data[id].pid ==-1)return null;
        return data[data[id].pid];
    }

    function getParents(id){ //找父级的父级
        let parentArr = [];
        let now = data[id]; //当前的id  [3]
        while(now){//0
            parentArr.unshift(now);// [0,2,3]
            console.log(now);
            
            now = getParent(now.id);//null
        }
        return parentArr;
    }


    function addAttr(attr,value){
        for(let k in data){
            data[k][attr] = value;
        }
    }

    return {
        getChild,
        addAttr,
        getParent,
        getParents
    }
})();