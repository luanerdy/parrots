let counter = 0;
let pair = [];
function flipcard(num) {

    const card = document.querySelector(num);
    card.classList.add('flipped');
    card.classList.add('blocked');
    pair.push(card);

    counter++;
    if(counter%2 === 0) {
        unactivateCards();
        verifyPair(pair);
        pair = [];
    }
}