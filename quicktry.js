var c=0,k=0,delay=10;
function partition (low,high)
{
        let pivot = div_sizes[high]; // pivot
        let i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far
        //setTimeout(()=>{
        divs[high].style.backgroundColor='red';//to make the pivot red
        if(i>-1)divs[i].style.backgroundColor = 'purple';
        //},1);
        for (let j=low; j<high; j++)
        {
            //setTimeout(()=>{
                divs[j].style.backgroundColor=lightGreen;
                if (div_sizes[j] < pivot)
                {
                    if(i>-1) divs[i].style.backgroundColor = blue;//make the old i as blue
                    i++; // increment index of smaller element
                    divs[i].style.backgroundColor = 'purple';//make the new one as purple
                    //setTimeout(()=>{
                    // divs[i].style.backgroundColor=lightGreen;
                    //divs[j].style.backgroundColor=lightGreen;
                    //},k+=delay/2);
                     
                    let temp=div_sizes[i];//swap work
                    div_sizes[i]=div_sizes[j];
                    div_sizes[j]=temp;
                    divs[i].style.height = div_sizes[i]+'%';
                    divs[j].style.height = div_sizes[j]+'%';
                    //setTimeout(()=>{
                    // divs[i].style.backgroundColor = blue;
                     //divs[j].style.backgroundColor=blue;
                    //},k+=delay/1.5);
                }
                divs[j].style.backgroundColor=blue;
                //},k+=9)
            // If current element is smaller than the pivot
            
        }
            //setTimeout(()=>{
                let temp=div_sizes[i+1];//swap work, putting high in correct position
                div_sizes[i+1]=div_sizes[high];
                div_sizes[high]=temp;
                divs[i+1].style.height = div_sizes[i+1]+'%';//height
                divs[high].style.height = div_sizes[high]+'%';//update
            //},k+=delay)
                
                //setTimeout(()=>{
                //divs[i+1].style.backgroundColor='red';
                //divs[high].style.backgroundColor=yellow;
                //},k+=delay/1.2);
            //setTimeout(()=>{
                for(var t=low;t<=i+1;t++)
                {
                    divs[t].style.backgroundColor=yellow;
                }
            //},k+=delay/0.8);
        return (i + 1);
    
}
function quickSort(low,high){
    if (low < high) {
        //setTimeout(()=>{
            var pi = partition(low, high);//pi is partitioning index, arr[p] is now at right place
            //console.log(pi);
            //divs[pi].style.backgroundColor=yellow;
            // Separately sort elements before
            // partition and after partition
            quickSort(low, pi - 1);
            quickSort(pi + 1, high);
        //},c+=delay);
       
    }else{
        //setTimeout(()=>{
            divs[size-1].style.backgroundColor=yellow;
            enable_buttons();
            document.getElementById('quickDetail').style.display = 'none';
            quick.style.backgroundColor=blue;//make the button off
            quick.style.color=yellow;
        //},1000);
    }
}