
const label = document.getElementById("label");
const inc = document.getElementById("inc");
const res = document.getElementById("res");
const dec = document.getElementById("dec");

let count = 0;
inc.onclick= function(){
    count+=2;
    label.textContent= count;
}

dec.onclick= function(){
    count--;
    label.textContent= count;
}

res.onclick= function(){
    count =0;
    label.textContent= count;
}