// ===let products = [
  {name:"BGMI UC 60", game:"BGMI", price:60, codes:["BG60A","BG60B"]},
  {name:"BGMI UC 125", game:"BGMI", price:125, codes:["BG125A","BG125B"]},
  {name:"FF Diamonds 50", game:"Free Fire", price:50, codes:["FF50A","FF50B"]},
  {name:"COD CP 60", game:"COD Mobile", price:60, codes:["COD60A","COD60B"]},
  {name:"All Games Mystery Box", game:"All", price:200, codes:["ALL200A","ALL200B"]}
];

let selectedGame = null;

function openGame(game){
  selectedGame = game;
  document.getElementById("prices").classList.remove("hidden");
  document.getElementById("gameTitle").innerText = game + " Prices";
  const list = document.getElementById("priceList");
  list.innerHTML = '';
  products.filter(p=>p.game===game || game==="All").forEach((p)=>{
    const div = document.createElement("div");
    div.className="price-card";
    div.innerHTML=`<h3>${p.name}</h3><p>₹${p.price}</p>`;
    div.onclick=()=>openModal(p);
    list.appendChild(div);
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

function openModal(product){
  modalProductName.innerText=product.name;
  modalPrice.innerText=product.price;
  modalQty.value=1;
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
  const code=product.codes.slice(0,qty).join(', ');
  codeSection.style.display='block';
  deliveredCode.innerText=code || "No codes available";
}
