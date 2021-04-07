function verifyEndGame() {
    const flippeds = document.querySelectorAll('.flipped');
    if (flippeds.length === numberOfCards) {
        setTimeout(() => {

            alert(`Você ganhou em ${counter/2} jogadas!`);
            playAgain = String(prompt('Jogar novamente? (sim/não)'));
            if(playAgain.toLowerCase() === 'sim') {
                start();
            }
        }, 500);
        clearInterval(intervalTimer);
    }
}