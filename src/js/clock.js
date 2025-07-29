function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  document.getElementById('current-time').textContent = time;
  document.getElementById('timezone').textContent = timeZone;
}

// update every second
setInterval(updateClock, 1000);
updateClock();
