function insertionSort(){
    c=0;let g=0
    for(let i=0;i<size;i++){
        //setTimeout(()=>{
            divs[i].style.backgroundColor = lightGreen;//making the current as light green
            let current = div_sizes[i];

            let j=i-1;
            while(div_sizes[j]>current && j>=0){
                // divs[j].style.backgroundColor='red';//color
                // divs[j+1].style.backgroundColor='red';//update
                
                div_sizes[j+1]=div_sizes[j];

                divs[j].style.height = div_sizes[j]+'%';//height
                divs[j+1].style.height = div_sizes[j+1]+'%';//update
                
                // divs[j].style.backgroundColor=blue;
                // if(j==(i-1))
                // {
                //     divs[j].style.backgroundColor=yellow;//Color update
                // }
                // else
                // {
                //     divs[j].style.backgroundColor=blue;//Color update
                // }
                j--;
            }
            // divs[i].style.backgroundColor = blue;
            div_sizes[j+1]=current;
            divs[j+1].style.height = div_sizes[j+1]+'%';
            // divs[j+1].style.backgroundColor = yellow;
            //for(let i=0;i<j;i++) divs[i].style.backgroundColor = yellow;
        //},c+=500)
    }
    enable_buttons();
    document.getElementById('insertionDetail').style.display = 'none';
    insertion.style.backgroundColor=blue;//make the button offˀ
    insertion.style.color=yellow; 
}