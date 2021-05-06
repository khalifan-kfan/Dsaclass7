//1
function select() {
    if (document.getElementById("0b").value == "" ||
        document.getElementById("1b").value == "" ||
        document.getElementById("2b").value == "" ||
        document.getElementById("3b").value == "" ||
        document.getElementById("4b").value == "" ||
        document.getElementById("5b").value == ""
    ) {
        alert("Please enter all values");
        return;
    }
    var arr = [parseInt(document.getElementById("0b").value),
    parseInt(document.getElementById("1b").value),
    parseInt(document.getElementById("2b").value),
    parseInt(document.getElementById("3b").value),
    parseInt(document.getElementById("4b").value),
    parseInt(document.getElementById("5b").value),
    ];
    var sorted = SelectionSort(arr);
    if (sorted.length < 5) {
        alert("Something is wrong");
    } else {
        document.getElementById("Ssorted").innerHTML = "Selection sort: " + sorted;
    }
}
function insertin() {
    if (document.getElementById("0bi").value == "" ||
        document.getElementById("1bi").value == "" ||
        document.getElementById("2bi").value == "" ||
        document.getElementById("3bi").value == "" ||
        document.getElementById("4bi").value == "" ||
        document.getElementById("5bi").value == ""
    ) {
        alert("Please enter all values");
        return;
    }
    var arr = [parseInt(document.getElementById("0bi").value),
    parseInt(document.getElementById("1bi").value),
    parseInt(document.getElementById("2bi").value),
    parseInt(document.getElementById("3bi").value),
    parseInt(document.getElementById("4bi").value),
    parseInt(document.getElementById("5bi").value),
    ];
    var sorted = insertionSort(arr, arr.length);
    if (sorted.length < 5) {
        alert("Something is wrong");
    } else {
        document.getElementById("Isorted").innerHTML = "Insertion sort: " + sorted;
    }
}
function bubblin() {
    if (document.getElementById("0bb").value == "" ||
        document.getElementById("1bb").value == "" ||
        document.getElementById("2bb").value == "" ||
        document.getElementById("3bb").value == "" ||
        document.getElementById("4bb").value == "" ||
        document.getElementById("5bb").value == ""
    ) {
        alert("Please enter all values");
        return;
    }
    var arr = [parseInt(document.getElementById("0bb").value),
    parseInt(document.getElementById("1bb").value),
    parseInt(document.getElementById("2bb").value),
    parseInt(document.getElementById("3bb").value),
    parseInt(document.getElementById("4bb").value),
    parseInt(document.getElementById("5bb").value),
    ];
    var sorted = bubbleSort(arr);
    if (sorted.length < 5) {
        alert("Something is wrong");
    } else {
        document.getElementById("Bsorted").innerHTML = "Bubble sort: " + sorted;
    }
}
function mergin() {
    if (document.getElementById("0bm").value == "" ||
        document.getElementById("1bm").value == "" ||
        document.getElementById("2bm").value == "" ||
        document.getElementById("3bm").value == "" ||
        document.getElementById("4bm").value == "" ||
        document.getElementById("5bm").value == ""
    ) {
        alert("Please enter all values");
        return;
    }
    var arr = [parseInt(document.getElementById("0bm").value),
    parseInt(document.getElementById("1bm").value),
    parseInt(document.getElementById("2bm").value),
    parseInt(document.getElementById("3bm").value),
    parseInt(document.getElementById("4bm").value),
    parseInt(document.getElementById("5bm").value),
    ];
    var sorted = mergeSort(arr);
    if (sorted.length == 0) {
        alert("Something is wrong");
    } else {
        document.getElementById("Msorted").innerHTML = "Merge sort: " + sorted;
    }
}


function SelectionSort(arr) {
    var n = arr.length;
    /* One by one move boundary of unsorted subarray*/
    for (var i = 0; i < n - 1; i++) {
        /* Find the minimum element in unsorted array*/
        var min_idx = i;
        for (var j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        /* Swap the found minimum element with the first
        // element*/
        var temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

//2
/* let n = arr.length; */
function insertionSort(arr, n) {
    let i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
//3
function bubbleSort(arr) {
    let n = arr.length;
    let checked;
    do {

        checked = false;
        for (let i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                checked = true;

            }
        }
    } while (checked);

    return arr;
}

//4
function mergeSort(array) {
    const half = array.length / 2
    // Base case or terminating case
    if (array.length < 2) {
        return array
    }
    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array));
}

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return arr.concat(left, right);
}


/* A utility function to print array of size n */
function printArray(arr) {
    var n = arr.length;
    for (var i = 0; i < n; ++i)
        System.out.print(arr[i] + " ");
    System.out.println();
}

//5
function quickin(){
    if (document.getElementById("0bq").value == "" ||
    document.getElementById("1bq").value == "" ||
    document.getElementById("2bq").value == "" ||
    document.getElementById("3bq").value == "" ||
    document.getElementById("4bq").value == "" ||
    document.getElementById("5bq").value == ""
) {
    alert("Please enter all values");
    return;
}
var arr = [parseInt(document.getElementById("0bq").value),
parseInt(document.getElementById("1bq").value),
parseInt(document.getElementById("2bq").value),
parseInt(document.getElementById("3bq").value),
parseInt(document.getElementById("4bq").value),
parseInt(document.getElementById("5bq").value),
];
var sorted = mergeSort(arr);
if (sorted.length < 0) {
    alert("Something is wrong");
} else {
    document.getElementById("Qsorted").innerHTML = "Quick sort: " + sorted;
}

}


function partition(arr, low, high) {
    // pivot
    var pivot = arr[high];

   
    var i = (low - 1);
    for (var j = low; j <= high - 1; j++) {

        // If current element is smaller 
        // than the pivot
        if (arr[j] < pivot) {
            // Increment index of 
            // smaller element
            i++;
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;       
        }
    }  
    var temp = arr[i+1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return (i + 1);
}


function quickSort(arr, low, high) {
    if (low >= high) {
        return arr;
    }

    if (low < high) {
      
        // pi is partitioning index, arr[p]
        // is now at right place 
        var pi = partition(arr, low, high);
        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    
}

