let k=0;
function partition (low,high)
{console.log(k++)
    let pivot = div_sizes[high]; // pivot
    let i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far
 
    for (let j=low; j<high; j++)
    {
        // If current element is smaller than the pivot
        if (div_sizes[j] < pivot)
        {
            i++; // increment index of smaller element
            //setTimeout(()=>{
            divs[i].style.backgroundColor=lightGreen;
            divs[j].style.backgroundColor=lightGreen;
            // },90);
            // setTimeout(()=>{
            let temp=div_sizes[i];//swap work
            div_sizes[i]=div_sizes[j];
            div_sizes[j]=temp;
            divs[i].style.height = div_sizes[i]+'%';
            divs[j].style.height = div_sizes[j]+'%';
            divs[i].style.backgroundColor = blue;
            divs[j].style.backgroundColor=blue;
            //},110);
        }
    }
    
    let temp=div_sizes[i+1];//swap work
            div_sizes[i+1]=div_sizes[high];
            div_sizes[high]=temp;
            divs[i+1].style.height = div_sizes[i+1]+'%';
            divs[high].style.height = div_sizes[high]+'%';
            divs[i+1].style.backgroundColor='red';
            divs[high].style.backgroundColor='red';
            
            // for(var t=low;t<=i;t++)
            // {
            //     divs[t].style.backgroundColor=yellow;
            // }
    return (i + 1);
}
function quickSort(low,high){
    if (low < high) {
        setTimeout(()=>{
            var pi = partition(low, high);//pi is partitioning index, arr[p] is now at right place
            //console.log(pi);
            divs[pi].style.backgroundColor=yellow;
            // Separately sort elements before
            // partition and after partition
            quickSort(low, pi - 1);
            quickSort(pi + 1, high);
        },1000);
       
    }else{
        //setTimeout(()=>{
            divs[size-1].style.backgroundColor=yellow;
            enable_buttons();
        //},1000);
    }
}