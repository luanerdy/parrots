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
            pair[0].classList.remove('blocked');
            pair[1].classList.remove('blocked');    
            reactivateCards();
        }, 1000);
    }
    else {

        const cardOne = document.querySelector(`.flipped .${firstCard}`);
        const cardTwo = document.querySelector(`.flipped .${secondCard}`);
        cardOne.removeAttribute('onclick');
        cardTwo.removeAttribute('onclick');
        setTimeout(reactivateCards(), 500);
        verifyEndGame();
    }
}