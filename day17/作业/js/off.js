let mainDiv = document.getElementById("main");
let ul = mainDiv.getElementsByTagName("ul")[0];
let lis = ul.getElementsByTagName("li");

let n = 0;

for (let i = 0; i < lis.length; ++i) {
    let li = lis[i];

    // 商品名
    let goodsName = li.getElementsByTagName("h5")[0].innerText;
    let price = li.getElementsByTagName("strong")[2].innerText;
    
    console.log("price: ", price);

    let inputs = li.getElementsByTagName("input")
    let date = inputs[0];
    let button = inputs[1];

    let spans = li.getElementsByTagName("span")
   

    button.onclick = function(events) {
        let endTime = new Date(date.value);

        let timer = setInterval(function() {
            //alert("date " + date.value + " confirmed!");

            let now = new Date(); //现在的时间
            let totalOffset = Math.floor((endTime - now) / 1000);
            let offset = totalOffset;

            let h = Math.floor(offset / 3600);
            offset %= 3600;
            let m = Math.floor(offset / 60);
            offset %= 60;
            let s = offset;

            spans[0].innerText = Math.floor(h / 10);
            spans[1].innerText = h % 10;
            spans[2].innerText = Math.floor(m / 10);
            spans[3].innerText = m % 10;
            spans[4].innerText = Math.floor(s / 10);
            spans[5].innerText = s % 10;

            if (totalOffset <= 0) {
                clearInterval(timer);
                // alert("商品下架");

                let zhang = document.getElementsByClassName('big-c')[i]; 
                let zheZhao = document.getElementsByClassName('bg')[i]; 
                zhang.style.visibility = 'visible';
                zhang .style.transform ='scale(1)';
                zheZhao.style.display = 'block';
                

                let newUl = document.createElement("ul");
                let imgs = li.getElementsByTagName('img');
                
                // newUl.className = "list";
                newUl.style.backgroundColor = 'white';
              
               

                newUl.innerHTML = '<li class="li1">' + goodsName+ '</li><li class="li2">' + price + '</li><li class="li3"><img src="' + imgs[0].src + '"/></li>';
               

                let footerDiv = document.getElementById("footer");
                footerDiv.appendChild(newUl);


                let add = footerDiv.getElementsByTagName('li')[2]
                
                add.innerHTML =  '总价:'+' '+( n += price.substring(1)*1) +' '+'大洋';
                  

            }

        }, 1000);
    };
}

