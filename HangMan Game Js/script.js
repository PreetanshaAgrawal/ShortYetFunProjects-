//Initial references
const KeyContainer = document.querySelector('.keyboard');
const playAgainBtn = document.querySelector('.playAgain');
const newGameContainer = document.querySelector('.new-game-popup');
const resultText = document.querySelector('.resultText');
const optionContainer = document.querySelector('.options');
const canvas = document.querySelector('.hangMan');
const userInputSection = document.querySelector('.userInput');

// options list
const options = {
    fruits: ["apple", "banana", "guava", "pineapple", "mango", "kiwi", "blueberry", "lime", "blackberry", "orange", "watermelon"],
    animals: ["cat", "dog", "lion", "tiger", "elephant", "wolf", "panther", "walrus", "zebra"],
    country: ["India", "Indonesia", "Malaysia", "Kenya", "Canada", "Zimbabwe", "Dominica"]
};

// count 
let winCount = 0;
let count = 0;

// display option buttons
const displayOption = () => {
    optionContainer.innerHTML += `<h3>Please select a criteria</h3>`
    let optionBtnCon = document.createElement("div");
    for (let value in options) {
        optionBtnCon.innerHTML += `<button class ="option" onclick="generateWord('${value}')">${value}</button>`
    }
    optionContainer.appendChild(optionBtnCon);
}


// choose random word
let chosenWord = "";
const generateWord = (optionValue) => {
    // hide the options after the user selected the criteria
    optionContainer.classList.add('hide');
    
    KeyContainer.classList.remove('hide');
    userInputSection.innerHTML = "";
    // initially hide the letters from the user    
    
    let optionArray = options[optionValue];

    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];

    chosenWord = chosenWord.toUpperCase();

    // replace every character with dashes
    let displayWord = chosenWord.replace(/./g, `<span class="dashes">_</span>`);

    userInputSection.innerHTML = displayWord;
};




// disable all buttons after the purpose is served
const blocker = () => {
    let letterButton = document.querySelectorAll('.letters');
    let optionButton = document.querySelectorAll('.option');

    // block all the letters
    letterButton.forEach(button => {
        button.disabled = true;
    });

    // block all the option buttons
    optionButton.forEach(button => {
        button.disabled = true;
    });

    // popup the new game container
    newGameContainer.classList.remove('hide');
}


// initial function called when the page is load or user taps in the new game button
const initializer = () => {

    winCount = 0;
    count = 0;

    // all content is hidden initially
    
    userInputSection.innerHTML = "";
    optionContainer.innerHTML = "";
    KeyContainer.classList.add('hide');
    optionContainer.classList.remove('hide');
    
    newGameContainer.classList.add('hide');
    KeyContainer.innerHTML = "";

    // keyboard buttons display

    for (let index = 65; index < 91; index++) {
        let button = document.createElement("button");
        button.classList.add("letters");

        button.innerHTML = String.fromCharCode(index);

        button.addEventListener('click', () => {
            
            let charArray = chosenWord.split("");
            let dashes = document.getElementsByClassName('dashes');

            if(charArray.includes(button.innerText)) {

                // for repeating characters
                charArray.forEach((char, ind) => {
                    if(char === button.innerText){
                        dashes[ind].innerText = char;

                        winCount+=1;

                        if(winCount == charArray.length){
                            resultText.innerHTML = `
                                <h2 class="win-msg">You Win! </h2>
                                <p>The word was <span>${chosenWord}</span></p>
                            `;

                            blocker();
                        }
                    }
                });

            }

            else{
                count+=1;
                drawMan(count);
                // count = 6 means head, left arm, right arm, left leg, right leg, body

                if(count == 6){
                    resultText.innerHTML = `
                                <h2 class="lose-msg">You Lose! </h2>
                                <p>The word was <span>${chosenWord}</span></p>
                            `;
                    blocker();        
                }
            }
            
            // disabled clicked button
            button.disabled = true;
        });
        KeyContainer.append(button);

    }
    displayOption();

    let {initialDrawing} = canvasCreator();
    // initial drawing would draw the frame

    initialDrawing();
};


// canvas

const canvasCreator = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;

    // drawing lines
    const drawLine = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
    };

    const head = () =>{
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI * 2, true);
        context.stroke();
    };

    const body = () =>{
        drawLine(70, 40, 70, 80);
    };
    const leftArm = () =>{
        drawLine(70, 50, 50, 70);
    };
    const rightArm = () =>{
        drawLine(70, 50, 90, 70);
    };
    const leftLeg = () =>{
        drawLine(70, 80, 50, 110);
    };
    const rightLeg = () =>{
        drawLine(70, 80, 90, 110);
    };

    // initial frame
    const initialDrawing = () => {
        // clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // bottomLine
        drawLine(10, 130, 130, 130);
        //leftLine
        drawLine(10, 10, 10, 131);
        // topLine
        drawLine(10, 10, 70, 10);
        // small top Line
        drawLine(10, 10, 70, 20);
    };

    return {initialDrawing, head, leftArm, rightArm, leftLeg, rightLeg, body};
};



// draw the man
const drawMan = (count) => {

    let {head, leftArm, rightArm, leftLeg, rightLeg, body} = canvasCreator();

    switch (count) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;

        default:
            break;    
    }
};


playAgainBtn.addEventListener('click', initializer);
window.onload = initializer;
