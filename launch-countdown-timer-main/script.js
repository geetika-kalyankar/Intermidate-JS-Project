// Set countdown date to 8 days from now
const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 9);
countDownDate.setHours(0, 0, 0, 0); // Start from midnight

// Update the countdown every second
const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate.getTime() - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".day-val").textContent = days < 10 ? "0" + days : days;
  document.querySelector(".hrs-val").textContent = hours < 10 ? "0" + hours : hours;
  document.querySelector(".min-val").textContent = minutes < 10 ? "0" + minutes : minutes;
  document.querySelector(".sec-val").textContent = seconds < 10 ? "0" + seconds : seconds;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.querySelector(".time-set").innerHTML = "<h2>EXPIRED</h2>";
  }
}, 1000);
