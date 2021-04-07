let time = 0;
function timer() {
    
    const timerdiv = document.querySelector('.timer');
    setInterval(() => {
        
        time++;

        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerdiv.innerHTML = `${Math.floor(minutes/10)}${minutes%10}:${Math.floor(seconds/10)}${seconds%10}`
    }, 1000);
}