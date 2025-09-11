// Dark mode toggle (localStorage + class on html)
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  if(stored === 'dark'){ root.classList.add('dark'); }
  function updateIcon(){ if(!btn) return; btn.textContent = root.classList.contains('dark') ? '☀️' : '🌙'; }
  updateIcon();
  function toggle(){ root.classList.toggle('dark'); localStorage.setItem('theme', root.classList.contains('dark') ? 'dark':'light'); updateIcon(); }
  btn && btn.addEventListener('click', toggle);
  document.querySelectorAll('[data-toggle-theme]').forEach(el=> el.addEventListener('click', ()=>{ toggle(); const mobileNav=document.getElementById('mobile-nav'); if(mobileNav) mobileNav.classList.add('hidden'); }));
  // mobile menu
  const mobileBtn = document.getElementById('mobile-menu-button');
  const mobileNav = document.getElementById('mobile-nav');
  if(mobileBtn && mobileNav){
    mobileBtn.addEventListener('click', ()=>{ const open = !mobileNav.classList.contains('hidden'); mobileNav.classList.toggle('hidden'); mobileBtn.setAttribute('aria-expanded', String(!open)); mobileBtn.textContent = open ? '☰' : '✕'; });
  }
  document.getElementById('year')?.append(new Date().getFullYear());
})();
