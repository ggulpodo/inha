$(document).ready(function () {
    // modal close
    $('.modal').click(function () {
        $(this).fadeOut();
    });

    // 오늘 하루 그만보기
    function getCookie(cookieName) {
        let search = cookieName + "=";
        let cookie = document.cookie;

        if (cookie.length > 0) {
            let startIndex = cookie.indexOf(cookieName);

            if (startIndex != -1) {
                startIndex += cookieName.length;
                endIndex = cookie.indexOf(";", startIndex);
                if (endIndex == -1) {
                    endIndex = cookie.length;
                }
                return unescape(cookie.substring(startIndex + 1, endIndex));
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    function setCookie(name, value, expiredays) {
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }

    // Top Banner
    new Swiper('.sw-top-banner', {
        loop: true,
        slidesPerView: 2,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.sw-top-banner-prev',
            nextEl: '.sw-top-banner-next',
        },
        pagination: {
            el: '.sw-top-pg',
            clickable: true,
        }
    });


    $('.help-event').click(function (event) {
        event.preventDefault();
        $('.wrap').addClass('wrap-ani')
        $('.wrap').toggleClass('wrap-close');
        $(this).toggleClass('help-event-active')
    });

    $('#top-day-check').click(function () {
        let temp = $(this).is(':checked');
        if (temp == true) {
            $('.wrap').addClass('wrap-ani')
            $('.wrap').removeClass('wrap-close');
            $('.help-event').removeClass('help-event-active')
            setCookie("inha_day", "close", 1);
        } else {
            setCookie("inha_day", "open", 1);
        }
    });

    let inha_day = getCookie('inha_day');

    if (inha_day == 'close') {
        $('.help-event').removeClass('help-event-active');
        $('#top-day-check').attr('checked', true);
    } else {
        $('.wrap').addClass('wrap-close');
    }

    // Go Top
    $('.go-top').click(function (event) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0,
        }, 600);
    });

    // Fix Menu
    let fix_menu_list_a = $('.fix-menu-list a');
    let fix_menu_offset = 60;
    let fix_menu_pos = [
        0,
        $('.notice').offset().top - fix_menu_offset,
        $('.coop').offset().top - fix_menu_offset,
        $('.service').offset().top - fix_menu_offset,
        $('.sns').offset().top - fix_menu_offset - 150,
    ];
    for (let i = 0; i < fix_menu_pos.length; i++) {
        let temp = fix_menu_pos[i];
        temp = Math.round(temp);
        fix_menu_pos[i] = temp;
    }

    let fix_menu_active = 'scroll';

    $.each(fix_menu_list_a, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();
            fix_menu_pos = [
                0,
                $('.notice').offset().top - fix_menu_offset,
                $('.coop').offset().top - fix_menu_offset,
                $('.service').offset().top - fix_menu_offset,
                $('.sns').offset().top - fix_menu_offset - 150,
            ];
            for (let i = 0; i < fix_menu_pos.length; i++) {
                let temp = fix_menu_pos[i];
                temp = Math.round(temp);
                fix_menu_pos[i] = temp;
            }

            fix_menu_active = 'click';

            fix_menu_list_a.removeClass('fix-menu-list-focus');
            let temp = fix_menu_pos[index];
            $('html, body').stop().animate({
                scrollTop: temp,
            }, 400, function () {
                fix_menu_list_a.eq(index).addClass('fix-menu-list-focus');

                setTimeout(delayTimer, 200)
            });
        });
    });

    function delayTimer() {
        fix_menu_active = 'scroll';
    }

    let start = fix_menu_pos.length - 1;
    $(window).scroll(function () {
        if (fix_menu_active == 'click') {
            return;
        }

        fix_menu_pos = [
            0,
            $('.notice').offset().top - fix_menu_offset,
            $('.coop').offset().top - fix_menu_offset,
            $('.service').offset().top - fix_menu_offset,
            $('.sns').offset().top - fix_menu_offset - 150,
        ];
        for (let i = 0; i < fix_menu_pos.length; i++) {
            let temp = fix_menu_pos[i];
            temp = Math.round(temp);
            fix_menu_pos[i] = temp;
        }
        let scy = $(window).scrollTop();

        fix_menu_list_a.removeClass('fix-menu-list-focus');

        for (let i = start; i >= 0; i--) {
            if (scy >= fix_menu_pos[i]) {
                fix_menu_list_a.eq(i).addClass('fix-menu-list-focus');
                break;
            }
        }
    });

    // Header Lang-list
    let bt_lang = $('.bt-lang');
    let lang_list = $('.lang-list');

    bt_lang.click(function (event) {
        event.preventDefault();
        lang_list.stop().slideToggle(200);
    });
    bt_lang.parent().mouseleave(function () {
        lang_list.stop().slideUp(200);
    });

    // Header Search
    let help_search = $('.help-search');
    let search_form = $('#search-form');
    let search_txt = $('.search-txt');
    let search_submit = $('.search-submit');
    let search_close = $('.search-close');
    let modal_search = $('.modal-search')
    let modal_search_cont = $('.modal-search-cont')
    let modal_search_close = $('.modal-search-close')
    let modal_search_bt = $('.modal-search-bt')

    help_search.click(function (event) {
        event.preventDefault();
        search_txt.val('');
        search_form.stop().slideDown(200);
    });

    search_close.click(function () {
        search_form.stop().slideUp(200);
    });
    search_submit.click(function () {
        let temp = search_txt.val();
        if (temp == '') {
            modal_search.show();
            return false;
        }
    });

    modal_search_close.click(function () {
        modal_search.hide();
    });
    modal_search_bt.click(function () {
        modal_search.hide();
    });
    modal_search.click(function () {
        modal_search.hide();
    });
    modal_search_cont.click(function (event) {
        event.stopPropagation();
    });

    // Gnb
    let scroll_posy = $(window).scrollTop();
    let header = $('.header');
    let wrap = $('.wrap');
    let header_top_h = $('.header-top').outerHeight();
    header_top_h = Math.round(header_top_h);

    // top-banner : open
    let wrap_margin_top = $('.wrap').css('margin-top');
    wrap_margin_top = parseInt(wrap_margin_top);

    $(window).scroll(function () {
        scroll_posy = $(window).scrollTop();
        wrap_margin_top = $('.wrap').css('margin-top');
        wrap_margin_top = parseInt(wrap_margin_top);

        if (scroll_posy >= (wrap_margin_top + header_top_h)) {
            header.addClass('header-fixed');
            wrap.addClass('wrap-padding');
        } else {
            header.removeClass('header-fixed');
            wrap.removeClass('wrap-padding');
        }
    });

    let mainmenu = $('.mainmenu');
    let header_sub = $('.header-sub');
    let sub_left_list_li = $('.sub-left-list > li');
    let sub_right_menu = $('.sub-right-menu');
    let user = $('.user');
    let sub_close = $('.sub-close');
    let black_bg = $('.black-bg');

    $.each(mainmenu, function (index, item) {
        $(this).click(function (e) {
            e.preventDefault();
            user.stop().hide();
            sub_close.stop().show();
            black_bg.stop().show();

            header_sub.stop().show();
            sub_left_list_li.stop().hide(10);
            sub_right_menu.stop().hide(10);
            sub_left_list_li.eq(index).stop().slideDown(300);
            sub_right_menu.eq(index).stop().slideDown(300);
        });
    });

    sub_close.click(function (e) {
        e.preventDefault();
        sub_left_list_li.stop().slideUp(200);
        sub_right_menu.stop().slideUp(200);
        header_sub.stop().hide();

        user.stop().show();
        sub_close.stop().hide();
        black_bg.stop().hide();
    });

    // User Menu
    let user_menu = $('.user-menu');
    let user_menu_list = $('.user-menu-list > li > a');
    let user_menu_link = $('.user-menu-link');
    let user_close = $('.user-close');

    user.click(function (e) {
        e.preventDefault();
        user_menu.stop().slideDown('fast');
        $(this).addClass('user-focus')
    });

    user_close.click(function () {
        user_menu.stop().slideUp('fast');
        user.removeClass('user-focus')
    });

    $.each(user_menu_list, function (index, item) {
        $(this).click(function (e) {
            e.preventDefault();

            user_menu_list.removeAttr('class');
            user_menu_link.removeClass('user-menu-link-focus')
            $(this).addClass('user-menu-list-focus');
            $(this).addClass('user-menu-icon-' + (index + 1));
            user_menu_link.eq(index).addClass('user-menu-link-focus')
        });
    });

    // Slide
    let sw_main = new Swiper('.sw-main', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        speed: 1000,
        // touchRatio: 0,
        allowTouchMove: false,
        pagination: {
            el: '.sw-main-pg',
            clickable: true,
        },
    });

    $('.sw-main-bt').click(function () {
        $(this).toggleClass('sw-main-bt-play');
        let temp = $(this).hasClass('sw-main-bt-play');
        if (temp == true) {
            sw_main.autoplay.stop();
        } else {
            sw_main.autoplay.start();
        }
    });

    // Banner Slide
    let sw_banner = new Swiper('.sw-banner', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
        speed: 600,
        navigation: {
            prevEl: '.sw-banner-prev',
            nextEl: '.sw-banner-next',
        },
    });

    // Info Slide
    let sw_info = new Swiper('.sw-info', {
        loop: true,
        navigation: {
            prevEl: '.sw-info-prev',
            nextEl: '.sw-info-next',
        },
        allowTouchMove: false,
    });

    // Coop news Slide
    $('.coop-news-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        prevArrow: '.coop-news-slide-prev',
        nextArrow: '.coop-news-slide-next',
    });

    // SNS Slide
    new Swiper('.sw-sns', {
        slidesPerView: 4,
        spaceBetween: 22,
        allowTouchMove: false,
    });

    let notice_data_div = $('.notice-data .notice-box');
    let bid_data_div = $('.bid-data .notice-box');
    let notice_cate = $('.notice-menu a');
    let notice_data_1 = [{
            title: '2021년 8월 온라인 학위수여식 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
            date: '2021.07.30.',
            page: '#'
        },
        {
            title: '[학생지원팀] 코로나19 수도권(인천) 거리두기 4단계 격상에 따른 교내시설이용 지침 안내',
            date: '2021.07.09.',
            page: '#'
        },
        {
            title: '조교/사무보조원 채용 공고',
            date: '2020.11.11.',
            page: '#'
        },
        {
            title: '[지속가능한 에너지부품소재 핵심연구지원센터] 연구원 채용',
            date: '2021.08.11.',
            page: '#'
        },
        {
            title: '미디어커뮤니케이션학과TA1 대학원생 1명(어문 인문 사범 사회계열)',
            date: '2021.08.11.',
            page: '#'
        }
    ];
    let notice_data_2 = [{
            title: '[학생지원팀] 코로나19 수도권(인천) 거리두기 4단계 격상에 따른 교내시설이용 지침 안내',
            date: '2021.07.09.',
            page: '#'
        },
        {
            title: '[학생지원팀] 코로나19 거리두기 개편안에 따른 실외체육시설이용 안내',
            date: '2021.06.30.',
            page: '#'
        },
        {
            title: '[국제지원팀]코로나 19 관련 외국인 유학생 개인 방역 수칙 안내',
            date: '2021.06.30.',
            page: '#'
        },
        {
            title: '2021학년도 1학기 기말고사 운영 방식 안내',
            date: '2021.05.21.',
            page: '#'
        },
        {
            title: '2021학년도 1학기 기말고사 응시 가이드라인 안내',
            date: '2021.05.21.',
            page: '#'
        },
        {
            title: '2021학년도 1학기 기말고사 응시 가이드라인 안내',
            date: '2021.04.14.',
            page: '#'
        }
    ];
    let notice_data_3 = [{
            title: '2021년 8월 온라인 학위수여식 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
            date: '2021.07.30.',
            page: '#'
        },
        {
            title: '[미래자동차 사업단] 미래자동차공학 융합전공/마이크로전공 설명회 및 신청 방법 안내',
            date: '2021.08.10.',
            page: '#'
        },
        {
            title: '[졸준학] 2021년 8월 온라인 학위수여식 학사복 대여 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '2021년 8월 수료예정자의 부분수강등록 신청 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '2021학년도 2학기 수강신청 안내',
            date: '2021.08.03.',
            page: '#'
        }
    ];
    let notice_data_4 = [{
            title: '2021학년도 2학기 가송재단 장학생 선발 공고',
            date: '2021.08.03.',
            page: '#'
        },
        {
            title: '[창업지원단] 창업 꿈나무 장학금 신청안내 (대학원)bb',
            date: '2021.07.30.',
            page: '#'
        },
        {
            title: '[창업지원단] 창업 꿈나무 장학금 신청안내 (학부)',
            date: '2021.07.30.',
            page: '#'
        },
        {
            title: '2021년 2학기 한국장학재단 푸른등대 기부장학사업 신규장학생 선발 안내',
            date: '2021.07.12.',
            page: '#'
        },
        {
            title: '',
            date: '',
            page: ''
        },
        {
            title: '2021-1학기 인천시 학자금 대출이자 지원안내',
            date: '2021.07.09.',
            page: '#'
        }
    ];
    let notice_data_5 = [{
            title: '[INSTAR] (BK21대학원혁신) 정보·보안 교육 - 박찬암 대표 초청 특강(8/20) 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '[교수학습개발센터] 2021학년도 2학기 교수법 워크숍 신청 안내',
            date: '2021.08.04.',
            page: '#'
        },
        {
            title: '[인하대 다문화융합연구소] 2021년 ICME (다문화교육 국제학술대회) 개최 안내',
            date: '2021.08.03.',
            page: '#'
        },
        {
            title: '[인공지능융합연구센터] 클라우드 기반 인공지능/빅데이터 교육 플랫폼 활용 세미나 안내 (8/18)',
            date: '2021.07.28.',
            page: '#'
        },
        {
            title: '[학생상담실] 대학혁신지원사업 - 인하인 마음보기 프로그램(온라인 심리검사) 안내',
            date: '2021.07.15.',
            page: '#'
        },
        {
            title: '인하대학교 다문화융합연구소의 <2021 질적연구방법론 캠프>에 초대합니다.',
            date: '2021.06.03.',
            page: '#'
        }
    ];
    let notice_data_6 = [{
            title: '조교/사무보조원 채용 공고',
            date: '2020.11.11.',
            page: '#'
        },
        {
            title: '[INSTAR] (BK21대학원혁신)2021-2학기 대학원 튜터링 프로그램 튜터/튜티 모집(~8/20)',
            date: '2021.08.13.',
            page: '#'
        },
        {
            title: '4기 인하라이프 아카데미 모집 안내',
            date: '2021.08.13.',
            page: '#'
        },
        {
            title: '물리학과 조교 채용 공고',
            date: '2021.08.13.',
            page: '#'
        },
        {
            title: '혁신공유대학사업(미래자동차 사업단) 연구원(석사) 채용 공고[~8/24(화)]',
            date: '2021.08.13.',
            page: '#'
        },
        {
            title: '2021학년도 하반기 한국전력공사 전력연구원 현장실습생 모집 안내',
            date: '2021.08.12.',
            page: '#'
        }
    ];
    let notice_data_7 = [{
            title: '인터넷라우터 교체에 따른 홈페이지, 포털서비스, 네트워크 서비스 일시 중지 안내(8.15(일) 08시~11시)',
            date: '2021.08.13.',
            page: '#'
        },
        {
            title: '2021 공사장 가림막 디자인 공모전',
            date: '2021.08.11.',
            page: '#'
        },
        {
            title: '2남관/6호관 옥상 LG유플러스 2G장비 철거 안내(8.10(화))',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '학생의료공제회 2021학년도 1학기(2021.03.01~2021.08.31) 접수 마감안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '교내 전체 정전 안내(8월 15일) 재공고',
            date: '2021.08.04.',
            page: '#'
        },
        {
            title: '2021 공과대학 학과홍보 동영상 공모전 수상작 안내',
            date: '2021.07.28.',
            page: '#'
        }
    ];
    let bid_data = [{
            title: '[입찰 재공고] 행운의 열쇠 구매',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '[입찰] 배터리 테스터기 구매',
            date: '2021.08.05.',
            page: '#'
        },
        {
            title: '[입찰] 형광분광기 구매',
            date: '2021.08.05',
            page: '#'
        },
        {
            title: '[입찰] 형광발광분석기 구매',
            date: '2021.08.05.',
            page: '#'
        },
        {
            title: '[입찰] 열변형시험기 구매',
            date: '2021.08.05.',
            page: '#'
        },
        {
            title: '[입찰] 인하대학교 경쟁력 강화를 위한 조사 용역',
            date: '2021.08.03.',
            page: '#'
        }
    ];

    let notice_data_all = [
        notice_data_1,
        notice_data_2,
        notice_data_3,
        notice_data_4,
        notice_data_5,
        notice_data_6,
        notice_data_7
    ];

    $.each(notice_cate, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();
            sort_data(notice_data_all[index], notice_data_div);
            notice_cate.removeClass('notice-menu-focus');
            $(this).addClass('notice-menu-focus');
        });
    });

    sort_data(notice_data_1, notice_data_div);

    sort_data(bid_data, bid_data_div);

    function sort_data(_obj, _where) {
        $.each(_where, function (index, item) {
            let temp_data = _obj[index];

            let temp_tit = $(this).find('.notice-box-tit');
            temp_tit.text(temp_data.title);

            let temp_date = $(this).find('.notice-box-date');
            temp_date.text(temp_data.date);

            let temp_link = $(this).find('.notice-box-link');
            temp_link.attr('href', temp_data.page);
        });
    }

    let notice_tit = $('.notice-tit');

    let notice_cont = $('.notice-cont');

    $.each(notice_tit, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();
            notice_cont.hide();
            notice_cont.eq(index).show();
            notice_tit.removeClass('notice-tit-focus');
            $(this).addClass('notice-tit-focus');
        });
    });

    // Site Map
    $('.sitemap-more').click(function (event) {
        event.preventDefault();
        $('.sitemap-main').stop().slideToggle(250);
    });
});

window.onload = function () {
    // 새로고침 시 무조건 상단으로 보내기
    $('html, body').stop().animate({
        scrollTop: 0
    }, 50);
}