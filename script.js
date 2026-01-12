const products = [
  {name:"BGMI UC 60", game:"BGMI", price:60},
  {name:"BGMI UC 125", game:"BGMI", price:125},
  {name:"FF Diamonds 50", game:"Free Fire", price:50},
  {name:"COD CP 60", game:"COD Mobile", price:60},
  {name:"All Games Mystery Box", game:"All", price:200}
];

// Select all game cards
const gameCards = document.querySelectorAll(".game-card");
const pricesSection = document.getElementById("prices");
const priceList = document.getElementById("priceList");
const gameTitle = document.getElementById("gameTitle");

// Add click event to each game card
gameCards.forEach(card => {
  card.addEventListener("click", () => {
    const selectedGame = card.getAttribute("data-game");
    openGame(selectedGame);
  });
});

function openGame(game){
  gameTitle.innerText = game + " Prices";
  priceList.innerHTML = "";
  pricesSection.classList.remove("hidden");

  products.filter(p => p.game === game || game === "All")
          .forEach(p => {
    const div = document.createElement("div");
    div.className = "price-card";
    div.innerHTML = `<h3>${p.name}</h3><p>₹${p.price}</p>`;
    priceList.appendChild(div);
  });
}
