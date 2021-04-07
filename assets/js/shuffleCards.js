function shuffleCards(number) {

    const names = ["bobross", "explody", "fiesta", "metal", "revertit", "unicorn", "triplets"];
    const prechosen = shuffleArray(names);
    const chosen = prechosen.slice(0, number);
    const shuffled = shuffleArray(chosen.concat(chosen));

    return shuffled;
}