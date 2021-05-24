var style = getComputedStyle(document.body);// css colours variables to be used here also
var yellow = style.getPropertyValue('--yellow');// this is how u can use css variables here
var blue = style.getPropertyValue('--blue');
var lightGreen = style.getPropertyValue('--lightGreen');

var inp_as=document.getElementById('a_size');
var size=inp_as.value;
var inp_generate=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");

var buttons=document.querySelectorAll('button');
var div_sizes=[];
var divs=[];
var cont=document.getElementById('array_container');

inp_generate.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);
window.onload=update_array_size();//when window is loaded/reloaded

function generate_array(){
    cont.innerHTML = '';
    div_sizes = [];
    divs=[];
    for(var i=0;i<size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:#051821; width:" + (100/size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
function update_array_size(){
    size=inp_as.value;
    //console.log(size)
    generate_array();
}
function disable_buttons()
{
    for(let i=0;i<buttons.length;i++)
    {
        buttons[i].classList=[];
        buttons[i].classList.add("button_locked");

        buttons[i].disabled=true;
        inp_as.disabled=true;
        inp_generate.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function enable_buttons()
{
    for(let i=0;i<buttons.length;i++)
    {
        buttons[i].classList=[];
        buttons[i].classList.remove("button_locked");

        buttons[i].disabled=false;
        inp_as.disabled=false;
        inp_generate.disabled=false;
        inp_aspeed.disabled=false;
    }
}

document.getElementById('selection').addEventListener('click',() => {
    document.getElementById('selectionDetail').style.display = 'block';
    disable_buttons();
    selectionSort();
});
document.getElementById('bubble').addEventListener('click',() => {
    document.getElementById('bubbleDetail').style.display = 'block';
    disable_buttons();
    bubbleSort();
});
document.getElementById('quick').addEventListener('click',() => {
    document.getElementById('quickDetail').style.display = 'block';
    disable_buttons();
    quickSort(0,size-1);
});
document.getElementById('merge').addEventListener('click',() => {
    disable_buttons();
   // mergeSort();
});