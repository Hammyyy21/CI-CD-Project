const products = [
{id:1,name:'The Classic Tee',price:38,category:'Men',image:'photo-1521572163474-6864f9cf17ab',tag:'BESTSELLER'},
{id:2,name:'The Essential Hoodie',price:78,category:'Women',image:'photo-1556821840-3a63f95609a7',tag:'NEW'},
{id:3,name:'The Everyday Shirt',price:65,category:'Men',image:'photo-1598033129183-c4f50c736f10',tag:''},
{id:4,name:'The Relaxed Knit',price:89,category:'Women',image:'photo-1576566588028-4147f3842f27',tag:'NEW'}
];
const cart = new Map();
const money = n => `$${n.toFixed(2)}`;
function render(filter='All') {
 document.querySelector('#products').innerHTML=products.filter(p=>filter==='All'||p.category===filter).map(p=>`<article><div class="product-image" role="img" aria-label="${p.name}" style="background-image:url('https://images.unsplash.com/${p.image}?w=600&q=80&fit=crop')">${p.tag?`<span>${p.tag}</span>`:''}</div><div class="product-info"><strong>${p.name}</strong><span>${money(p.price)}</span></div><p class="category">${p.category} / Essentials</p><button class="add" data-id="${p.id}">Add to bag +</button></article>`).join('');
 document.querySelectorAll('.filters button').forEach(b=>{b.classList.toggle('active',b.dataset.filter===filter);b.setAttribute('aria-pressed',String(b.dataset.filter===filter));});
}
function updateCart(){
 document.querySelector('#count').textContent=[...cart.values()].reduce((a,b)=>a+b,0);
 document.querySelector('#cart-items').innerHTML=[...cart].map(([id,qty])=>{const p=products.find(p=>p.id===id);return `<div class="cart-row"><span>${p.name} × ${qty}</span><span>${money(p.price*qty)} <button data-remove="${id}">Remove one</button></span></div>`;}).join('')||'<p>Your bag is empty.</p>';
 document.querySelector('#total').textContent='Subtotal: '+money([...cart].reduce((sum,[id,q])=>sum+products.find(p=>p.id===id).price*q,0));
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-filter],[data-id],[data-remove]');if(!b)return;if(b.dataset.filter)render(b.dataset.filter);if(b.dataset.id){const id=Number(b.dataset.id);cart.set(id,(cart.get(id)||0)+1);updateCart();}if(b.dataset.remove){const id=Number(b.dataset.remove);const q=cart.get(id);if(q>1)cart.set(id,q-1);else cart.delete(id);updateCart();}});
document.querySelector('#bag').addEventListener('click',()=>{updateCart();document.querySelector('#cart').showModal();});document.querySelector('#close').addEventListener('click',()=>document.querySelector('#cart').close());
document.querySelector('#newsletter').addEventListener('submit',e=>{e.preventDefault();document.querySelector('#message').textContent='Thanks! This is a demo, so your email has not been submitted.';e.target.reset();});
render();updateCart();
