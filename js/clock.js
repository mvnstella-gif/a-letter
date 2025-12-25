function updateClock() {
  const now = new Date();

  function format(time) {
    return time.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  function formatDate(time) {
    return time.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  const jakarta = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
  const bucharest = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Bucharest" }));

  document.getElementById("time-jkt").innerText = format(jakarta);
  document.getElementById("date-jkt").innerText = formatDate(jakarta);

  document.getElementById("time-buc").innerText = format(bucharest);
  document.getElementById("date-buc").innerText = formatDate(bucharest);
}

setInterval(updateClock, 1000);
updateClock();
