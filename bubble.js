function bubbleSort(){
    let n = size;
    c=0,z=0;
    var g=10;
    if(delay==1600){
        g=10;
    }else if(delay==1200){
        g=25;
    }else if(delay==800){
        g=50;
    }else if(delay==400){
        g=75;
    }else if(delay==100){
        g=100;
    }
    for(let i = 0;i<n-1;i++){ //outer loop
        setTimeout(() =>{
            for(let j = 0;j<n-i-1;j++){ //inner loop
                setTimeout(() =>{
                    divs[j].style.backgroundColor = lightGreen;
                    divs[j+1].style.backgroundColor = lightGreen;
                },z += (delay/g));
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
                },z += (delay/(g/2)));
            }
        },c += delay);
    }
    setTimeout(() =>{//for the last one to be green
        divs[0].style.backgroundColor = yellow;
        enable_buttons();
        document.getElementById('bubbleDetail').style.display = 'none';
    },size*size+g*(g/2));
}