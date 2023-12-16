function changeColor(squareid){
    var square = document.getElementById(squareid);
    var randomColor = getRandomColor();
    square.style.background = randomColor;
    alert("Color Changed");
}

alert("this is working!")
function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function flashColors(){
    var flashes = document.querySelectorAll('.flash');
    flashes.forEach(changeflash());
    var ark1 = getElementById("title")
    function changeflash(){
        for ( var i=0; i < 9; i++){
            var rcolor = getRandomColor()
            var ark = flashes[i]
            ark.style.backgroundColor = rcolor;
        }
    }

}
var skib = prompt("How fast do you want them to change")
setInterval(flashColors, skib)