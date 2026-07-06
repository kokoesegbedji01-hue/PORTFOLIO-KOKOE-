const root=document.documentElement;const toggle=document.getElementById('themeToggle');
const saved=localStorage.getItem('theme'); if(saved){root.setAttribute('data-theme',saved); if(toggle) toggle.textContent=saved==='dark'?'☀':'☾';}
if(toggle){toggle.addEventListener('click',()=>{const next=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',next);localStorage.setItem('theme',next);toggle.textContent=next==='dark'?'☀':'☾';});}
const reveals=document.querySelectorAll('.reveal');const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.08});reveals.forEach(r=>io.observe(r));
const progress=document.querySelector('.scroll-progress');window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h*100)+'%';});
