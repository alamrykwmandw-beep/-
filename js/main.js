// قائمة مباريات افتراضية اليوم
const matches = [
  { id: 1, home: "فريق A", away: "فريق B", league: "الدوري الإنجليزي", time: "20:00" },
  { id: 2, home: "فريق C", away: "فريق D", league: "الدوري الإسباني", time: "22:00" },
  { id: 3, home: "فريق E", away: "فريق F", league: "الدوري الإيطالي", time: "18:30" }
];

const matchesContainer = document.getElementById('matches');

matches.forEach(match => {
  const card = document.createElement('div');
  card.className = 'col-md-4';
  card.innerHTML = `
    <div class="card h-100">
      <div class="card-body text-center">
        <h5>${match.home} vs ${match.away}</h5>
        <p>الدوري: ${match.league}</p>
        <p>الوقت: ${match.time}</p>
        <a href="match.html?id=${match.id}" class="btn btn-primary mt-2">شاهد البث</a>
      </div>
    </div>
  `;
  matchesContainer.appendChild(card);
});
