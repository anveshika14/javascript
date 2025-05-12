const leaderboard = document.getElementById("leaderboard");

let players = [];

function addPlayer() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const country = document.getElementById("country").value.trim();
  const score = parseInt(document.getElementById("score").value.trim());

  if (!firstName || !lastName || !country || isNaN(score)) {
    alert("Please fill all fields correctly!");
    return;
  }

  const player = {
    id: Date.now(),
    name: `${firstName} ${lastName}`,
    country,
    score
  };

  players.push(player);
  renderLeaderboard();

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("country").value = "";
  document.getElementById("score").value = "";
}

function renderLeaderboard() {
  players.sort((a, b) => b.score - a.score);
  leaderboard.innerHTML = "";

  players.forEach(player => {
    const playerDiv = document.createElement("div");
    playerDiv.className = "player";

    playerDiv.innerHTML = `
      <div class="info">
        <strong>${player.name}</strong><br>
        ${player.country}<br>
        Score: ${player.score}
      </div>
      <div class="actions">
        <button class="inc" onclick="changeScore(${player.id}, 5)">+5</button>
        <button class="dec" onclick="changeScore(${player.id}, -5)">-5</button>
        <button class="del" onclick="deletePlayer(${player.id})">🗑️</button>
      </div>
    `;

    leaderboard.appendChild(playerDiv);
  });
}

function changeScore(id, amount) {
  players = players.map(player =>
    player.id === id ? { ...player, score: player.score + amount } : player
  );
  renderLeaderboard();
}

function deletePlayer(id) {
  players = players.filter(player => player.id !== id);
  renderLeaderboard();
}
