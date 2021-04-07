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