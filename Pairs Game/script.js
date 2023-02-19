document.addEventListener('DOMContentLoaded', () => {

    // initial reference
    const gridPhoto = document.querySelector('.gridPhoto');
    const scorePlayer = document.querySelector('.scorePlayer');
    const resetGame = document.querySelector('.resetGame');

    // variables
    const images = [
        { imgName: "img1", path: "images/pg1.png" },
        { imgName: "img1", path: "images/pg1.png" },
        { imgName: "img2", path: "images/pg2.jfif" },
        { imgName: "img2", path: "images/pg2.jfif" },
        { imgName: "img3", path: "images/pg3.jfif" },
        { imgName: "img3", path: "images/pg3.jfif"},
        { imgName: "img4", path: "images/pg4.png"},
        { imgName: "img4", path: "images/pg4.png"}
    ];
    var cardChosen = [];
    var cardWon = [];
    var cardChosenId = [];
    let score =0;

    // create board
    function createBoard() {
        for (let i = 0; i < images.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/backSide.png');
            card.setAttribute('width', '100px');
            card.setAttribute('height', '150px');
            card.setAttribute('data-id', i);
            gridPhoto.appendChild(card);
            card.addEventListener('click', flipCard);
        }
    }
    

    // for flipping the card
    function flipCard() {
        var cradId = this.getAttribute('data-id');
        cardChosen.push(images[cradId].imgName);
        cardChosenId.push(cradId)
        this.setAttribute('src', images[cradId].path);
        this.setAttribute('width', '100px');
        this.setAttribute('height', '100px');

        // card Chosen id maximum length is 2
        if (cardChosenId.length === 2) {
            setTimeout(check, 500);
        }
    }

    // check for Match
    function check() {
        let cards = document.querySelectorAll('img');
        let oneId = cardChosenId[0];
        let twoId = cardChosenId[1];
        if (cardChosen[0] === cardChosen[1]) {
            score += 1;
            scorePlayer.innerHTML = "Score : " + score;
            cards[oneId].style.opacity = "0.3";
            cards[twoId].style.opacity = "0.3";
            cardWon.push(cardChosen);
        }
        else{
            cards[oneId].setAttribute('src', 'images/backSide.png');
            cards[twoId].setAttribute('src', 'images/backSide.png');
        }

        cardChosen = [];
        cardChosenId = [];

        if(cardWon.length === images.length/2){
            scorePlayer.innerHTML = "Congratulations! You've Won!";
        }
    }

    //create the board 
    createBoard();

    // reset the board and score
    resetGame.addEventListener("click", () =>{
        let cards = document.querySelectorAll('img');
        cards.forEach(card => {
            card.setAttribute('src', 'images/backSide.png');
            card.style.opacity = "1";
        });

        cardChosen = []
        cardChosenId = []
        cardWon = []
        score = 0;
        scorePlayer.innerHTML = "Score : " + score;
    })

})


// extra - build a function to randomly place the cards so that every time the position of the card changes.