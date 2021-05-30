function insertionSort(){
    c=0;let g=0;
    if(delay==100) delay=80
    for(let i=0;i<size;i++){
        setTimeout(()=>{
            setTimeout(()=>{
                divs[i].style.backgroundColor = lightGreen;//making the current as light green
            },g+=delay/10)
            let current = div_sizes[i];
            let j=i-1;
            setTimeout(()=>{
                while(div_sizes[j]>current && j>=0){
                    //divs[j].style.backgroundColor='red';//color
                    divs[j+1].style.backgroundColor='red';//update
                    div_sizes[j+1]=div_sizes[j];
                    divs[j].style.height = div_sizes[j]+'%';//height
                    divs[j+1].style.height = div_sizes[j+1]+'%';//update
                    j--;
                }
            },g+=delay/8);
            setTimeout(()=>{
                div_sizes[j+1]=current;
                divs[j+1].style.height = div_sizes[j+1]+'%';
                divs[j+1].style.backgroundColor = lightGreen;//now when we put the current in its position make it as green to indicate it is here now
            },g+=delay/5)
            setTimeout(()=>{
                for(let k=0;k<=i;k++) {
                    setTimeout(()=>{//can remove it if you dont want multiple reds
                        divs[k].style.backgroundColor = yellow;//color update for the divs of the iteration
                    },k*5);
                }
            },g+=delay/2);
        },c+=delay);
        if(i+1==size) setTimeout(()=>{release();},c+=delay);
    }

    function release(){
        setTimeout(()=>{
            //divs[size-1].style.backgroundColor = yellow;
            enable_buttons();
            document.getElementById('insertionDetail').style.display = 'none';
            insertion.style.backgroundColor=blue;//make the button offˀ
            insertion.style.color=yellow;
        },c)
        
    }
}