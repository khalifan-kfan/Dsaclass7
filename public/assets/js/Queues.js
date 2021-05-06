class Queue {
    // Array is used to implement a Queue
    constructor() {
        this.items = [];
    }
    enqueue(element) {

        this.items.push(element);
        return element;
    }
    dequeue() {

        if (this.isEmpty())
            return -1;
        return this.items.shift();
    }
    peek() {

        if (this.isEmpty())
            return -1;
        return this.items[0];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}
class Queuerun {
    constructor() {
        this.queue = new Queue();
    }
}
var que = new Queuerun();

function enq() {
    if (document.getElementById("newqu").value == "") {
        alert("Enter value to enqueue");
        return;
    }
    var result = que.queue.enqueue(document.getElementById("newqu").value);
    if (result == "") {
    } else {
        document.getElementById("enqued").innerHTML = result + " has been enqueued";
        document.getElementById("queue_").innerHTML = que.queue.printQueue();
    }

}
function deque() {
    var result = que.queue.dequeue();
    if (result == -1) {
        alert("First add to the stack, its empty");
    } else {
        document.getElementById("dequed").innerHTML = result;
        document.getElementById("queue_").innerHTML = que.queue.printQueue();
    }

}
function Top() {
    var result = que.queue.peek();
    if (result == -1) {
        alert("First add to the stack, its empty");
    } else {
        document.getElementById("attop").innerHTML = result + " is at the front";
    }

}
