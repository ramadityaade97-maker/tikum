// TIKUM — Vanilla JS Interactions
const bestSeller = [
  {
    name: "TIKUM Signature Latte",
    description: "Espresso creamy dengan karakter lembut dan signature flavor TIKUM yang khas.",
    price: "Rp 32.000",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&q=80&auto=format&fit=crop"
  },
  {
    name: "Palm Sugar Coffee",
    description: "Espresso, susu, dan gula aren dengan rasa manis yang seimbang dan hangat.",
    price: "Rp 28.000",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&q=80&auto=format&fit=crop"
  },
  {
    name: "TIKUM Cold Brew",
    description: "Cold brew yang smooth, refreshing, dan ringan — diseduh 18 jam.",
    price: "Rp 30.000",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=700&q=80&auto=format&fit=crop"
  },
  {
    name: "Coconut Coffee",
    description: "Perpaduan espresso dengan sentuhan coconut yang menyegarkan dan creamy.",
    price: "Rp 32.000",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80&auto=format&fit=crop"
  },
  {
    name: "Botanical Matcha",
    description: "Matcha Uji premium dengan creamy milk yang menyejukkan di tengah padatnya hari.",
    price: "Rp 30.000",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=700&q=80&auto=format&fit=crop"
  },
  {
    name: "Artisan Chocolate",
    description: "Minuman cokelat creamy dengan rasa yang rich, deep, dan comforting.",
    price: "Rp 29.000",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=700&q=80&auto=format&fit=crop"
  }
];

