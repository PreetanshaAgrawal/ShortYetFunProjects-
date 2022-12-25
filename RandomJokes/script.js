const newJokeBtn = document.querySelector('.newJoke');
const jokeArea = document.querySelector('[name="jokes"]')
const buttonText = [
    "Ugh.",
    "🤦🏻‍♂️",
    "omg dad.",
    "you are the worst",
    "seriously",
    "stop it.",
    "please stop",
    "that was the worst one",
];

async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    const joke = response.json();
    return joke;
}

async function handleJoke(){

    // destructuring of response because it has a list of items
    const {joke} = await fetchJoke();
    jokeArea.textContent = joke;
    newJokeBtn.textContent = randomButton(buttonText, newJokeBtn.textContent);
}

function randomButton(arr, not){
    const item = arr[Math.floor(Math.random() * arr.length)];

    if(item == not){
        console.log("the same thing last time");
        return randomButton(arr, not);
    }
    
    return item;
}

// randomButton(buttonText);

newJokeBtn.addEventListener('click', handleJoke);


// handleJoke();