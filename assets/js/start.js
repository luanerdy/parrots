function start() {
    const startBanner = document.querySelector('.start');
    startBanner.classList.add('hidden')    

    let condition;
    let numberOfCards;
    let iseven;
    do {

        numberOfCards = parseInt(prompt('Digite o número de cartas (número par entre 6 e 14):'));
        iseven = numberOfCards%2 === 0;
        condition = numberOfCards < 6 || numberOfCards > 14 || numberOfCards === null;
    } while(condition || !iseven);

    generateCards(numberOfCards);
}

function generateCards(number) {
    const container = document.querySelector('.cards');
    const cards = shuffleCards(number/2);

    for(let i = 0; i < number; i++) {
        container.innerHTML += `<div class="card card${i}" onclick="flipcard('.card${i}')">
                            <div class="frontface"></div>
                            <div class="backface ${cards[i]}"></div>
                            </div>`
    }
}

function shuffleCards(number) {

    const names = ["bobross", "explody", "fiesta", "metal", "revertit", "unicorn", "triplets"];
    const prechosen = shuffleArray(names);
    const chosen = prechosen.slice(0, number);
    const shuffled = shuffleArray(chosen.concat(chosen));

    return shuffled;
}

function shuffleArray(array) {

    let oldArray = array;
    let ArrLength = oldArray.length;
    let newArray = [];
    for(let i = 0; i < ArrLength; i++) {

        const randomPosition = Math.floor(Math.random() * (ArrLength - i));
        newArray.push(oldArray[randomPosition]);
        oldArray.splice(randomPosition, 1);
    }

    return newArray;
}