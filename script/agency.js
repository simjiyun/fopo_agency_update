(($, window, document, undefined) => {
    class Agency {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();
        }
        header(){
            const Window = $(window);
            const Header = $('#header');
            let newTop = Window.scrollTop();
            let oldTop = newTop;
            let X = '';

            Window.scroll(() => {
                if(Window.scrollTop() == 0){
                    Header.removeClass('addH60');
                }
                else {
                    Header.addClass('addH60');

                    newTop = Window.scrollTop();
                    X = oldTop - newTop > 0 ? 'UP' : 'DOWN';

                    if(X == 'UP'){
                        Header.addClass('addShow');
                        Header.removeClass('addHide');
                    }
                    if(X == 'DOWN'){
                        Header.addClass('addHide');
                        Header.removeClass('addShow');
                    }
                    oldTop = newTop;
                }
            });

            const mainBtn = $('.main-btn');
            const sub = $('.sub');
            const nav = $('#nav');
            const subBtn = $('.sub-btn');
            const subSub = $('.sub-sub');

            mainBtn.on({
                mouseenter(){
                    const $this = $(this);
                    mainBtn.removeClass('addHover');
                    $this.addClass('addHover');
                    sub.stop().fadeOut(100);
                    $this.next().stop().fadeIn(300);
                },
                focusIn(){
                    const $this = $(this);
                    mainBtn.removeClass('addHover');
                    $this.addClass('addHover');
                    sub.stop().fadeOut(100);
                    $this.next().stop().fadeIn(300);
                }
            });
            nav.on({
                mouseleave(){
                    mainBtn.removeClass('addHover');
                    sub.stop().fadeOut(300);
                    subSub.stop().fadeOut(300);
                }
            });
            subBtn.on({
                mouseenter(){
                    const $this = $(this);
                    subSub.stop().fadeOut(100);
                    $this.next().stop().fadeIn(300);
                },
                focusIn(){
                    const $this = $(this);
                    subSub.stop().fadeOut(100);
                    $this.next().stop().fadeIn(300);
                }
            });
        }
        section1(){
            const slideWrap = $('.slide-wrap');
            const slideView = $('.slide-view');
            const pageBtn = $('.page-btn');
            const $this = $(this);
            let cnt = 0;
            let mouseStart = null;
            let mouseEnd = null;
            let dragStart = null;
            let dragEnd = null;
            let mouseDown = null;
            let setId = null;
            let t = 0;
            let second = 0;
            let setId2 = null;
            
            function mainSlide(){
                slideWrap.stop().animate({left: -1874*cnt}, 500, 'easeInOutExpo', () => {
                    if(cnt>2){cnt=0}
                    if(cnt<0){cnt=2}
                    slideWrap.stop().animate({left: -1874*cnt}, 0);
                });
                pageEvent();
            }
            function nextCount(){
                cnt++;
                mainSlide();
            }
            function prevCount(){
                cnt--;
                mainSlide();
            }
            function pausefn(){
                clearInterval(setId);
                t = 1;
                second = 0;
                clearInterval(setId2);
                setId2 = setInterval(() => {
                    second++;
                    if(second >= 3){
                        autoTimer();
                        clearInterval(setId2);
                    }
                },1000);
            }
            slideView.on({
                mousedown(e){
                    mouseStart = e.clientX;
                    dragStart = e.clientX - slideWrap.offset().left-1874;
                    mouseDown = true;
                    pausefn();
                },
                mouseup(e){
                    mouseEnd = e.clientX;
                    mouseDown = false;
                    if(mouseStart - mouseEnd > 0){
                        nextCount();
                    }
                    if(mouseStart - mouseEnd < 0){
                        prevCount();
                    }
                    pausefn();
                },
                mousemove(e){
                    if(!mouseDown){return}
                    dragEnd = e.clientX;
                    slideWrap.css({left: dragEnd - dragStart});
                    pausefn();
                }
            });
            function pageEvent(){
                pageBtn.removeClass('addPage');
                pageBtn.eq(cnt>2?0:cnt).addClass('addPage');
            }
            function autoTimer(){
                setId = setInterval(nextCount, 5000);
            }
            setTimeout(autoTimer, 100);
        }
        section2(){
            
        }
        section3(){
            
        }
        section4(){
            
        }
        section5(){
            
        }
        section6(){
            
        }
        section7(){
            
        }
        section8(){
            
        }
        section9(){
            
        }
        section10(){
            
        }
        footer(){
            
        }
    }
    const newAgency = new Agency();
    newAgency.init();
})(jQuery, window, document);