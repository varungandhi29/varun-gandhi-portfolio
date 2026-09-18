/*-----------------------------------------------------------
* Template Name    : Aditya - Personal Portfolio
* Author           : AdityaSeth777
* Version          : 1.0
* Created          : Oct 2022
* File Description : Main Js file of the template
*------------------------------------------------------------
*/

! function($) {
    "use strict";

    /* ---------------------------------------------- /*
    * Preloader
    /* ---------------------------------------------- */

    $(window).on('load', function() {
        var preloader = document.getElementById('preloader');
        if (preloader) {
            // Add a small delay for smooth visual transition
            setTimeout(function() {
                preloader.classList.add('loaded');
            }, 800);
        }
    });

    /* ---------------------------------------------- /*
    * Section Scroll - Navbar
    /* ---------------------------------------------- */
    
    $('.navbar-nav a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');

        if($('.navbar').hasClass('active')){
            $('.navbar').removeClass('active')
            $('.ham').removeClass('active')
        }

        event.preventDefault();
    });

    $('.navbar-toggler').on('click', function(){
        $('.aside').toggleClass('aside-open');
        $(".ham").toggleClass('active');
    });


    $(window).on("scroll",function() {
        if ($(this).scrollTop() > 50 ) {
            $('.section-about').addClass("in");
            $('.overlay-wrap').fadeOut(400);
        } else {
            $('.section-about').removeClass("in");
            $('.overlay-wrap').fadeIn(400);
        }

        if ($(this).scrollTop() > 500 ) {
            $('.navbar.fixed-top').fadeIn(400);
        } else {
            $('.navbar.fixed-top').fadeOut(400);
        }


    });

    /* ---------------------------------------------- /*
    * Scroll Spy - init
    /* ---------------------------------------------- */

    $("#navbarCollapse").scrollspy({
        offset:20
    });

    /* ---------------------------------------------- /*
    * Magnific Popup - Init
    /* ---------------------------------------------- */

    $('.simple-ajax-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',

            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    /* ---------------------------------------------- /*
    * Swipper - Init
    /* ---------------------------------------------- */

    // Portolio init

    var swiper = new Swiper('.swiper-portfolio', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: -30,
        initialSlide: 2,
        coverflowEffect: {
            rotate: 25,
            stretch: 0,
            depth: 150,
            slideShadows : false,
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: '.portfolio-pagination',
            dynamicBullets: true,
        },
    });

    // Testimony init

    var swipertest = new Swiper('.swiper-testimony', {
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Blog Init

    var swipert = new Swiper('.swiper-blog', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        speed: 800,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Home Banner Init

    var swiper = new Swiper('.swiper-home', {
        spaceBetween: 3,
        effect: 'fade',
        pagination: {
            el: '.home-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    /* ---------------------------------------------- /*
    * Parallax - Init
    /* ---------------------------------------------- */

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('#home').css({'background-attachment': 'scroll'});
    } else {
        $('#home').parallax('50%', -0.3);
    }

    if($('.section-home').length) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $('.swiper-slide').css({'background-attachment': 'scroll'});
        } else {
            $('.swiper-slide').parallax('50%', -0.3);
        }        
    }

    /* ---------------------------------------------- /*
    * AnimateOnScroll - Init
    /* ---------------------------------------------- */

    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
      }
    );
    wow.init();

    /* ---------------------------------------------- /*
    * Youtub Player
    /* ---------------------------------------------- */


    if($('.youtube-bg').length) {
        $(".youtube-bg").mb_YTPlayer();
    }

    /* ---------------------------------------------- /*
    * Initialize shuffle plugin
    /* ---------------------------------------------- */

    var $portfolioContainer = $('.list-items-container');

    $('#filter li').on('click', function (e) {
        e.preventDefault();

        $('#filter li').removeClass('active');
        $(this).addClass('active');

        var group = $(this).attr('data-group');
        var groupName = $(this).attr('data-group');

        $portfolioContainer.shuffle('shuffle', groupName );
    });


    $(document).ready( function() {

        $('.simple-ajax-popup').magnificPopup({
            type: 'image',
            gallery:{enabled:true}
        });
        
        if ($('#home').length && typeof $.fn.ripples !== 'undefined') {
            $('#home').ripples({
                resolution: 500,
                dropRadius: 20,
                perturbance: 0.04
            });
        }

    });

    /* ---------------------------------------------- /*
    * Switcher
    /* ---------------------------------------------- */

    $('.toggle-theme-panel').on("click",function(e) {
        e.preventDefault();
        $('.settings_panel').toggleClass('active');
    });
    $('.colors-switch a').on("click",function(e) {
        e.preventDefault();
        var attr = $(this).attr("title");
        console.log(attr);
        $('head').append('<link rel="stylesheet" href="assets/css/'+attr+'.css">');
    });


	/* ---------------------------------------------- /*
    * Typing Animation
    /* ---------------------------------------------- */
    var typingRoles = ["Aspiring Cybersecurity Engineer", "Cloud Security Specialist", "AWS IAM Security Auditor", "Threat Deception Architect"];
    var currentRoleIndex = 0;
    var currentCharIndex = 0;
    var isDeleting = false;
    var typingElement = document.querySelector('.hero-typing-text');
    
    function typeEffect() {
        if (!typingElement) return;
        
        var currentRole = typingRoles[currentRoleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        var typingSpeed = 100;
        if (isDeleting) typingSpeed /= 2;
        
        if (!isDeleting && currentCharIndex === currentRole.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % typingRoles.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    setTimeout(typeEffect, 1000);

    /* ---------------------------------------------- /*
    * Animated Counters
    /* ---------------------------------------------- */
    var counted = false;
    $(window).on("scroll", function() {
        var counterSection = $('.about-stats-row');
        if (counterSection.length) {
            var oTop = counterSection.offset().top - window.innerHeight;
            if (counted == 0 && $(window).scrollTop() > oTop) {
                $('.about-stat-number').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-target');
                    $({
                        countNum: $this.text()
                    }).animate({
                            countNum: countTo
                        },
                        {
                            duration: 800,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                            }
                        });
                });
                counted = 1;
            }
        }
    });

    /* ---------------------------------------------- *
     * Perspective Grid – Single Canvas, Zero DOM Tiles
     * Covers ALL sections, scales for tall ones
     /* ---------------------------------------------- */
    (function() {
        var canvas = document.createElement('canvas');
        canvas.id = 'pgrid-canvas';
        document.body.appendChild(canvas);
        var ctx = canvas.getContext('2d');
        var dpr = window.devicePixelRatio || 1;

        var TILE = 28, BASE_COLS = 50, BASE_ROWS = 50;
        var P = 2000, FADE = 1500;
        var COLORS = [[248,113,113],[56,189,248],[74,222,128],[253,224,71]];

        // Precompute rotation matrix (Rx(30) * Ry(-5) * Rz(20))
        var rx = 30*Math.PI/180, ry = -5*Math.PI/180, rz = 20*Math.PI/180;
        var cRx=Math.cos(rx),sRx=Math.sin(rx),cRy=Math.cos(ry),sRy=Math.sin(ry),cRz=Math.cos(rz),sRz=Math.sin(rz);
        var R00=cRy*cRz, R01=-cRy*sRz, R10=sRx*sRy*cRz+cRx*sRz, R11=-sRx*sRy*sRz+cRx*cRz;
        var R20=-cRx*sRy*cRz+sRx*sRz, R21=cRx*sRy*sRz+sRx*cRz;

        var active = new Map();
        var mouseX = -9999, mouseY = -9999;
        // All content sections (skip hero which is .section-home)
        var sections = document.querySelectorAll('.section:not(.section-home)');

        function resize() {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resize();
        window.addEventListener('resize', resize);
        document.addEventListener('mousemove', function(e) { mouseX = e.clientX; mouseY = e.clientY; });

        function proj(gx, gy, cx, cy, gw, gh) {
            var x = (gx - gw/2)*2, y = (gy - gh/2)*2;
            var x2 = R00*x + R01*y, y2 = R10*x + R11*y, z2 = R20*x + R21*y;
            var s = P / (P + z2);
            return { x: cx + x2*s, y: cy + y2*s };
        }

        function screenToCell(sx, sy, cx, cy, gw, gh, cols, rows) {
            var dx = sx - cx, dy = sy - cy;
            var A = dx*R20 - P*R00, B = dx*R21 - P*R01;
            var C = dy*R20 - P*R10, D = dy*R21 - P*R11;
            var det = A*D - B*C;
            if (Math.abs(det) < 0.001) return null;
            var x = P*(-dx*D + B*dy) / det;
            var y = P*(-A*dy + C*dx) / det;
            var gx = x/2 + gw/2, gy = y/2 + gh/2;
            var col = Math.floor(gx/TILE), row = Math.floor(gy/TILE);
            if (col < 0 || col >= cols || row < 0 || row >= rows) return null;
            return { col: col, row: row };
        }

        function getColor(c, r) {
            var i = c * 100 + r;
            return COLORS[((i % 4) + (i % 7) + (i % 11)) % 4];
        }

        function isDark(sec) {
            return sec.classList.contains('section-dark') ||
                   sec.classList.contains('section-resume') ||
                   sec.classList.contains('section-social') ||
                   sec.classList.contains('section-certifications') ||
                   sec.classList.contains('section-testimony') ||
                   sec.classList.contains('section-contact');
        }

        function draw() {
            var w = window.innerWidth, h = window.innerHeight, now = performance.now();
            ctx.clearRect(0, 0, w, h);

            sections.forEach(function(sec, si) {
                var rect = sec.getBoundingClientRect();
                if (rect.bottom < 0 || rect.top > h) return;

                // Scale grid to cover section height
                var cols = BASE_COLS;
                var rows = Math.max(BASE_ROWS, Math.ceil(rect.height / TILE) + 20);
                var gw = cols * TILE, gh = rows * TILE;
                var dark = isDark(sec);

                ctx.save();
                ctx.beginPath();
                ctx.rect(rect.left, rect.top, rect.width, rect.height);
                ctx.clip();

                var cx = rect.left + rect.width/2, cy = rect.top + rect.height/2;

                // Grid lines - white on dark, dark on light
                ctx.strokeStyle = dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                for (var r = 0; r <= rows; r++) {
                    var a = proj(0, r*TILE, cx, cy, gw, gh), b = proj(gw, r*TILE, cx, cy, gw, gh);
                    ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
                }
                for (var c = 0; c <= cols; c++) {
                    var a = proj(c*TILE, 0, cx, cy, gw, gh), b = proj(c*TILE, gh, cx, cy, gw, gh);
                    ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
                }
                ctx.stroke();

                // Draw active (fading) tiles
                active.forEach(function(d, key) {
                    if (d.si !== si) return;
                    var elapsed = now - d.t;
                    if (elapsed > FADE) { active.delete(key); return; }
                    var alpha = 0.55 * (1 - elapsed/FADE);
                    ctx.fillStyle = 'rgba('+d.c[0]+','+d.c[1]+','+d.c[2]+','+alpha+')';
                    var p0=proj(d.col*TILE,d.row*TILE,cx,cy,d.gw,d.gh);
                    var p1=proj((d.col+1)*TILE,d.row*TILE,cx,cy,d.gw,d.gh);
                    var p2=proj((d.col+1)*TILE,(d.row+1)*TILE,cx,cy,d.gw,d.gh);
                    var p3=proj(d.col*TILE,(d.row+1)*TILE,cx,cy,d.gw,d.gh);
                    ctx.beginPath(); ctx.moveTo(p0.x,p0.y); ctx.lineTo(p1.x,p1.y);
                    ctx.lineTo(p2.x,p2.y); ctx.lineTo(p3.x,p3.y); ctx.closePath(); ctx.fill();
                });

                // Hit test mouse position
                if (mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom) {
                    var cell = screenToCell(mouseX, mouseY, cx, cy, gw, gh, cols, rows);
                    if (cell) {
                        var key = si+'-'+cell.col+'-'+cell.row;
                        active.set(key, { si:si, col:cell.col, row:cell.row, c:getColor(cell.col,cell.row), t:now, gw:gw, gh:gh });
                    }
                }
                ctx.restore();
            });
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    })();

}(window.jQuery);
