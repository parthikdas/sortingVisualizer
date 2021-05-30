function bubbleSort(){
    var g;
    let n = size;
    c=0,z=0;
    g=10;
    if(delay==1600){
        g=10;
    }else if(delay==1200){
        g=25;
    }else if(delay==800){
        g=50;
    }else if(delay==400){
        g=65;
    }else if(delay==100){
        delay=20 // made it little faster 
        g=100;//80, make above 16 multiple
    }
    for(let i = 0;i<n-1;i++){ //outer loop
        setTimeout(() =>{
            for(let j = 0;j<n-i-1;j++){ //inner loop
                setTimeout(() =>{
                    divs[j].style.backgroundColor = lightGreen;
                    divs[j+1].style.backgroundColor = 'red';
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
            if(i+1==n-1)  setTimeout(release,c+=delay);//for the last iteration
        },c += delay);
    }
    
    function release(){
        var x;
        if(size<=80) x=c-delay*2;
        else if(size>80 && size<=134) x=c;
        else { //size is >134
            if(delay==100) x=c+delay*(g/2);//speed 5
            else if(delay==400) x=c+delay*(g/0.5); //speed 4
            else if(delay==800) x=c+delay*(g); //speed 3
            else if(delay==1200) x=c+delay*(g*0.5); //speed 2
            else x=c+delay*(g*2); //speed 1    
        }
        setTimeout(() =>{//for the last one to be green
            divs[0].style.backgroundColor = yellow;
            enable_buttons();
            document.getElementById('bubbleDetail').style.display = 'none';
            bubble.style.backgroundColor=blue;//make the button off
            bubble.style.color=yellow;
        },x);
    }
}