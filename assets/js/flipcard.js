let counter = 0;
let pair = [];
function flipcard(num) {

    const card = document.querySelector(num);
    card.classList.add('flipped');
    pair.push(card);

    counter++;
    if(counter%2 === 0) {
        verifyPair(pair);
        pair = [];
    }
}