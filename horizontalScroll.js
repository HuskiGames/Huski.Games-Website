Container1 = document.getElementById("Container1")
Container2 = document.getElementById("Container2")
Container3 = document.getElementById("Container3")

Container1.style.marginLeft = "0px";
Container2.style.marginLeft = "0px";
Container3.style.marginLeft = "0px";

let changeAmount = 0.002;
//changeAmount = 0;

let Container1Position = -50;
let Container2Position = 0;
let Container3Position = -50;

let Container1List = Container1.innerHTML.split('\n')
let Container2List = Container2.innerHTML.split('\n')
let Container3List = Container3.innerHTML.split('\n')

Container1List.pop();
Container1List.shift();

Container2List.pop();
Container2List.shift();

Container3List.pop();
Container3List.shift();


let lastTimestamp = performance.now();
let frameCount = 0;



function update(timestamp) {
    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;  
    // Your update logic here

    Container1Position += changeAmount * deltaTime;
    Container2Position -= changeAmount * deltaTime; 
    Container3Position += changeAmount * deltaTime;     

    Container1.style.marginLeft = Container1Position + "vw";
    Container2.style.marginLeft = Container2Position + "vw";
    Container3.style.marginLeft = Container3Position + "vw";


    if(Container1Position > 0){
      setTimeout(ShiftStuff, 0);
    }


    // Calculate FPS
    const currentFPS = 1000 / deltaTime; // Convert milliseconds to seconds
    //displayFPS(currentFPS, deltaTime);

    requestAnimationFrame(update);
}

function ShiftStuff(){
  Container1Position -= 30.2;
  lastItem = Container1List.pop();
  Container1List.unshift(lastItem);
  Container1.innerHTML = Container1List;


  Container2Position += 30.2; 
  firstItem = Container2List.shift();
  Container2List.push(firstItem);
  Container2.innerHTML = Container2List;


  Container3Position -= 30.2;
  lastItem = Container3List.pop();
  Container3List.unshift(lastItem);
  Container3.innerHTML = Container3List;
}

function displayFPS(fps, deltaTime) {
  console.log(fps.toFixed(2) + '   ' + deltaTime);
}

requestAnimationFrame(update);
