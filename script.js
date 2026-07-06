<<<<<<< HEAD
(function(){
 const saved=localStorage.getItem('theme')||'light';
 document.documentElement.setAttribute('data-theme',saved);
 const btn=document.getElementById('themeToggle');
 if(btn){btn.textContent=saved==='dark'?'☀':'☾';btn.onclick=()=>{const cur=document.documentElement.getAttribute('data-theme');const next=cur==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',next);localStorage.setItem('theme',next);btn.textContent=next==='dark'?'☀':'☾';};}
 const els=document.querySelectorAll('.reveal');
 const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.12});
 els.forEach(el=>obs.observe(el));
 const progress=document.createElement('div');progress.className='scroll-progress';document.body.appendChild(progress);
 const update=()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(h>0?(window.scrollY/h)*100:0)+'%'};window.addEventListener('scroll',update,{passive:true});update();
})();
=======
const root=document.documentElement;const toggle=document.getElementById('themeToggle');
const saved=localStorage.getItem('theme'); if(saved){root.setAttribute('data-theme',saved); if(toggle) toggle.textContent=saved==='dark'?'☀':'☾';}
if(toggle){toggle.addEventListener('click',()=>{const next=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',next);localStorage.setItem('theme',next);toggle.textContent=next==='dark'?'☀':'☾';});}
const reveals=document.querySelectorAll('.reveal');const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.08});reveals.forEach(r=>io.observe(r));
const progress=document.querySelector('.scroll-progress');window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h*100)+'%';});
>>>>>>> b19cafa (Update portfolio)
