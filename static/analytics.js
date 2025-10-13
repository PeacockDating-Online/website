// Lightweight GA4 + event tracking.
// To enable Google Analytics 4: before this script loads, set window.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
// (You can uncomment and set it inline in index.html head.) If left as default placeholder, GA will not load.
const GA_ID = window.GA_MEASUREMENT_ID || 'G-PPHHL6ZEFJ';

function sendPageView(){
  if(typeof window.gtag === 'function'){
    const path = location.pathname + location.search + location.hash;
    window.gtag('event','page_view',{ page_path: path, page_title: document.title });
  }
}

function loadGA(){
  if(!GA_ID || GA_ID === 'G-PPHHL6ZEFJ') return;
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

// Keep chart configs so we can rebuild on theme change
const __chartConfigs = [
  { id: 'ages-pie', cfg: {} },
  { id: 'cities-pie', cfg: {} },
];

function observeThemeChanges() {
  const targetEls = [document.documentElement, document.body].filter(Boolean);
  const mo = new MutationObserver(() => {
    // re-render both charts on theme flip
    __chartConfigs.forEach(({ id, cfg }) => cfg && renderChart(id, cfg));
  });
  targetEls.forEach(el => mo.observe(el, { attributes: true, attributeFilter: ['class'] }));
}

window.addEventListener('DOMContentLoaded', ()=>{ 
  loadGA(); 
  hydrateDynamicContent(); 
  initOutboundTracking(); 
  initScrollDepthTracking();
  observeThemeChanges();
});
window.addEventListener('hashchange', ()=> sendPageView());

// Dynamically inject certain repeated card groups that were arrays in React
function hydrateDynamicContent(){
  buildHowSteps(); buildRoles(); buildRules(); buildFAQ(); buildCTAStats(); buildAgesCities();
// Dynamically build Ages & Cities section and render a pie chart
function buildAgesCities() {
  const ageCfg = {
    type: 'doughnut',
    data: {
      labels: ['18-30', '30-40', '40-50', '50+'],
      datasets: [{
        data: [33, 11, 39, 17],
        backgroundColor: ['#FACC15', '#A3E635', '#38BDF8', '#C084FC'],
        borderWidth: 1
      }]
    },
    title: 'Age Groups',
    isDoughnut: true
  };

  const cityCfg = {
    type: 'bar',
    data: {
      labels: ['Sydney', 'Melbourne', 'Adelaide', 'Brisbane', 'New Zealand'],
      datasets: [{
        data: [56, 28, 6, 6, 6],
        backgroundColor: ['#FACC15', '#38BDF8', '#A3E635', '#C084FC', '#F472B6'],
        borderRadius: 6
      }]
    },
    title: 'Locations',
    isHorizontal: true
  };

  // save for theme re-render
  __chartConfigs[0].cfg = ageCfg;
  __chartConfigs[1].cfg = cityCfg;

  renderChart('ages-pie', ageCfg);
  renderChart('cities-pie', cityCfg);
}

// Load Chart.js from CDN
function loadChartJs() {
  if (window.Chart) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function renderChart(containerId, config) {
  const el = document.getElementById(containerId);
  if (!el) return;

  // Create wrapper and canvas
  const isDark = document.documentElement.classList.contains('dark') || 
    document.body.classList.contains('dark');
  const textColor = isDark ? '#FDE68A' : '#1e293b';
  const bgColor = isDark ? '#18181b' : '#fff';
  const gridColor = isDark ? 'rgba(253,230,138,0.10)' : 'rgba(30,41,59,0.08)';
  const fontFamily = 'inherit, ui-sans-serif, system-ui, sans-serif';

  el.innerHTML = `<div class="${isDark ? 'bg-peacock-900/80' : 'bg-white'} rounded-2xl p-8 shadow-lg flex flex-col items-center transition-colors duration-300">
    <h3 class="text-2xl font-extrabold text-peacock-900 dark:text-peacock-gold mb-6 tracking-tight text-center">${config.title}</h3>
    <div class="relative w-full max-w-[340px] mx-auto" style="height: 320px;">
      <canvas></canvas>
    </div>
  </div>`;
  const canvas = el.querySelector('canvas');

  const chartConfig = {
    type: config.type,
    data: {
      ...config.data,
      datasets: config.data.datasets.map(dataset => ({
        ...dataset,
        label: dataset.label || config.title,
        borderWidth: 2,
        borderColor: isDark ? '#FDE68A' : '#1e293b',
        hoverBorderWidth: 3
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: 0
      },
      plugins: {
        legend: {
          display: config.isDoughnut,
          position: 'bottom',
          labels: {
            color: textColor,
            font: {
              size: 20,
              weight: 'bold',
              family: fontFamily
            },
            padding: 22,
            boxWidth: 25 // Make legend color boxes bigger
          }
        },
        tooltip: {
          backgroundColor: bgColor,
          titleColor: textColor,
          bodyColor: textColor,
          borderColor: isDark ? '#FDE68A' : '#1e293b',
          borderWidth: 1,
          titleFont: { size: 18, weight: 'bolder', family: fontFamily },
          bodyFont: { size: 17, weight: 'bolder', family: fontFamily },
          callbacks: {
            label: function(context) {
              return (context.label || '') + ': ' + context.raw + '%';
            }
          }
        }
      },
      animation: {
        duration: 900,
        easing: 'easeOutQuart'
      },
      elements: {
        arc: {
          borderWidth: 2
        },
        bar: {
          borderRadius: 8
        }
      }
    }
  };

  if (config.isHorizontal) {
    // Ensure legend is hidden for locations chart
    chartConfig.options.plugins.legend.display = false;
    chartConfig.options.indexAxis = 'y';
    chartConfig.options.scales = {
      x: {
        display: false, // Hide x axis
        min: 0,
        max: 100,
        grid: { display: false },
        ticks: { display: false }
      },
      y: {
        grid: { display: false },
        ticks: {
          color: textColor,
          font: {
            size: 18,
            weight: 900,
            family: fontFamily
          },
          padding: 12
        }
      }
    };
    // Add value labels at end of bars using Chart.js plugin
    chartConfig.options.plugins.datalabels = {
      anchor: 'end',
      align: 'right',
      color: textColor,
      font: {
        size: 22,
        weight: 'bolder',
        family: fontFamily
      },
      formatter: function(value) {
        return value + '%';
      },
      clamp: true,
      offset: 10
    };
    // Make bars longer by increasing chart height
    el.querySelector('.relative').style.height = '340px';
  }

  loadChartJs().then(() => {
    // Load datalabels plugin if needed
    if (config.isHorizontal && !window.ChartDataLabels) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels';
      script.onload = () => {
        Chart.register(window.ChartDataLabels);
        new Chart(canvas, chartConfig);
      };
      document.head.appendChild(script);
    } else if (config.isHorizontal) {
      Chart.register(window.ChartDataLabels);
      new Chart(canvas, chartConfig);
    } else {
      new Chart(canvas, chartConfig);
    }
  });
}
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
  // Updated stats and labels to match new design
  const stats = [
    { label: 'Events hosted', value: 5 },
    { label: 'Attendees', value: 250 },
    { label: 'Speakers', value: 20 }
  ];
  const el = document.getElementById('cta-stats');
  if (!el) return;
  el.innerHTML = '';
  stats.forEach(stat => {
    const d = document.createElement('div');
    d.className = 'stat-card flex-1 min-w-[120px] text-center p-3 bg-peacock-50/60 dark:bg-peacock-800/30 rounded-lg';
    d.innerHTML = `<span class="text-2xl font-bold text-peacock-900 dark:text-peacock-gold">${stat.value}+</span><br><span class="text-xs text-peacock-700 dark:text-peacock-100">${stat.label}</span>`;
    el.appendChild(d);
  });
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
