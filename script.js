(function(){
  const nav=document.getElementById('nav');
  document.querySelector('.menu-toggle')?.addEventListener('click',()=>nav.classList.toggle('mobile-open'));
  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')));
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.10});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>io.observe(el));
  document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>{q.parentElement.classList.toggle('open');q.setAttribute('aria-expanded',q.parentElement.classList.contains('open'));}));

  const demos={
    tenis:{q:'Posso comprar um tênis de R$ 600 este mês?',t:'Dá para comprar à vista sem apertar o mês.',c:'Sua sobra segue positiva, a fatura continua controlada e a meta da viagem não muda de prazo.',r1:'R$ 830',r2:'Outubro',r3:'Preservada'},
    viagem:{q:'Uma viagem de R$ 3.200 em novembro cabe no meu ano?',t:'Cabe, mas o melhor momento para reservar é no próximo mês.',c:'Em agosto você encerra uma parcela de R$ 480. Esperar libera espaço e evita que setembro fique negativo.',r1:'R$ 1.310',r2:'Setembro',r3:'No prazo'},
    parcelar:{q:'É melhor pagar R$ 1.800 à vista ou parcelar em 6 vezes?',t:'À vista custa menos, mas 3 vezes protege melhor seu caixa.',c:'Pagar tudo agora reduz demais sua reserva. Em 3 vezes, nenhum mês fica negativo e a diferença de custo continua pequena.',r1:'R$ 540',r2:'Agosto',r3:'Protegida'}
  };
  const updateMainDemo=(key)=>{const d=demos[key];if(!d)return;const map={question:'demo-question',title:'demo-title',copy:'demo-copy',r1:'r1',r2:'r2',r3:'r3'};Object.entries(map).forEach(([k,id])=>{const el=document.getElementById(id);if(el)el.textContent=d[k==='question'?'q':k==='title'?'t':k==='copy'?'c':k];});};
  document.querySelectorAll('.question-chip').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.question-chip').forEach(b=>b.classList.remove('active'));btn.classList.add('active');updateMainDemo(btn.dataset.key);}));

  const billing={annual:{pro:'24,92',premium:'41,58',pn:'R$ 299 cobrados uma vez por ano',prn:'R$ 499 cobrados uma vez por ano'},monthly:{pro:'29,90',premium:'49,90',pn:'cobrado mensalmente',prn:'cobrado mensalmente'}};
  document.querySelectorAll('[data-billing]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-billing]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const d=billing[btn.dataset.billing];document.getElementById('pro-price').textContent=d.pro;document.getElementById('premium-price').textContent=d.premium;document.getElementById('pro-note').textContent=d.pn;document.getElementById('premium-note').textContent=d.prn;}));

  const modal=document.getElementById('demo');
  const openDemo=(e)=>{e?.preventDefault();modal.hidden=false;document.body.classList.add('modal-open');modal.querySelector('.demo-close')?.focus();};
  const closeDemo=()=>{modal.hidden=true;document.body.classList.remove('modal-open');};
  document.querySelectorAll('.js-open-demo').forEach(el=>el.addEventListener('click',openDemo));
  modal?.querySelectorAll('[data-close-demo]').forEach(el=>el.addEventListener('click',closeDemo));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeDemo();});
  document.querySelectorAll('[data-modal-demo]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-modal-demo]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const d=demos[btn.dataset.modalDemo];document.getElementById('modal-question').textContent=d.q;document.getElementById('modal-title').textContent=d.t;document.getElementById('modal-copy').textContent=d.c;document.getElementById('modal-r1').textContent=d.r1;document.getElementById('modal-r2').textContent=d.r2;document.getElementById('modal-r3').textContent=d.r3;}));

  document.querySelectorAll('.js-start').forEach(a=>a.addEventListener('click',()=>{if(a.getAttribute('href')==='#comecar'){/* internal flow placeholder: replace href with the real onboarding URL before launch */}}));

  var stickyCta=document.querySelector('.mobile-sticky-cta');
  var comoSec=document.getElementById('como');
  if(stickyCta&&comoSec){
    var toggleSticky=function(){var past=comoSec.offsetTop+comoSec.offsetHeight-80;stickyCta.classList.toggle('show',window.scrollY>past);};
    window.addEventListener('scroll',toggleSticky,{passive:true});
    window.addEventListener('resize',toggleSticky);
    toggleSticky();
  }
})();
