const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
  
delay(1000).then(() => RunGlitchEffect());
  
function RunGlitchEffect(){
    let iteration = 0;

    clearInterval(interval);
      
    interval = setInterval(() => {
        HackerEffect.innerText = HackerEffect.innerText
            .split("")
            .map((letter, index) => {
            if(index < iteration) {
              return HackerEffect.dataset.value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
        
        if(iteration >= HackerEffect.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 10);
}
