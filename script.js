let products = [
  {name:"BGMI UC 60", game:"BGMI", price:60, codes:["BG60A","BG60B"]},
  {name:"BGMI UC 125", game:"BGMI", price:125, codes:["BG125A","BG125B"]},
  {name:"FF Diamonds 50", game:"Free Fire", price:50, codes:["FF50A","FF50B"]},
  {name:"FF Diamonds 100", game:"Free Fire", price:100, codes:["FF100A","FF100B"]}
];

const gameCards=document.querySelectorAll(".game-card");
const pricesSection=document.getElementById("prices");
const priceList=document.getElementById("priceList");
const gameTitle=document.getElementById("gameTitle");

gameCards.forEach(card=>{
  card.addEventListener("click",()=>{
    const selectedGame=card.getAttribute("data-game");
    openGame(selectedGame);
  });
});

function openGame(game){
  gameTitle.innerText=game+" Prices";
  priceList.innerHTML="";
  pricesSection.classList.remove("hidden");

  products.filter(p=>p.game===game||game==="All").forEach(p=>{
    const div=document.createElement("div");
    div.className="price-card";
    div.innerHTML=`<h3>${p.name}</h3><p>₹${p.price}</p>`;
    div.onclick=()=>openModal(p);
    priceList.appendChild(div);
  });
}

// Modal
const modal=document.getElementById('orderModal');
const modalProductName=document.getElementById('modalProductName');
const modalPrice=document.getElementById('modalPrice');
const modalQty=document.getElementById('modalQty');
const payButton=document.getElementById('payButton');
const codeSection=document.getElementById('codeSection');
const deliveredCode=document.getElementById('deliveredCode');
const spanClose=document.querySelector('.close');
const playerID=document.getElementById('playerID');

function openModal(product){
  modalProductName.innerText=product.name;
  modalPrice.innerText=product.price;
  modalQty.value=1;
  playerID.value="";
  codeSection.style.display='none';
  deliveredCode.innerText='';
  modal.dataset.index=products.indexOf(product);
  modal.style.display='block';
}

spanClose.onclick=()=>modal.style.display='none';
window.onclick=e=>{if(e.target==modal) modal.style.display='none';}

// Simulated Payment
payButton.onclick=()=>{
  const index=modal.dataset.index;
  const product=products[index];
  const qty=parseInt(modalQty.value);
  const pid=playerID.value.trim();
  if(!pid){alert("Enter Player ID"); return;}
  const code=product.codes.slice(0,qty).join(', ');
  codeSection.style.display='block';
  deliveredCode.innerText=`${code} (Player ID: ${pid})`;
}
