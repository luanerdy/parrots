function generateCards(number) {
    const container = document.querySelector('.cards');
    const cards = shuffleCards(number/2);

    container.innerHTML = '';
    for(let i = 0; i < number; i++) {
        container.innerHTML += `<div class="card card${i}" onclick="flipcard('.card${i}')">
                            <div class="frontface"></div>
                            <div class="backface ${cards[i]}"></div>
                            </div>`
    }
}