function PhotoTagClicked(button){
    if(!button.classList.contains('Disabled')){
        button.classList.add('Disabled')
    }
    else{
        button.classList.remove('Disabled')
    }
    console.log(button.getAttribute("tag"));
}