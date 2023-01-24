// initial reference
const colorCode = document.querySelector('.colorCode');
const newGameBtn = document.querySelector('.new-game');
const colorOptions = document.querySelector('.colorOptions');
const box = document.querySelectorAll('.box');
const message = document.querySelector('.messageDisplay');
var h1 = document.querySelector('h1')



// random color code generator
function randomColorCode() {
    
    var value1 = Math.round(Math.random() * 256);
    var value2 = Math.round(Math.random() * 256);
    var value3 = Math.round(Math.random() * 256);
    
    return `rgb(${value1}, ${value2}, ${value3})`
}


// random color for boxes
function randomColorBoxes() {
    var arr = [];
    for (let index = 0; index < 6; index++) {
        arr[index] = randomColorCode();
    }
    return arr;
}



// random color from the six given boxes colors
function randomColorCodeG(color) {
    return color[Math.round(Math.random() * color.length)];
}



// generate 6 color codes
var color = randomColorBoxes();
// randomly picked one of them
var pickedColor = randomColorCodeG(color);


// initial function to begin
function initializer(color, pickedColor) {
    
    newGameBtn.classList.add("hide");
    message.classList.add("hide");

    // random color display
    colorCode.innerHTML = pickedColor;
    
    for (let i = 0; i < 6; i++) {
        box[i].style.backgroundColor = color[i];
        box[i].style.opacity = 1;
    }
    
    //Checking if the box we clicked is equals to the color picked 
    box.forEach(element => {
        element.addEventListener("click", () => {
            var clickedColor = element.style.backgroundColor;

            // if the clicked color is pickedColor
            if (clickedColor === pickedColor) {

                colorOptions.classList.add("hide");
                newGameBtn.classList.remove("hide");
                message.classList.remove("hide");
                
                message.textContent = "Correct Answer";
                message.style.color = pickedColor;
                newGameBtn.style.backgroundColor = pickedColor;
                
                h1.style.background = clickedColor;
                
            }
            
            else {
                element.style.opacity = 0.3;
            }
        });
    });
}


window.onload = initializer(color, pickedColor);

// reset game 
newGameBtn.addEventListener("click", () => {
    
    colorOptions.classList.remove("hide");
    h1.style.background = "black";
    
    var color1 = randomColorBoxes();
    var pickedColor1 = randomColorCodeG(color1);
    
    console.log(color1, pickedColor1);
    initializer(color1, pickedColor1);
});


// problem - it gives Undefined rgb val