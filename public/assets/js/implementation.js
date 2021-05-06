

function insert() {
  if (document.getElementById("0").value == "" ||
    document.getElementById("1").value == "" ||
    document.getElementById("2").value == "" ||
    document.getElementById("3").value == "" ||
    document.getElementById("4").value == "" ||
    document.getElementById("5").value == ""
  ) {
    alert("Please enter all values");
    return;
  }
  var array = [
    document.getElementById("0").value,
    document.getElementById("1").value,
    document.getElementById("2").value,
    document.getElementById("3").value,
    document.getElementById("4").value,
  ];

  var taget = document.getElementById("before");


  taget.innerHTML = "before insertion:" + array;

  pos = 3;
  x = document.getElementById("5").value;
  for (var i = (array.length - 1); i >= (pos - 1); i--) {
    array[i + 1] = array[i];
  }
  array[pos - 1] = x;

  document.getElementById("after").innerHTML = "After insertion:" + array;

}

function seach() {
  if (document.getElementById("0a").value == "" ||
    document.getElementById("1a").value == "" ||
    document.getElementById("2a").value == "" ||
    document.getElementById("3a").value == "" ||
    document.getElementById("4a").value == "" ||
    document.getElementById("5a").value == ""
  ) {
    alert("Please enter all values");
    return;
  }
  var array = [
    parseInt(document.getElementById("0a").value),
    parseInt(document.getElementById("1a").value),
    parseInt(document.getElementById("2a").value),
    parseInt(document.getElementById("3a").value),
    parseInt( document.getElementById("4a").value),
  ];
  var flag = 0;
  var num = document.getElementById("5a").value;
  var taget = document.getElementById("before-1");
  taget.innerHTML = "Formed array:" + array;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === num) {
      flag = 1;
      break;
    }
  }
  if (flag == 1) {
    document.getElementById("result").innerHTML = "Element Found";
  }
  else {
    document.getElementById("result").innerHTML = "Element not found";
  }

}
function Drive(){
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
var arr = [ parseInt(document.getElementById("0b").value),
parseInt( document.getElementById("1b").value),
parseInt( document.getElementById("2b").value),
parseInt(document.getElementById("3b").value),
parseInt( document.getElementById("4b").value),
];
  var x = parseInt(document.getElementById("5b").value);
 
  if (BinarySeach(arr, x, 0, arr.length - 1)){
    document.getElementById("before-11").innerHTML = "array formed: " + arr;
    document.getElementById("result-11").innerHTML = "Element found!";
  }else{
    document.getElementById("before-11").innerHTML = "array formed: " + arr;
    document.getElementById("result-11").innerHTML = "Element not found!";
  }

}

function BinarySeach(arr, x, start, end) {
  if (start > end) return false;
  var mid = Math.floor((start + end) / 2);

  if (arr[mid] === x) return true;

  if (arr[mid] > x)
    return BinarySeach(arr, x, start, mid - 1);
  else
    return BinarySeach(arr, x, mid + 1, end);
}

