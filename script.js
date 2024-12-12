const dateInput = document.getElementById('dateInput')
const startButton = document.getElementById('startButton')
const timerDisplay = document.getElementById('timer')

let countdownInterval

function startCountdown() {
  const targetDate = new Date(dateInput.value)

  if (isNaN(targetDate)) {
    alert('Please enter a valid date/time.')
    return
  }

  clearInterval(countdownInterval)

  countdownInterval = setInterval(() => {
    const now = new Date()
    const timeDifference = targetDate - now

    if (timeDifference <= 0) {
      clearInterval(countdownInterval)
      timerDisplay.innerHTML = "Time's up!"
      return
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 *24))
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

    timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
  }, 1000)
}

startButton.addEventListener('click', startCountdown)