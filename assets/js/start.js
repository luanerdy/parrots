let numberOfCards;
function start() {
    const startBanner = document.querySelector('.start');
    startBanner.classList.add('hidden')    

    let condition;
    let iseven;
    do {

        numberOfCards = parseInt(prompt('Digite o número de cartas (número par entre 6 e 14):'));
        iseven = numberOfCards%2 === 0;
        condition = numberOfCards < 6 || numberOfCards > 14 || numberOfCards === null;
    } while(condition || !iseven);

    generateCards(numberOfCards);
}