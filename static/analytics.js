// Lightweight GA4 + event tracking.
// To enable Google Analytics 4: before this script loads, set window.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
// (You can uncomment and set it inline in index.html head.) If left as default placeholder, GA will not load.
const GA_ID = window.GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

function sendPageView(){
  if(typeof window.gtag === 'function'){
    const path = location.pathname + location.search + location.hash;
    window.gtag('event','page_view',{ page_path: path, page_title: document.title });
  }
}

function loadGA(){
  if(!GA_ID || GA_ID === 'G-XXXXXXXXXX') return;
  const s1 = document.createElement('script');
  s1.async = true; s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`; document.head.appendChild(s1);
  window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', GA_ID, { send_page_view: true });
  s1.addEventListener('load', ()=> setTimeout(sendPageView,50));
}

function trackEvent(action, params={}){ if(typeof window.gtag === 'function'){ window.gtag('event', action, params); } }

document.addEventListener('click', e=>{
  const t = e.target.closest('[data-track]');
  if(t){
    let eventName = t.getAttribute('data-track');
    const map = { 'meetup_click':'meetup_clicked', 'facebook_click':'facebook_clicked' };
    if(map[eventName]) eventName = map[eventName];
    trackEvent(eventName, { label: eventName });
  }
});

window.addEventListener('DOMContentLoaded', ()=>{ loadGA(); hydrateDynamicContent(); initOutboundTracking(); initScrollDepthTracking(); });
window.addEventListener('hashchange', ()=> sendPageView());

// Dynamically inject certain repeated card groups that were arrays in React
function hydrateDynamicContent(){
  buildHowSteps(); buildRoles(); buildRules(); buildFAQ(); buildCTAStats();
}

function buildHowSteps(){
  const steps = [
    { title: 'RSVP on Meetup', desc: 'RSVP on Meetup and join the event online.' },
    { title: 'Host-guided interview', desc: 'The host chats with each man in short, friendly rounds.' },
    { title: 'Listen actively', desc: 'Men share stories, hobbies, and what matters to them. Everyone gets a fair turn and can skip any question.' },
    { title: 'Send questions to host', desc: 'Women can listen with camera off, or DM the host questions. To speak, just turn on your video and audio.' },
    { title: 'Connect on mutual consent', desc: 'Afterward, women send their picks privately. Only mutual matches get an introduction!' }
  ];
  const top = steps.slice(0,3); const bottom = steps.slice(3);
  const topEl = document.getElementById('how-steps-top'); const bottomEl = document.getElementById('how-steps-bottom');
  if(!topEl || !bottomEl) return;
  top.forEach((s,i)=> topEl.appendChild(stepCard(s,i)) );
  bottom.forEach((s,i)=> bottomEl.appendChild(stepCard(s,i+3)) );
  function stepCard(step,i){
    const wrap = document.createElement('div');
    wrap.className = 'glass-card p-6 flex flex-col items-center text-center h-full relative overflow-visible';
  wrap.innerHTML = `<span class="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-11 h-11 rounded-full text-sm font-semibold shadow-sm" style="background:${'var(--peacock-gold)'};color:#00152B">${i+1}</span>
  <div class="w-32 h-32 rounded-full overflow-hidden mb-4 bg-white border border-peacock-100 shadow-sm relative"><img src="images/process_${i+1}.png" alt="${step.title}" class="w-full h-full object-cover object-center select-none" loading="lazy" draggable="false"/></div>
    <h3 class="text-lg font-semibold text-peacock-900 dark:text-peacock-100">${step.title}</h3>
    <p class="mt-2 text-sm text-peacock-700 dark:text-peacock-200 leading-relaxed">${step.desc}</p>`;
    return wrap;
  }
}

function buildRoles(){
  const roles = [
    { heading: 'For Men', color:'peacock-500', bullets:[ 'Camera <strong>on</strong> for the full event.', 'Be brave. Share who you are—values, hobbies, lessons learned.', 'Hosted interview format: you can decline any question.', 'Light jokes/banter from the host—stay good-humoured.', '<strong>Your speaking time is rationed</strong> so everyone has a chance.' ]},
    { heading: 'For Women', color:'peacock-purple', bullets:[ 'Camera optional; remain anonymous.', 'DM questions to the host; they will ask them.', 'To speak directly enable <strong>video and audio</strong>.', 'Listen comfortably; note anyone you like.', 'After the event, submit picks privately. Mutual "yes" = intro.' ]},
    { heading: 'For the Host', color:'peacock-gold', bullets:[ 'Keep speakers comfortable; surface personality.', 'Read selected questions from women.', 'Maintain pace, fairness, respect.', 'Remove anyone who breaks rules.' ]}
  ];
  const container = document.getElementById('roles-cards'); if(!container) return;
  roles.forEach(r=>{
    const card = document.createElement('div');
    card.className = 'glass-card border-l-4 px-6 py-6 flex flex-col h-full border-'+r.color;
    card.innerHTML = `<h3 class="text-xl font-semibold text-${r.color} mb-4">${r.heading}</h3><ul class="space-y-4 text-ink text-left">${r.bullets.map(b=> `<li class="flex items-start gap-4"><span class="w-2 h-2 bg-${r.color} rounded-full mt-2 flex-shrink-0"></span><span>${b}</span></li>`).join('')}</ul>`;
    container.appendChild(card);
  });
}

function buildRules(){
  const container = document.getElementById('rules-cards'); if(!container) return;
  const leftBullets = [ 'Ages 18+ only.', 'Respectful conduct; no harassment or doxxing.', 'No screenshots or recordings.', 'No contact details during event; only after mutual consent.', 'Questions may be skipped; men may decline.', 'Spoken questions require video + audio.', 'Hosts may remove rule-breakers.' ];
  const rightIntro = [ 'Open to adults 18+. Wide range of life stages.', 'Recent Speaker Ages (examples): 26, 42, 43.' ];
  const left = document.createElement('div');
  left.className = 'glass-card border-l-4 border-peacock-500 px-6 py-6';
  left.innerHTML = `<h3 class="text-xl font-semibold text-peacock-500 mb-4">Community Guidelines</h3><ul class="space-y-4 text-peacock-700 dark:text-peacock-100">${leftBullets.map(b=> `<li class="flex items-start gap-4"><span class="w-2 h-2 bg-peacock-500 rounded-full mt-2 flex-shrink-0"></span><span>${b}</span></li>`).join('')}</ul>`;
  const right = document.createElement('div');
  right.className = 'glass-card border-l-4 border-peacock-green px-6 py-6 flex flex-col justify-between';
  right.innerHTML = `<h3 class="text-xl font-semibold text-peacock-green mb-4">Ages & Attendance</h3><p class="text-peacock-700 dark:text-peacock-100 mb-4">${rightIntro[0]}</p><p class="text-sm text-peacock-600 dark:text-peacock-300 italic mb-4">${rightIntro[1]}</p><div class="mt-2 p-3 bg-peacock-green/10 rounded-lg"><h4 class="font-semibold text-peacock-900 dark:text-peacock-100 mb-2">Participation</h4><p class="text-sm text-peacock-700 dark:text-peacock-100">Women may attend with cameras off. To speak live, enable <strong class="text-peacock-purple">video + audio</strong>, or DM the host.</p></div>`;
  container.append(left,right);
}

function buildFAQ(){
  const faqs = [
    ['Is this like a dating app?','No. It\'s a live, <strong>host-guided interview</strong> with clear rules and mutual-consent matching only.'],
    ['Do women have to show their face?','No. Women can attend with cameras off and remain anonymous if they prefer.'],
    ['How can women ask questions?','DM your question to the host; they will read it. To speak directly you must switch on <strong>both your camera and mic</strong>.'],
    ['Can men refuse a question?','Yes. Men may decline any question. The host keeps things respectful and light.'],
    ['How do matches work?','After the event, women privately submit picks. We only introduce pairs that both say “yes.”'],
    ['What should men prepare?','A short intro, a story, and a hobby or project you care about. Authenticity > performance.']
  ];
  const container = document.getElementById('faq-container'); if(!container) return;
  faqs.forEach(([q,a],i)=>{
    const det = document.createElement('details'); det.className='faq';
    det.innerHTML = `<summary>${q}<span class="indicator transition-transform ml-3">⌄</span></summary><div class="answer"><p>${a}</p></div>`;
    container.appendChild(det);
  });
}

function buildCTAStats(){
  const stats = { eventsHosted:24, totalAttendees:430, matchesMade:112 };
  const el = document.getElementById('cta-stats'); if(!el) return;
  const items = [ ['Events hosted', stats.eventsHosted], ['Attendees', stats.totalAttendees], ['Matches', stats.matchesMade] ];
  items.forEach(([label,val])=>{ const d=document.createElement('div'); d.className='flex-1 min-w-[120px] text-center p-3 bg-peacock-50/60 dark:bg-peacock-800/30 rounded-lg'; d.innerHTML=`<div class="text-2xl md:text-3xl font-bold text-peacock-gold">${val}+</div><div class="text-xs text-peacock-700 dark:text-peacock-200 mt-1">${label}</div>`; el.appendChild(d); });
}

// High-level semantic events similar to prior React implementation
const trackDatingEvents = {
  signupInitiated: ()=> trackEvent('signup_initiated',{ category:'user_engagement'}),
  profileViewed: ()=> trackEvent('profile_viewed',{ category:'user_engagement'}),
  eventJoined: (eventName)=> trackEvent('event_joined',{ category:'conversion', label:eventName }),
  matchMade: ()=> trackEvent('match_made',{ category:'conversion'}),
  chatStarted: ()=> trackEvent('chat_started',{ category:'user_engagement'}),
  meetupClicked: ()=> trackEvent('meetup_clicked',{ category:'external_link', label:'meetup_button'}),
  facebookClicked: ()=> trackEvent('facebook_clicked',{ category:'external_link', label:'facebook_button'}),
  ctaClicked: (location)=> trackEvent('cta_clicked',{ category:'engagement', label:location })
};

// Expose minimal API plus semantic helpers
window.PeacockTrack = { event: trackEvent, pageview: sendPageView, dating: trackDatingEvents };

// Outbound link tracking
function initOutboundTracking(){
  document.addEventListener('click', e=>{
    const a = e.target.closest('a[href]');
    if(!a) return;
    const url = a.getAttribute('href');
    if(!url) return;
    const isExternal = /^https?:/i.test(url) && !url.includes(location.hostname);
    if(isExternal){
      trackEvent('outbound_click',{ category:'navigation', label:url });
    }
  });
}

// Scroll depth tracking (25/50/75/100 once each)
function initScrollDepthTracking(){
  const marks = [25,50,75,100];
  const fired = new Set();
  function check(){
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const winH = window.innerHeight;
    const percent = ((scrollTop + winH) / docHeight) * 100;
    marks.forEach(m=>{
      if(percent >= m && !fired.has(m)){
        fired.add(m);
        trackEvent('scroll_depth',{ category:'engagement', value:m, label:m+'%' });
        if(fired.size === marks.length){ window.removeEventListener('scroll', throttled); }
      }
    });
  }
  let ticking = false;
  function throttled(){
    if(!ticking){
      window.requestAnimationFrame(()=>{ check(); ticking = false; });
      ticking = true;
    }
  }
  window.addEventListener('scroll', throttled, { passive:true });
  // initial check in case of short pages
  setTimeout(check, 800);
}
