$(function() {

  /* ── Cursor ── */
  $(document).on('mousemove', function(e) {
    $('#cur').css({left:e.clientX, top:e.clientY});
    setTimeout(()=>$('#cur-r').css({left:e.clientX,top:e.clientY}), 70);
  });
  $('a,button,.snav-item,.proj-row,.blog-card,.serv-cell,.proc-step,.testi-dot,.soc-link,.b-soc,.btn-gold,.btn-ghost').on('mouseenter',function(){
    $('body').addClass('cur-grow');
  }).on('mouseleave',function(){
    $('body').removeClass('cur-grow');
  });

  /* ── Clock ── */
  function tick() {
    const d = new Date();
    const t = [d.getHours(),d.getMinutes(),d.getSeconds()].map(n=>String(n).padStart(2,'0')).join(':');
    $('#clock').text(t);
  }
  tick(); setInterval(tick, 1000);

  /* ── Navigation ── */
  let cur = 0, total = 10, busy = false;

  window.goTo = function(idx) {
    if (idx<0 || idx>=total) return;
    const target = $('#s'+idx);
    if (target.length) {
      const offset = window.innerWidth <= 900 ? 70 : 80;
      busy = true;
      $('html, body').stop().animate({
        scrollTop: target.offset().top - offset
      }, 700, 'swing', function() {
        busy = false;
        onActive(idx);
      });
    }
    cur = idx;
    $('.snav-item').removeClass('active');
    $('[data-s="'+idx+'"]').addClass('active');
    $('#cur-num').text(String(idx+1).padStart(2,'0'));
    
    // Highlight topbar links
    $('.nav-link').removeClass('active');
    let topIdx = -1;
    if (idx === 0) topIdx = 0;
    else if (idx === 1) topIdx = 1;
    else if (idx === 2) topIdx = 2;
    else if (idx === 3) topIdx = 3;
    else if (idx === 4) topIdx = 4;
    else if (idx === 5) topIdx = 5;
    else if (idx === 8) topIdx = 6;
    else if (idx === 9) topIdx = 7;
    if (topIdx !== -1) {
      $('.nav-links .nav-link').eq(topIdx).addClass('active');
    }
  };

  function onActive(idx) {
    if (idx === 6) { // stats
      $('.sk-fill').each(function(){ $(this).css('width',$(this).data('w')+'%'); });
      $('.counter').each(function(){
        const $el=$(this); const sup=$el.find('.stat-sup');
        const target=parseInt($el.data('t'));
        $({n:0}).animate({n:target},{
          duration:1500,easing:'swing',
          step:function(){ $el.html((sup.length?'<span class="stat-sup">+</span>':'')+(Math.floor(this.n)||'')); },
          complete:function(){ $el.html((sup.length?'<span class="stat-sup">+</span>':'')+target); }
        });
      });
    }
  }

  /* Trigger stats animations when scrolled into view */
  const statsSec = document.getElementById('s6');
  if (statsSec) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onActive(6);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(statsSec);
  }

  /* nav dots */
  $('.snav-item').on('click',function(){ goTo(parseInt($(this).data('s'))); });

  /* ── Navigation Highlighting on Scroll ── */
  let scrollTimeout;
  $(window).on('scroll', function() {
    if (busy) return;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      const scrollPos = $(window).scrollTop() + window.innerHeight / 3;
      $('.section').each(function() {
        const id = $(this).attr('id');
        const top = $(this).offset().top;
        const height = $(this).outerHeight();
        if (scrollPos >= top && scrollPos < top + height) {
          const idx = parseInt(id.replace('s', ''));
          if (idx !== cur) {
            $('.snav-item').removeClass('active');
            $('[data-s="'+idx+'"]').addClass('active');
            $('#cur-num').text(String(idx+1).padStart(2,'0'));
            cur = idx;
            onActive(idx);
            
            // Highlight topbar links
            $('.nav-link').removeClass('active');
            let topIdx = -1;
            if (idx === 0) topIdx = 0;
            else if (idx === 1) topIdx = 1;
            else if (idx === 2) topIdx = 2;
            else if (idx === 3) topIdx = 3;
            else if (idx === 4) topIdx = 4;
            else if (idx === 5) topIdx = 5;
            else if (idx === 8) topIdx = 6;
            else if (idx === 9) topIdx = 7;
            if (topIdx !== -1) {
              $('.nav-links .nav-link').eq(topIdx).addClass('active');
            }
          }
        }
      });
    }, 50);
  });

  /* keyboard navigation */
  $(document).on('keydown',function(e){
    if ($(e.target).is('input, textarea')) return;
    if(e.key==='ArrowDown'||e.key==='PageDown') goTo(cur+1);
    if(e.key==='ArrowUp'||e.key==='PageUp') goTo(cur-1);
    const n=parseInt(e.key); if(n>=1&&n<=total) goTo(n-1);
  });

  /* ── FAQ Accordion ── */
  $('.faq-header').on('click', function() {
    const $item = $(this).closest('.faq-item');
    const $content = $item.find('.faq-content');
    const isActive = $item.hasClass('active');

    // Close other items
    $('.faq-item').removeClass('active').find('.faq-content').slideUp(300);

    if (!isActive) {
      $item.addClass('active');
      $content.slideDown(300);
    }
  });

  /* ── Testimonial rotator ── */
  let ti=0;
  function rotateTesti() {
    $('.testi-card').removeClass('active');
    $('.testi-dot').removeClass('active');
    ti=(ti+1)%3;
    $('.testi-card').eq(ti).addClass('active');
    $('.testi-dot').eq(ti).addClass('active');
  }
  let testiTimer=setInterval(rotateTesti,4000);
  $('.testi-dot').on('click',function(){
    clearInterval(testiTimer);
    ti=parseInt($(this).data('t'))-1;
    rotateTesti();
    testiTimer=setInterval(rotateTesti,4000);
  });

  /* ── Entrance ── */
  gsap.from('#s0 .sec-inner',{y:60,opacity:0,duration:1.3,ease:'power3.out',delay:.2});
  gsap.from('#topbar',{y:-40,opacity:0,duration:.9,ease:'power3.out',delay:.5});
  gsap.from('#side-nav',{x:-40,opacity:0,duration:.9,ease:'power3.out',delay:.7});
  gsap.from('#bottombar',{y:40,opacity:0,duration:.9,ease:'power3.out',delay:.6});

  /* ── Mouse parallax on blobs ── */
  $(document).on('mousemove',function(e){
    const rx=e.clientX/window.innerWidth-.5, ry=e.clientY/window.innerHeight-.5;
    gsap.to('.mb1',{x:rx*50,y:ry*50,duration:2.5,ease:'power1.out'});
    gsap.to('.mb2',{x:rx*-35,y:ry*-35,duration:2.5,ease:'power1.out'});
    gsap.to('.mb3',{x:rx*25,y:ry*20,duration:2.5,ease:'power1.out'});
  });

});