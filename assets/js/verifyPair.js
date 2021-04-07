let playAgain = '';
function verifyPair(pair) {
    firstCard = pair[0].children[1].classList[1];
    secondCard = pair[1].children[1].classList[1];

    if(firstCard !== secondCard) {
        setTimeout(() => {

            const cardOne = document.querySelector(`.flipped .${firstCard}`).parentElement;
            const cardTwo = document.querySelector(`.flipped .${secondCard}`).parentElement;
            cardOne.classList.remove('flipped');
            cardTwo.classList.remove('flipped');
        }, 1000);
    }
    else {

        const cardOne = document.querySelectorAll(`.flipped .${firstCard}`)[0].parentElement;
        const cardTwo = document.querySelectorAll(`.flipped .${secondCard}`)[1].parentElement;
        cardOne.removeAttribute('onclick');
        cardTwo.removeAttribute('onclick');
        verifyEndGame();
    }
}