const menuData = [
  { name:"TIKUM Signature Latte", cat:"coffee", price:"Rp 32.000", desc:"Signature blend creamy, lembut.", image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80&auto=format&fit=crop"},
  { name:"Urban Americano", cat:"coffee", price:"Rp 25.000", desc:"Espresso murni dengan air, bold & clean.", image:"https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80&auto=format&fit=crop"},
  { name:"Palm Sugar Coffee", cat:"coffee", price:"Rp 28.000", desc:"Gula aren asli, manis seimbang.", image:"https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80&auto=format&fit=crop"},
  { name:"Coconut Coffee", cat:"coffee", price:"Rp 32.000", desc:"Espresso & santan segar, tropical.", image:"https://images.unsplash.com/photo-1494314671902-399b18174975?w=600&q=80&auto=format&fit=crop"},
  { name:"Botanical Matcha", cat:"non-coffee", price:"Rp 30.000", desc:"Matcha Uji premium, silky creamy.", image:"https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=80&auto=format&fit=crop"},
  { name:"Artisan Chocolate", cat:"non-coffee", price:"Rp 29.000", desc:"Cocoa rich & comforting.", image:"https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=600&q=80&auto=format&fit=crop"},
  { name:"Taro Cloud", cat:"non-coffee", price:"Rp 28.000", desc:"Taro creamy dengan milk foam.", image:"https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80&auto=format&fit=crop"},
  { name:"Botanical Mint Tea", cat:"tea", price:"Rp 24.000", desc:"Teh melati & daun mint segar.", image:"https://images.unsplash.com/photo-1564890369478-c89ca64c94ea?w=600&q=80&auto=format&fit=crop"},
  { name:"Lemongrass Tea", cat:"tea", price:"Rp 22.000", desc:"Sereh, jahe, dan madu hutan.", image:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80&auto=format&fit=crop"},
  { name:"Avocado Toast", cat:"food", price:"Rp 38.000", desc:"Sourdough, avocado, poached egg.", image:"https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80&auto=format&fit=crop"},
  { name:"Mushroom Panini", cat:"food", price:"Rp 42.000", desc:"Jamur, keju, & pesto basil.", image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format&fit=crop"},
  { name:"TIKUM Croissant", cat:"dessert", price:"Rp 26.000", desc:"Butter croissant, flaky & warm.", image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80&auto=format&fit=crop"},
  { name:"Matcha Tiramisu", cat:"dessert", price:"Rp 35.000", desc:"Layer mascarpone & matcha.", image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80&auto=format&fit=crop"},
  { name:"Banana Bread", cat:"dessert", price:"Rp 24.000", desc:"Homemade, walnut & cinnamon.", image:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&q=80&auto=format&fit=crop"},
];

const galleryImages = [
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494314671902-399b18174975?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80&auto=format&fit=crop",
];

// DOM Ready
document.addEventListener('DOMContentLoaded',()=>{

  // Navbar scroll + progress
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('navLinks');
  const sections = document.querySelectorAll('section[id]');
  const progress = document.getElementById('pageProgress');

  const onScroll = ()=>{
    if(window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // progress bar
    if(progress){
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max>0 ? (window.scrollY/max)*100 : 0;
      progress.style.width = pct + '%';
    }

    // active nav
    let current = 'home';
    sections.forEach(s=>{
      const top = s.offsetTop - 120;
      if(window.scrollY >= top) current = s.id;
    });
    navLinks.forEach(a=>{
      a.classList.toggle('active', a.getAttribute('href') === '#'+current);
    });

    // parallax atmosphere
    const atmImg = document.querySelector('.atmosphere-bg img');
    if(atmImg){
      const rect = document.querySelector('.atmosphere').getBoundingClientRect();
      if(rect.top < window.innerHeight && rect.bottom>0){
        const prog = (window.innerHeight - rect.top)/(window.innerHeight+rect.height);
        atmImg.style.transform = `translateY(${(prog-0.5)*70}px) scale(1.06)`;
      }
    }
    // hero subtle parallax (title + content)
    const heroContent = document.querySelector('.hero-content');
    if(heroContent && window.scrollY < window.innerHeight){
      heroContent.style.transform = `translateY(${window.scrollY * 0.22}px)`;
      heroContent.style.opacity = String(Math.max(0, 1 - window.scrollY/700));
    }
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // hero mouse parallax (very subtle)
  const hero = document.getElementById('home');
  if(hero && !window.matchMedia('(pointer: coarse)').matches){
    hero.addEventListener('mousemove', e=>{
      const r = hero.getBoundingClientRect();
      const nx = (e.clientX - r.left)/r.width - 0.5;
      const ny = (e.clientY - r.top)/r.height - 0.5;
      hero.querySelector('.hero-bg img').style.transform = `scale(1.03) translate(${nx*14}px, ${ny*10}px)`;
      hero.querySelectorAll('.hero-orb').forEach((orb,i)=>{
        orb.style.transform = `translate(${nx* (i? -18:16)}px, ${ny* (i? -14:12)}px)`;
      });
    });
    hero.addEventListener('mouseleave', ()=>{
      hero.querySelector('.hero-bg img').style.transform = '';
      hero.querySelectorAll('.hero-orb').forEach(o=>o.style.transform='');
    });
  }

  // atmosphere floating dust — glowing bokeh & sparkling embers
  (function(){
    const dustWrap = document.getElementById('atmDust');
    if(!dustWrap) return;
    const n = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 14 : 26;
    for(let i=0;i<n;i++){
      const d=document.createElement('span');
      const isSparkle = Math.random() < 0.42;
      d.className = isSparkle ? 'atm-dot is-sparkle' : 'atm-dot';
      const size = (5 + Math.random() * 7).toFixed(1);
      d.style.width = size + 'px';
      d.style.height = size + 'px';
      d.style.left = (Math.random()*100)+'%';
      d.style.top = (35+Math.random()*60)+'%';
      d.style.animationDuration = (10+Math.random()*12)+'s';
      d.style.animationDelay = (Math.random()*10)+'s';
      dustWrap.appendChild(d);
    }
  })();

  // tilt hover for cards (premium micro-interaction)
  document.addEventListener('mousemove', e=>{
    if(window.innerWidth<900) return;
    document.querySelectorAll('.value, .menu-card, .bs-card').forEach(card=>{
      const r=card.getBoundingClientRect();
      if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom){
        card.style.transform=''; return;
      }
      const cx=r.left+r.width/2, cy=r.top+r.height/2;
      const rx=(e.clientY-cy)/r.height*-6, ry=(e.clientX-cx)/r.width*8;
      if(card.matches(':hover')) card.style.transform=`perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
  });

  hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow='';
  }));

  // Smooth scroll (native smooth already, but ensure offset)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id = a.getAttribute('href');
      if(id.length>1){
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
      }
    });
  });

  // Best Seller — Infinite Marquee (slow left) + Random on refresh
  const track = document.getElementById('sliderTrack');
  const viewport = document.getElementById('sliderViewport');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsWrap = document.getElementById('sliderDots');
  const hintEl = document.querySelector('.slider-hint');
  const wrapEl = document.querySelector('.slider-wrap');

  function shuffle(arr){
    const a = [...arr];
    for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }
  const shuffled = shuffle(bestSeller);

  function bsHTML(item){
    return `<article class="bs-card" data-name="${item.name}">
        <div class="bs-img">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <span class="bs-badge">BEST SELLER</span>
        </div>
        <div class="bs-info">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="bs-bottom">
            <span class="bs-price">${item.price}</span>
            <button class="btn-sm">View Detail</button>
          </div>
        </div>
      </article>`;
  }

  // 3x duplicate guarantees seamless loop on all widths
  const loopSet = [...shuffled, ...shuffled, ...shuffled];
  track.innerHTML = loopSet.map(bsHTML).join('');
  track.classList.add('marquee');
  viewport.classList.add('marquee');
  wrapEl.classList.add('marquee-mode');
  dotsWrap.style.display = 'none';
  if(hintEl){ hintEl.textContent = '⟵ Mengalir perlahan — hover untuk jeda · drag untuk geser ⟶'; hintEl.classList.add('marquee-hint'); }

  let marqueeX = 0;
  let setWidth = 0;
  let speed = 0.55; // px per frame (~33px/detik @60fps) — terasa slow premium
  let paused = false;
  let isDragging = false;
  let rafId = null;

  // respect prefers-reduced-motion
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) speed = 0.28;

  function calcWidth(){
    const card = track.querySelector('.bs-card');
    if(!card) return;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || 22);
    const step = card.offsetWidth + gap;
    setWidth = step * shuffled.length;
  }

  function tick(){
    if(!paused && !isDragging){
      marqueeX -= speed;
      if(marqueeX <= -setWidth) marqueeX += setWidth;
    }
    // normalize if dragged beyond bounds
    if(marqueeX > 0) marqueeX = -setWidth + (marqueeX % setWidth);
    if(marqueeX <= -setWidth*1.5) marqueeX += setWidth;
    track.style.transform = `translateX(${marqueeX}px)`;
    rafId = requestAnimationFrame(tick);
  }

  function start(){ if(rafId) cancelAnimationFrame(rafId); calcWidth(); rafId = requestAnimationFrame(tick); }

  // controls nudge
  function nudge(dir){
    const card = track.querySelector('.bs-card');
    const gap = parseFloat(getComputedStyle(track).gap || 22);
    const step = card ? card.offsetWidth + gap : 362;
    marqueeX += dir * step;
    if(marqueeX > 0) marqueeX -= setWidth;
    if(marqueeX < -setWidth) marqueeX += setWidth;
    track.style.transform = `translateX(${marqueeX}px)`;
  }
  prevBtn.addEventListener('click',()=> nudge(1));
  nextBtn.addEventListener('click',()=> nudge(-1));

  // pause on hover / focus
  viewport.addEventListener('mouseenter',()=> paused = true);
  viewport.addEventListener('mouseleave',()=> paused = false);
  viewport.addEventListener('focusin',()=> paused = true);
  viewport.addEventListener('focusout',()=> paused = false);
  document.addEventListener('visibilitychange',()=> paused = document.hidden);

  // drag to scroll (pause autoplay while dragging)
  let startX = 0, startMarqueeX = 0, hasDragged = false;
  const getX = e => e.touches ? e.touches[0].clientX : e.clientX;
  const onDown = e=>{
    isDragging = true; hasDragged = false;
    startX = getX(e); startMarqueeX = marqueeX;
    viewport.style.cursor='grabbing';
    if(e.cancelable && e.type==='touchstart'){} // keep passive
  };
  const onMove = e=>{
    if(!isDragging) return;
    const diff = getX(e) - startX;
    if(Math.abs(diff) > 5) hasDragged = true;
    marqueeX = startMarqueeX + diff;
    // keep infinite feel
    if(marqueeX > 0) marqueeX -= setWidth;
    if(marqueeX < -setWidth*2) marqueeX += setWidth*2;
    track.style.transform = `translateX(${marqueeX}px)`;
  };
  const onUp = ()=>{
    if(!isDragging) return;
    isDragging = false; viewport.style.cursor='grab';
    // normalize to within one set
    marqueeX = ((marqueeX % setWidth) + setWidth) % setWidth;
    marqueeX = -marqueeX;
    if(marqueeX===0) marqueeX = -0.01; // avoid exact 0 snap
    setTimeout(()=> hasDragged=false, 0);
  };
  viewport.addEventListener('mousedown', onDown);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);
  viewport.addEventListener('touchstart', onDown, {passive:true});
  viewport.addEventListener('touchmove', onMove, {passive:true});
  viewport.addEventListener('touchend', onUp);
  track.addEventListener('click', e=>{ if(hasDragged) e.preventDefault(); }, true);

  window.addEventListener('resize', ()=> calcWidth());
  // wait for images then measure
  window.addEventListener('load', start);
  // fallback if load already fired
  setTimeout(start, 300);

  // Menu filter + Show 4 / Selengkapnya
  const menuGrid = document.getElementById('menuGrid');
  const tabs = document.querySelectorAll('.tab');
  const moreWrap = document.getElementById('menuMoreWrap');
  const moreBtn = document.getElementById('menuMoreBtn');
  let menuFilter = 'all';
  let menuExpanded = false;
  const MENU_LIMIT = 4;
  function getFiltered(){ return menuFilter==='all' ? menuData : menuData.filter(m=>m.cat===menuFilter); }
  function renderMenu(){
    const filtered = getFiltered();
    const toShow = menuExpanded ? filtered : filtered.slice(0, MENU_LIMIT);
    menuGrid.innerHTML = toShow.map(m=>`
      <article class="menu-card animate-in" data-cat="${m.cat}">
        <img src="${m.image}" alt="${m.name}" loading="lazy">
        <div class="menu-card-body">
          <span class="menu-cat">${m.cat}</span>
          <h3>${m.name}</h3>
          <p>${m.desc}</p>
          <div class="menu-card-foot">
            <span class="menu-price">${m.price}</span>
            <button class="btn-sm">Add</button>
          </div>
        </div>
      </article>
    `).join('');
    if(filtered.length <= MENU_LIMIT){
      moreWrap.classList.add('hidden');
    } else {
      moreWrap.classList.remove('hidden');
      moreBtn.innerHTML = menuExpanded ? `Tampilkan Lebih Sedikit <span class="more-arrow">↑</span>` : `Lihat Selengkapnya <span class="more-arrow">↓</span>`;
      moreBtn.classList.toggle('expanded', menuExpanded);
    }
  }
  renderMenu();
  moreBtn.addEventListener('click',()=>{
    menuExpanded = !menuExpanded;
    renderMenu();
    if(!menuExpanded) document.getElementById('menu').scrollIntoView({behavior:'smooth'});
  });
  tabs.forEach(t=>t.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    menuFilter = t.dataset.filter;
    menuExpanded = false;
    menuGrid.style.opacity='0';
    menuGrid.style.transform='translateY(8px)';
    menuGrid.style.transition='all .25s';
    setTimeout(()=>{ renderMenu(); menuGrid.style.opacity='1'; menuGrid.style.transform='none'; }, 220);
  }));

  // Gallery masonry + lightbox
  const masonry = document.getElementById('masonry');
  masonry.innerHTML = galleryImages.map((src,i)=>`
    <div class="masonry-item" data-i="${i}">
      <img src="${src}" alt="TIKUM gallery ${i+1}" loading="lazy">
      <div class="masonry-overlay"><span>View — TIKUM</span></div>
    </div>
  `).join('');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImage');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');
  let lbIdx = 0;
  function openLB(i){ lbIdx=i; lbImg.src=galleryImages[lbIdx]; lb.classList.add('open'); lb.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
  function closeLB(){ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
  function navLB(dir){ lbIdx=(lbIdx+dir+galleryImages.length)%galleryImages.length; lbImg.src=galleryImages[lbIdx]; }
  masonry.querySelectorAll('.masonry-item').forEach(el=>el.addEventListener('click',()=>openLB(parseInt(el.dataset.i))));
  lbClose.addEventListener('click',closeLB);
  lbPrev.addEventListener('click',()=>navLB(-1));
  lbNext.addEventListener('click',()=>navLB(1));
  lb.addEventListener('click',e=>{ if(e.target===lb) closeLB(); });
  document.addEventListener('keydown',e=>{
    if(!lb.classList.contains('open')) return;
    if(e.key==='Escape') closeLB();
    if(e.key==='ArrowLeft') navLB(-1);
    if(e.key==='ArrowRight') navLB(1);
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting){ ent.target.classList.add('in'); io.unobserve(ent.target); }
    });
  }, {threshold:.14, rootMargin:'0px 0px -40px 0px'});
  revealEls.forEach(el=>io.observe(el));

  // Subtle parallax for featured image
  const feat = document.getElementById('featParallax');
  if(feat){
    window.addEventListener('scroll',()=>{
      const r = feat.getBoundingClientRect();
      if(r.top < window.innerHeight && r.bottom>0){
        const p = (window.innerHeight - r.top)/(window.innerHeight+r.height);
        feat.querySelector('img').style.transform = `translateY(${(p-0.5)*18}px) scale(1.06)`;
      }
    },{passive:true});
  }

  // —— Aesthetic Drizzle on Hero (Section 1) ——
  (function(){
    const canvas = document.getElementById('rainCanvas');
    if(!canvas) return;
    const hero = document.getElementById('home');
    const ctx = canvas.getContext('2d', {alpha:true});
    let drops = [];
    let raf = null;
    let w=0,h=0,dpr=1;
    let heroVisible = true;
    let pausedByTab = false;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    function density(){
      const area = w*h;
      let n = Math.round(area / 4800); // lebih deras (sebelumnya 11000)
      if(isMobile) n = Math.round(n*0.82);
      if(isReduced) n = Math.round(n*0.5);
      return Math.min(Math.max(n, 150), isReduced ? 170 : 420);
    }

    function rand(a,b){ return a + Math.random()*(b-a); }

    function makeDrop(){
      // slightly stronger wind — diagonal kiri-bawah
      const layer = Math.random();
      let len, speed, opacity, thick;
      if(layer < 0.38){ len = rand(14,22); speed = rand(7,11); opacity = rand(0.33,0.52); thick = rand(0.9,1.18); }
      else if(layer < 0.78){ len = rand(22,34); speed = rand(10.5,15); opacity = rand(0.45,0.66); thick = rand(1.05,1.42); }
      else { len = rand(32,46); speed = rand(13.5,17.5); opacity = rand(0.52,0.74); thick = rand(1.2,1.68); }
      if(isReduced){ speed *= 0.62; opacity *= 0.72; }
      return {
        x: rand(-60, w+60),
        y: rand(-h*0.6, h),
        len, speed, opacity, thick,
        drift: rand(1.15,2.15),
        sway: rand(-0.18,0.18),
        swayPhase: rand(0, Math.PI*2)
      };
    }

    function resize(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = hero.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w+'px';
      canvas.style.height = h+'px';
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const n = density();
      // keep existing if resizing slightly; rebuild if count changed a lot
      if(Math.abs(drops.length - n) > 20 || drops.length===0){
        drops = Array.from({length:n}, makeDrop);
      }
    }

    let t = 0;
    function frame(){
      if(!heroVisible || pausedByTab){ raf = requestAnimationFrame(frame); return; }
      t += 0.016;
      ctx.clearRect(0,0,w,h);
      // soft vignette fog so rain feels misty
      // subtle ambient haze gradient (very low alpha)
      // drawn once per frame cheap

      for(let i=0;i<drops.length;i++){
        const d = drops[i];
        // sway micro
        const sx = Math.sin(t*0.7 + d.swayPhase) * d.sway;
        // trail gradient: head bright, tail fade
        const x1 = d.x + sx;
        const y1 = d.y;
        const x2 = x1 - d.drift * (d.len*0.18);
        const y2 = y1 + d.len;

        // main streak — lebih kontras untuk hujan deras
        const grad = ctx.createLinearGradient(x1,y1,x2,y2);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.12, `rgba(255,255,255,${d.opacity*0.55})`);
        grad.addColorStop(1, `rgba(255,255,255,${d.opacity*1.12 > 1 ? 1 : d.opacity*1.12})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = d.thick;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();

        // specular highlight lebih terlihat
        if(d.opacity > 0.4){
          ctx.fillStyle = `rgba(255,255,255,${d.opacity*0.36})`;
          ctx.beginPath();
          ctx.arc(x2,y2, d.thick*0.62, 0, Math.PI*2);
          ctx.fill();
        }

        d.y += d.speed;
        d.x -= d.drift; // wind left
        d.x += Math.sin(t*0.9 + d.swayPhase)*0.04;

        // recycle
        if(d.y > h + 20 || d.x < -80){
          d.y = rand(-40, -2);
          d.x = rand(-10, w+40);
          // re-randomize a bit for natural variation
          d.len = rand(d.len*0.85, d.len*1.15);
          d.speed = rand(d.speed*0.9, d.speed*1.1);
        }
      }

      // ultra subtle bokeh droplets (out of focus) — 5-7 floating
      // drawn with radial gradient, very soft
      raf = requestAnimationFrame(frame);
    }

    resize();
    frame();
    let rTimer;
    window.addEventListener('resize', ()=>{ clearTimeout(rTimer); rTimer=setTimeout(resize,120); });

    // pause when hero offscreen (save gpu)
    const ioHero = new IntersectionObserver(entries=>{
      heroVisible = entries[0].isIntersecting;
    }, {threshold:0});
    ioHero.observe(hero);
    document.addEventListener('visibilitychange', ()=> pausedByTab = document.hidden);
  })();

});
