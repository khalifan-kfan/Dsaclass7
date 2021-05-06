const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

//get submit values
const submit = document.getElementsByClassName('submit')[0];
var numberInput = document.getElementsByClassName('number')[0];
const tower1 = document.getElementsByClassName('tower1')[0];

submit.addEventListener('click', (e) => {
    const number = parseInt(numberInput.value);
    towerOfHanoi(number);
    numberInput.value = "";
    e.preventDefault();
});



async function towerOfHanoi(number) {
    const a = [];
    const b = [];
    const c = [];

    let iterator = number;
    
    for (iterator; iterator > 0; iterator--) {
        a.push(iterator);
    }    

    a.forEach((item) => {
    element = document.createElement("div");
    element.className = "disk";
    element.setAttribute("id", item);
    const style = {
      width: 166 / (number+1)*item + "px",
      bottom: a.indexOf(item)*10 + "px",
      background: "rgb(" +Math.floor(Math.random()*256) +"," +Math.floor(Math.random()*256) +"," +Math.floor(Math.random()*256) +")",
      transform: "translateX(0px)"
    }
    Object.assign(element.style, style);
    tower1.appendChild(element);
  });

  
    if (number % 2 != 0) {
        while (c.length < number) {
            await moveDisk(a, c, c, number, 2);
            await moveDisk(a, b, c, number, 1);
            await moveDisk(b, c, c, number, 1)
        }
    } else {
        while (c.length < number) {
            await moveDisk(a, b, c, number, 1);
            await moveDisk(a, c, c, number, 2);
            await moveDisk(b, c, c, number, 1);
        }
    }
};

// move disk function, parameters are start, destination, finsh peg and distance between start and destination
async function moveDisk(a, b, c, number, distance) {
    if (c.length == number) {
        await delay(250);
        document.location.reload();
        await delay(250);
        return;
    }


    if (!a.length && b.length) {
        await draw(b, a, distance * -1);
        a.push(b[b.length - 1]);
        b.pop();
    } else if (!b.length && a.length) {
        await draw(a, b, distance);
        b.push(a[a.length - 1]);
        a.pop();

    } else {
        if (a[a.length - 1] < b[b.length - 1]) {
            while (a[a.length - 1] < b[b.length - 1]) {
                await draw(a, b, distance);
                b.push(a[a.length - 1]);
                a.pop();
            }

        } else if (b[b.length - 1] < a[a.length - 1]) {
            while (b[b.length - 1] < a[a.length - 1]) {
                await draw(b, a, distance * -1);
                a.push(b[b.length - 1]);
                b.pop();
            }
        }
    }
};

//moving function: this should animate the disks
async function draw(a, b, distance) {
    num = a[a.length - 1].toString();
    disk = document.getElementById(num);

    //get current translateX css value and then add the distance between start and destination peg
    regEx = /\.*translateX\((.*)px\)/i;
    translate = disk.getAttribute('style')
    value = parseInt(regEx.exec(translate)[1]) + (distance * 166);

    //move disk up 
    disk.style.bottom = "385px";
    await delay(250);
    //move disk to the destination peg
    disk.style.transform = "translateX(" + value + "px)";
    await delay(250);
    //drop disk
    disk.style.bottom = b.length * 20 + "px";
    await delay(250);
};


