class CircularQueue {
    constructor(size) {
        this.element = [];
        this.size = size
        this.length = 0
        this.front = 0
        this.back = -1
    }
    isEmpty() {
        return (this.length == 0)
    }
    enqueue(element) {
        if (this.length >= this.size) alert("No elements in the queue");
        this.back++
        this.element[this.back % this.size] = element
        this.length++
        return element;
    }
    dequeue() {
        if (this.isEmpty()) alert("No elements in the queue");
        const value = this.getFront()
        this.element[this.front % this.size] = null
        this.front++
        this.length--
        return value
    }
    getFront() {
        if (this.isEmpty()) alert("No elements in the queue");
        return this.element[this.front % this.size]
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.element.length; i++)
            str += this.element[i] + " ";
        return str;
    }
    clear() {
        this.element = new Array()
        this.length = 0
        this.back = 0
        this.front = -1
    }
}
class Queuerunc {
    constructor() {
        this.queue = new CircularQueue(6);
    }
}
var que = new Queuerunc();

function enqc() {
    if (document.getElementById("newquc").value == "") {
        alert("Enter value to enqueue");
        return;
    }
    var result = que.queue.enqueue(document.getElementById("newquc").value);
    if (result == "") {
    } else {
        document.getElementById("enquedc").innerHTML = result + " has been enqueued";
        document.getElementById("queue_c").innerHTML = que.queue.printQueue();
    }

}
function dequec() {
    var result = que.queue.dequeue();
    if (result == -1) {
        alert("First add to the queue, its empty");
    } else {
        document.getElementById("dequedc").innerHTML = result;
        document.getElementById("queue_c").innerHTML = que.queue.printQueue();
    }

}
function Topc() {
    var result = que.queue.getFront();
    if (result == -1) {
        alert("First add to the stack, its empty");
    } else {
        document.getElementById("attopc").innerHTML = result + " is at the front";
    }

}