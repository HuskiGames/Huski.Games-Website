var site = document.getElementById("Content").innerHTML;
    
var LineNum = 1;

var color1 = "gray"
var color2 = "lightblue"
var color3 = "orange"
var color4 = "lime"
var color5 = "white"
var color6 = "yellow"
var color7 = "lightcoral"

write(['1 <', '1 !', '2 DOCTYPE','3  html','1 >']);
write(['1 <', '2 html', '3  lang','1 =','4 "en"', '1 >']);
write(["t 1"]);
write(['1 <', '2 head', '1 >']);
write(["t 1",'1 <', '2 meta', '3  charset', '1 =', '4 "UTF-8"', '1 >']);
write(["t 1",'1 <', '2 title', '1  >', '5 Desktop', '1 <', '2 /title', '1 >']);
write(['1 <', '1 /', '2 head', '1 >']);
write(["t 1"]);
write(['1 <', '2 body', '1 >']);
write(["t 1",'1 <', '2 div ', '3 id', '1 =', '4 "Content"', '1 >', '1 <', '2 /div', '1 >']);
write(['1 <', '1 /', '2 body', '1 >']);
write(['1 <', '1 /', '2 html', '1 >']);
write(["t 1"]);
write(['1 <', '2 script', '1 >']);
write(['t 1', '5 document', '3 .getElementById', '6 (', '4 "Content"', '6 )', '3 .', '5 innerHTML', '7  = ','4 "/Desktop.html"', '5 ;']);
write(['1 <', '1 /', '2 script', '1 >']);


document.getElementById("Content").innerHTML = site;

function write(input){
    site += '<div class="line">'
    site += '<span style="color: gray;">' + LineNum + '</span>'
    site += '<span style="color: #00000000;">';
        for (var x = 0; x < 5; x++) {
            site += '_';
        }
    site += '</span>';


    input.forEach(element => {
        colour = element[0]
        text = element.substr(2, element.length - 1);
        
        if(element[0] == "t"){
            site += '<span style="color: #00000000">';
                for (var x = 0; x < text * 3; x++) {
                    site += '_';
                }
        site += '</span>';
    }
    else{
        switch(colour) {
            case "1":
            site += '<span style="color: ' + color1 + ';">';
            break;
            
            case "2":
            site += '<span style="color: ' + color2 + ';">';
            break;
                
            case "3":
            site += '<span style="color: ' + color3 + ';">';
            break;
                        
            case "4":
            site += '<span style="color: ' + color4 + ';">';
            break;

            case "5":
            site += '<span style="color: ' + color5 + ';">';
            break;
            
            case "6":
            site += '<span style="color: ' + color6 + ';">';
            break;

            case "7":
            site += '<span style="color: ' + color7 + ';">';
            break;
            default:
                site += '<span>';
                }
                site += text + "</span>";
            }
        });
    site += '</div>'
    LineNum++;
}

setInterval(updateTime, 1000);
updateTime();

function updateTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;  // If hours is 0, set it to 12
            const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('timeh').innerText = hours;
    document.getElementById('timem').innerText = minutes;
}
