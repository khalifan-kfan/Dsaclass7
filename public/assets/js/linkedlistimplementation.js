





class Node {
    constructor(item){
        this.item =  item;
        this.next = null;
    }
}


class LinkedList{
    constructor()
    {
        this.head = null;
        this.size = 0;

    }
    add(item){
        //new node
        var node = new Node(item);
        //store current node
        var current;
        //if list is empty element should be head
        if(this.head==null){
            this.head= node;
        }else{
            current= this.head;
            //iterate to end of the list
            while(current.next){
                current = current.next;
            }
            //add node
            current.next = node;

        }
        this.size++;
       return item;
    }
    isEmpty(){
        return this.size == 0;
    }
    SizeOfList(){
        return this.size; 
   }

   //at a position
   insertAt(item, index){

    if (index < 0 || index > this.size)

        return console.log("Please enter a valid index.");
    else {
        // creates a new node
        var node = new Node(item);
        var curr, prev;
 
        curr = this.head;
 
        // add the element to the
        // first index
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;
 
            // iterate over the list to find
            // the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;
        return item;
    }
}
removeElement(item)
{
    var current = this.head;
    var prev = null;
 
    // iterate over the list
    while (current != null) {
        // comparing element with current
        // element if found then remove the
        // and return true
        if (current.item === item) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    // dint get the element
    return -1;
}
indexOf(item)
{
    var count = 0;
    var current = this.head;
 
    // iterate over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.item === item)
            return count;
        count++;
        current = current.next;
    }
 
    // not found
    return -1;
}
// prints the list items
printList()
{
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.item + " ";
        curr = curr.next;
    }
    return str;
}
}
class Linkedrun{
    
   constructor(){
     this.list = new LinkedList(); 
   }   
}

var  run = new Linkedrun();

function Add_new(){
    if(document.getElementById("new").value ==""){
        alert("Enter value to add")
        return;
    }
    var result;
        result =   run.list.add(document.getElementById("new").value);
        if (result == ""){

        }else{
            document.getElementById("adding").innerHTML= result +" "+ "has been added";
            document.getElementById("new").innerHTML = "";
            document.getElementById("size").innerHTML = run.list.SizeOfList();
            document.getElementById("list_").innerHTML = run.list.printList();
        }
}
function insertAt(){
    if(document.getElementById("AT").value ==""|| document.getElementById("ATIND").value == ""){
        alert("Enter the values");
        return;
    }
    var result;
        result =   run.list.insertAt(document.getElementById("AT").value,
        document.getElementById("ATIND").value);
        if (result == ""){

        }else{
            document.getElementById("inserted").innerHTML= result +" "+ "has been inserted";
            document.getElementById("AT").innerHTML = "";
            document.getElementById("ATIND").innerHTML="";

            document.getElementById("size").innerHTML = run.list.SizeOfList();
            document.getElementById("list_").innerHTML = run.list.printList();
        }

}
function Remove(){
    if(document.getElementById("out").value ==""){
        alert("Enter value to remove")
        return;
    }
    var result;
    result =   run.list.removeElement(document.getElementById("out").value);
    if(result == -1){
        document.getElementById("removed").innerHTML= "This item is not";
    }else {
        document.getElementById("inserted").innerHTML= result +" "+ "Has been removed";
        document.getElementById("out").innerHTML = "";

        document.getElementById("size").innerHTML = run.list.SizeOfList();
        document.getElementById("list_").innerHTML = run.list.printList();

    }
}
function find(){
    if(document.getElementById("el_index").value ==""){
        alert("Enter the element");
        return;
    }
    var result;
    result =   run.list.indexOf(document.getElementById("el_index").value);
    if(result == -1){
        document.getElementById("el_index").innerHTML= "This item is not in the list";
    }
    else {
    document.getElementById("index_of").innerHTML=  "It is at postion " +result +", "+ "Got it";   
}
}



