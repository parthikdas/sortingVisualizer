function mergeFun(l, m, r){   
    setTimeout(()=>{
        var n1 = m - l + 1;
        var n2 = r - m;
        var L = new Array(n1);// Create temp arrays
        var R = new Array(n2);
        for (var i = 0; i < n1; i++){
            L[i] = div_sizes[l + i];
            divs[l+i].style.backgroundColor=lightGreen
        }
        for (var j = 0; j < n2; j++){
            R[j] = div_sizes[m + 1 + j];
            divs[m+1+j].style.backgroundColor=lightGreen
        }
        var i=0, j=0;// Initial index of first, second subarray
        var k=l;// Initial index of merged subarray
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                div_sizes[k] = L[i++];
                divs[k].style.height=div_sizes[k]+'%';
                divs[k].style.backgroundColor=lightGreen
            }
            else {
                div_sizes[k] = R[j++];
                divs[k].style.height=div_sizes[k]+'%';
                divs[k].style.backgroundColor=lightGreen
            }
            k++;
        }
        while (i < n1) { //Copy the remaining elements of L[], if there are any
            div_sizes[k] = L[i++];
            divs[k].style.height=div_sizes[k]+'%';
            divs[k].style.backgroundColor=lightGreen
            k++;
        }
    
        while (j < n2) { //Copy the remaining elements of R[], if there are any
            div_sizes[k] = R[j++];
            divs[k].style.height=div_sizes[k]+'%';
            divs[k].style.backgroundColor=lightGreen
            k++;
        }
        setTimeout(()=>{
            for(let y=0;y<k;y++){
                divs[y].style.backgroundColor=yellow
            }
        },delay/2)
    },c+=delay/6) 
}
function mergeSort(l, r){
    if(l>=r){
        setTimeout(()=>{
            release();  
        },c+=delay);
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    setTimeout(()=>{
        divs[m].style.backgroundColor = 'red';
    },c+=delay/2);
    mergeSort(l,m);
    mergeSort(m+1,r);
    mergeFun(l,m,r);
    
    function release(){
        setTimeout(()=>{
            enable_buttons();
            document.getElementById('mergeDetail').style.display = 'none';
            merge.style.backgroundColor=blue;//make the button off
            merge.style.color=yellow;
        },c+=delay);
    }
}
function mergeSortF(){
    c=0;
    mergeSort(0,size-1);
}