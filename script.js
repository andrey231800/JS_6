let div = document.getElementById('screen');
let clear = document.getElementById('clear');


function insert(num){
    div.innerHTML = div.innerHTML + num;
}

clear.addEventListener('click', function(){
    div.innerHTML = '';
})

let str = document.getElementById('str');

str.addEventListener('click', function back(){
    let back = div.innerHTML;
    div.innerHTML = back.substring(0, back.length-1);
})

let rez = document.getElementById('ravno');

rez.addEventListener('click', function equal(){
    let exp = div.innerHTML;
    if(exp){
        div.innerHTML = eval(exp);
    };
    insert('');
})

let pow = document.getElementById('pow');

pow.addEventListener('click', function pow(){
    div.innerHTML = div.innerHTML + '^2'
})