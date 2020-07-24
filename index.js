var word = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var container = document.querySelector(".container");
var begin = document.querySelector(".begin");
var span1 = document.querySelector(".value .values");
var span2 = document.querySelector(".heart .values");
var leve = document.querySelector(".leve");
var explain = document.querySelector(".explain");
var box = document.querySelector(".box");
var box1 = document.querySelector(".box1");
var btnlist = document.querySelectorAll(".box button")
var btnlist1 = document.querySelectorAll(".box1 button")
// var control = document.querySelector(".control");
var over = 100;
var value = 0;
span2.innerHTML = over;
span1.innerHTML = value;
var nowWord = [];
var divs = [];
var speed = 5;
var num = 3;

function craetword(num, speed) {
    for (var i = 0; i < num; i++) {

        nowWord.push(word[Math.floor(word.length * Math.random())])

        var wordDiv = document.createElement("div");
        wordDiv.innerHTML = word[Math.floor(word.length * Math.random())];

        wordDiv.style.cssText = `
        font-size:30px;
        font-weight:bold;
        background:rgba(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)});transform: rotate(-2deg);
        display:block;
        width:50px;
        height:50px;
        text-align:center;
        line-height:50px;
        color:#fff;
        border-radius:30%;
        position:absolute;
        left: ${Math.ceil(Math.random()*1000)}px;top:10px;`
        
        container.appendChild(wordDiv);
        divs.push(wordDiv);

    }
    //console.log(divs);
    function clearword(speeds) {
        for (var x = 0; x < divs.length; x++) {
            divs[x].style.top = divs[x].offsetTop + speeds + "px";
            if (divs[x].offsetTop > 650) {
                divs[x].style.display = "none";
                over = over - 1;
                craetword(1);
                span2.innerHTML = over;
                //console.log(over);
                if (over < 0 || over == 90) {
                    span2.innerHTML = over;
                    clearInterval(t)
                    alert("游戏结束,您的得分为" + value);
                    container.innerHTML = "";
                    over = 100;
                    value = 0;
                    span2.innerHTML = over;
                    span1.innerHTML = value;
                    return;
                }
            }
        }
        document.onkeydown = function (res) {
            var word = String.fromCharCode(res.keyCode);
            for (var i = 0; i < divs.length; i++) {
                if (divs[i].innerHTML == word) {
                    value = value + 1
                    //console.log(value)
                    span1.innerHTML = value;
                    container.removeChild(divs[i]);
                    divs.splice(i, 1);
                    craetword(1)
                    break;
                }
            }
        }
    }
    var t = setInterval(clearword, 50, speed);

}

begin.onclick = function () {
    beg(num, speed)

}
function beg(num, speed) {
    setTimeout(craetword, 300, num, speed);
}

leve.onclick = function () {
    box.style.display = "block";
}
explain.onclick = function () {
    box1.style.display = "block";
}
for (let n = 0; n < btnlist1.length; n++) {
    btnlist1[n].onclick=function(){
        box1.style.display = "none";
    }
}
for (let h = 0; h < btnlist.length; h++) {
    btnlist[h].onclick = function () {
        if (h == 0) {
            num = 3;
            speed = 4;
        }
        if (h == 1) {
            num = 5;
            speed = 6;
        }
        if (h == 2) {
            num = 7;
            speed = 7;
        }
        box.style.display = "none";
    }
}