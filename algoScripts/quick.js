var res=0;
function partition (low,high) {
    let pivot = div_sizes[high]; // pivot
        let i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far
        setTimeout(()=>{
            divs[high].style.backgroundColor='red';//to make the pivot red
        },c+=delay/10)
        for (let j=low; j<high; j++) {
            setTimeout(()=>{
                divs[j].style.backgroundColor=lightGreen;
            },c+=delay/9)
            if (div_sizes[j] < pivot) {
                i++; // increment index of smaller element
                let temp=div_sizes[i];//swap work
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;
                setTimeout(()=>{
                    divs[i].style.height = div_sizes[i]+'%';//height
                    divs[j].style.height = div_sizes[j]+'%';//update
                },c+=delay/8)
            }
            setTimeout(()=>{
                divs[j].style.backgroundColor=blue;
            },c+=delay/7)        
        }
        let temp=div_sizes[i+1];//swap work, putting high in correct position
        div_sizes[i+1]=div_sizes[high];
        div_sizes[high]=temp;
        setTimeout(()=>{
            divs[i+1].style.height = div_sizes[i+1]+'%';//height
            divs[high].style.height = div_sizes[high]+'%';//update
            divs[high].style.backgroundColor=blue;//making pivot normal(blue)
        },c+=delay/6)
    res = (i + 1);
}
function quickSort(low,high){
    if (low > high) {
        setTimeout(()=>{release();},c+=delay)
        return;
    }
    partition(low, high);
    var pi = res//pi is partitioning index, arr[p] is now at right place
    quickSort(low, pi - 1);
    quickSort(pi + 1, high);
        
    function release(){
        setTimeout(()=>{
            for(var t=low;t<=res;t++) {//color update
                divs[t].style.backgroundColor=yellow;
            }
            enable_buttons();
            document.getElementById('quickDetail').style.display = 'none';
            quick.style.backgroundColor=blue;//make the button off
            quick.style.color=yellow;
        },c+=delay);
    }
}
function quickSortF(){
    c=0;
    quickSort(0,size-1);
}