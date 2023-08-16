function formatTimeComponent(timeComponent){
    return timeComponent < 10 ? `0${timeComponent}` : timeComponent;
}

function startCountdownFormatHuruf(countdownDate, countdownContainerId){
    const countdownInterval = setInterval(function (){
        const now = new Date().getTime();
        const timeRemaining = countdownDate - now;

        if (timeRemaining < 0){
            clearInterval(countdownInterval);
            document.getElementById(countdownContainerId).innerHTML = '00:00:00:00';
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            const countdownContainer = document.getElementById(countdownContainerId);
            countdownContainer.innerHTML = `${formatTimeComponent(days)} hari ${formatTimeComponent(hours)} jam ${formatTimeComponent(minutes)} menit ${formatTimeComponent(seconds)} detik`;
        }
    }, 1000);
}

function startCountdownFormatAngka(countdownDate, countdownContainerId){
    const countdownInterval = setInterval(function (){
        const now = new Date().getTime();
        const timeRemaining = countdownDate - now;

        if (timeRemaining < 0){
            clearInterval(countdownInterval);
            document.getElementById(countdownContainerId).innerHTML = '00:00:00:00';
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            const countdownContainer = document.getElementById(countdownContainerId);
            countdownContainer.innerHTML = `${formatTimeComponent(days)}:${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;
        }
    }, 1000);
}

const countdownDatePendaftaran = new Date('2023-08-26T00:00:00').getTime();
startCountdownFormatAngka(countdownDatePendaftaran, 'countdown-pendaftaran-olim');
startCountdownFormatAngka(countdownDatePendaftaran, 'countdown-pendaftaran-info');
startCountdownFormatAngka(countdownDatePendaftaran, 'countdown-pendaftaran-esai');

