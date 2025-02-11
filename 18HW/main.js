function createTimer(duration, container) {
    return new Promise((resolve) => {
        const timerDiv = document.createElement('div');
        timerDiv.className = 'timer';

        const timerText = document.createElement('span'); 
        timerDiv.appendChild(timerText);

        const stopButton = document.createElement('button'); 
        stopButton.textContent = 'Stop';
        stopButton.addEventListener('click', () => {
            clearInterval(interval);
            timerText.textContent = 'Stopped';
            stopButton.remove(); 
            resolve();
        });
        timerDiv.appendChild(stopButton);

        container.appendChild(timerDiv);

        let remainingTime = duration;

        const updateDisplay = () => {
            const minutes = String(Math.floor(remainingTime / 60)).padStart(2, '0');
            const seconds = String(remainingTime % 60).padStart(2, '0');
            timerText.textContent = `${minutes}:${seconds}`;
        };

        const interval = setInterval(() => {
            updateDisplay();
            if (remainingTime <= 0) {
                clearInterval(interval);
                stopButton.remove(); 
                resolve();
            }
            remainingTime -= 1;
        }, 1000);

        updateDisplay();
    });
}




document.getElementById('startButton').addEventListener('click', () => {
    const input = document.getElementById('timerInput');
    const duration = parseInt(input.value, 10);

    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid number of seconds.');
        return;
    }

    const container = document.getElementById('timersContainer');
    createTimer(duration, container).then(() => {
        console.log('Timer finished or stopped');
    });
});
