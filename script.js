var style = getComputedStyle(document.body);// css colours variables to be used here also
var yellow = style.getPropertyValue('--yellow');// this is how u can use css variables here
var blue = style.getPropertyValue('--blue');
var lightGreen = style.getPropertyValue('--lightGreen');

var inp_as=document.getElementById('a_size');
var size=inp_as.value;
var inp_generate=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
var c=0,z=0;//used by all sorting functions
var delay=inp_aspeed.value;//the more the number here is more its slower

var selection = document.getElementById('selection');//for the selection sort button
var bubble = document.getElementById('bubble');//for the bubble sort button
var insertion = document.getElementById('insertion');//for the insertion sort button
var quick = document.getElementById('quick');//for the quick sort button
var merge = document.getElementById('merge');//for the merge sort button

var buttons=document.querySelectorAll('button');
var div_sizes=[];
var divs=[];
var cont=document.getElementById('array_container');

inp_generate.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);
inp_aspeed.addEventListener("input",speed);
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
function disable_buttons() {
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

function enable_buttons() {
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
//speed stuff
function speed(){
    if(inp_aspeed.value == 1){
        delay = 1600;
    } else if(inp_aspeed.value == 2){
        delay = 1200;
    } else if(inp_aspeed.value == 3){
        delay = 800;
    } else if(inp_aspeed.value == 4){
        delay = 400;
    } else if(inp_aspeed.value == 5){
        delay = 100;
    }
}

function blue_array(){//after 1 sorting algo if another clicked then make it blue again
    for(let i=0;i<size;i++) divs[i].style.backgroundColor=blue;
}
selection.addEventListener('click',() => {
    blue_array();
    selection.style.backgroundColor=yellow;//make the button show that it is on
    selection.style.color=blue;
    document.getElementById('selectionDetail').style.display = 'block';//show the time section
    speed();
    disable_buttons();
    selectionSort();
});
bubble.addEventListener('click',() => {
    blue_array();
    bubble.style.backgroundColor=yellow;//make the button show that it is on
    bubble.style.color=blue;
    document.getElementById('bubbleDetail').style.display = 'block';//show the time section
    speed();
    disable_buttons();
    bubbleSort();
});
insertion.addEventListener('click',() => {
    blue_array();
    insertion.style.backgroundColor=yellow;//make the button show that it is on
    insertion.style.color=blue;
    document.getElementById('insertionDetail').style.display = 'block';//show the time section
    speed();
    disable_buttons();
    insertionSort();
});
quick.addEventListener('click',() => {
    blue_array();
    quick.style.backgroundColor=yellow;//make the button show that it is on
    quick.style.color=blue;
    document.getElementById('quickDetail').style.display = 'block';//show the time section
    speed();
    disable_buttons();
    quickSort(0,size-1);
});
merge.addEventListener('click',() => {
    blue_array();
    merge.style.backgroundColor=yellow;//make the button show that it is on
    merge.style.color=blue;
    document.getElementById('mergeDetail').style.display = 'block';//show the time section
    speed();
    disable_buttons();
    if(delay==100 || delay==400) delay/=5;//make merge sort faster
    else if(delay==800 || delay==1200) delay/=3;
    else delay/=1.5;
    mergeSort(0,size-1);
});