let visits = localStorage.getItem("site_visits");

if (!visits) {
  visits = 1;
} else {
  visits = parseInt(visits) + 1;
}

localStorage.setItem("site_visits", visits);
console.log("Total visits:", visits);
