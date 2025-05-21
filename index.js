function startCountdown() {
    const countdownElement = document.querySelector('.countdown-txt');
    const targetDate = new Date('May 26, 2026 00:00:00').getTime();
  
    const interval = setInterval(() => {
      const now      = Date.now();
      const distance = targetDate - now;
  
      if (distance < 0) {
        clearInterval(interval);
        countdownElement.textContent = "Chegou o dia!";
        return;
      }
  
      const days    = Math.floor(distance / (1000*60*60*24));
      const hours   = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
      const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      const seconds = Math.floor((distance % (1000*60)) / 1000);
  
      countdownElement.textContent = `${days} ${hours} ${minutes} ${seconds}`;
    }, 1000);
  }
  
  // espera o DOM carregar antes de iniciar
  window.addEventListener('DOMContentLoaded', startCountdown);
  