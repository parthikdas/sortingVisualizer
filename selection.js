function selectionSort(){
    let n = size;
    c=0,z=0;
    delay*=3;
    for(let i = 0;i<n-1;i++){
        setTimeout(() =>{
            let min_ind  =  i;
            setTimeout(() =>{
                divs[i].style.backgroundColor = lightGreen;//make i as green
                for(let j = i+1;j<n;j++){
                    if(div_sizes[j]<div_sizes[min_ind]) min_ind = j;
                }
                divs[min_ind].style.backgroundColor = lightGreen//make the founded min_ind as green
             },z+=(delay/2));//can make it 4
             setTimeout(() =>{
                let temp = div_sizes[min_ind];//swap work
                div_sizes[min_ind] = div_sizes[i];
                div_sizes[i] = temp;
                divs[min_ind].style.height = div_sizes[min_ind]+'%';
                divs[i].style.height = div_sizes[i]+'%';
                
                divs[min_ind].style.backgroundColor = blue;//making the min_ind as blue again
                divs[i].style.backgroundColor = yellow;
            },z+=(delay/1));//can make it /2
        },c+=delay);
    }
    setTimeout(() =>{//after the above loop is over make the last one as yellow and enable buttons
        divs[n-1].style.backgroundColor = yellow;//remaining last one make it as yellow
        enable_buttons();
        document.getElementById('selectionDetail').style.display = 'none';
    },size*delay*2.5);
}