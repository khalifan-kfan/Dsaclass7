class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {

        this.items.push(element);
        return element;
    }
    pop() {

        if (this.items.length == 0)
            return -1;

        return this.items.pop();
    }
    peek() {
        if (this.items.length == 0)
            return -1;
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}
class Stackrun {
    constructor() {
        this.stack = new Stack();
    }
}

var sta = new Stackrun();

function PushST() {
    if (document.getElementById("newSt").value == "") {
        alert("Enter value to push")
        return;
    }
    var result = sta.stack.push(document.getElementById("newSt").value);
    if (result == "") {
    } else {
        document.getElementById("pushed").innerHTML = result + " has been pushed";
        document.getElementById("stack_").innerHTML = sta.stack.printStack();
    }
}

function PopST() {
    var result = sta.stack.pop();
    if (result == -1) {
        alert("First add to the stack, its empty");
    } else {
        document.getElementById("poped").innerHTML = result + " has been poped";
        document.getElementById("stack_").innerHTML = sta.stack.printStack();
    }
}
function peekST() {
    var result = sta.stack.peek();
    if (result == -1) {
        alert("First add to the stack, its empty");
        return;
    } else {
        document.getElementById("peeked").innerHTML = sta.stack.peek() + " is at the top";
    }

}


