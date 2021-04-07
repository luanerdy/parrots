function unactivateCards() {
    const cards = document.querySelector('.cards');
    cards.classList.add('blocked');
}

function reactivateCards() {
    const cards = document.querySelector('.cards');
    cards.classList.remove('blocked');
}