function bubbleSort(){
    let n = size;
    c=0,z=0;
    for(let i = 0;i<n-1;i++){ //outer loop
        setTimeout(() =>{
            console.log(c);
            for(let j = 0;j<n-i-1;j++){ //inner loop
                setTimeout(() =>{
                    divs[j].style.backgroundColor = lightGreen;
                    divs[j+1].style.backgroundColor = lightGreen;
                },z += (delay/10));
                setTimeout(() =>{
                    if(div_sizes[j]>div_sizes[j+1]){//swap work
                        let temp = div_sizes[j];
                        div_sizes[j] = div_sizes[j+1];
                        div_sizes[j+1] = temp;
                        divs[j].style.height = div_sizes[j]+'%';
                        divs[j+1].style.height = div_sizes[j+1]+'%';
                    }
                    divs[j].style.backgroundColor = blue;//again making j, j+1 blue
                    divs[j+1].style.backgroundColor = blue;
                     if(j+1 == n-i-1) divs[j+1].style.backgroundColor = yellow;//so when the last time of j comes make it as yellow
                },z += (delay/5));
            }
        },c += delay);
    }
    setTimeout(() =>{//for the last one to be green
        divs[0].style.backgroundColor = yellow;
        enable_buttons();
        document.getElementById('bubbleDetail').style.display = 'none';
    },size/2*delay*size/2-delay*5);
}