let countEl = document.getElementById("countEl")
let prevEl = document.getElementById("prevEl")
count = 0;
function add(){
    count = count + 1;
    countEl.innerHTML = count;
}
function save(){
    countstr = count;
    prevEl.innerText = countstr;
    count = 0;
    countEl.innerHTML = count;
}


