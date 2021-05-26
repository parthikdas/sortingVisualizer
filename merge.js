function mergeFun(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 
    var L = new Array(n1);// Create temp arrays
    var R = new Array(n2);
 
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
  
    var i = 0;// Initial index of first subarray
    var j = 0;// Initial index of second subarray
    var k = l;// Initial index of merged subarray
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            divs[k].style.height=arr[k]+'%';
            i++;
        }
        else {
            arr[k] = R[j];
            divs[k].style.height=arr[k]+'%';
            j++;
        }
        k++;
    }

    while (i < n1) { //Copy the remaining elements of L[], if there are any
        arr[k] = L[i];
        divs[k].style.height=arr[k]+'%';
        i++;
        k++;
    }
 
    while (j < n2) { //Copy the remaining elements of R[], if there are any
        arr[k] = R[j];
        divs[k].style.height=arr[k]+'%';
        j++;
        k++;
    }
}

function mergeSort(div_sizes,l, r){
    if(l>=r){
        enable_buttons();
        document.getElementById('mergeDetail').style.display = 'none';
        merge.style.backgroundColor=blue;//make the button off
        merge.style.color=yellow;
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(div_sizes,l,m);
    mergeSort(div_sizes,m+1,r);
    mergeFun(div_sizes,l,m,r);
}