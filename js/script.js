// html, css, javaScript 가 로딩이 완료되었을 때.
// html 태그 구조 (DOM) 구조가 완료되었을 때 실행
$(document).ready(function() {
    // 공지사항 영역에 데이터 갱신 관련 
    // 데이터를 보여줄 html 의 요소(엘리먼트) 를 참조해둔다.

    // 공지사항 데이터를 보여줄 요소들
    var notice_data_div = $('.notice-data .notice-box');

    // 입찰공고 데이터를 보여줄 요소들
    var bid_data_div = $('.bid-data .notice-box');

    // 데이터의 카테고리를 선택할 수 있는 html 의 요소(element) 를 참조해둔다.
    var notice_cate = $('.notice-menu a');

    // 보여줄 데이터 목록을 저장해 둔다.
    var notice_data_1 = [{
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
            title: '조교/사무보조원 채용 공고',
            date: '2020.11.11.',
            page: '#'
        },
        {
            title: '[의류디자인학과] 2021-2학기 조교(LA1) 모집 공고',
            date: '2021.08.10.',
            page: '#'
        },
        {
            title: '상담센터 학생상담실 시간제 상담원 모집 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '[청년기술전문인력육성사업단] 기업연계 청년기술인력 육성사업 참여인력(산학협',
            date: '2021.08.09.',
            page: '#'
        }
    ];

    var notice_data_2 = [{
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
            title: '[학생지원팀] 코로나19 거리두기 개편안에 따른 실외체육시설이용 안내',
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
            title: '[교무처] 2021-1학기 중간고사 부정행위 관련 당부',
            date: '2021.04.14.',
            page: '#'
        }

    ];
    var notice_data_3 = [{
            title: '[원격교육지원센터] 2021학년도 2학기 군복무 중 원격강좌 학점취득 관련 안내 (군이러닝)',
            date: '2021.07.27.',
            page: '#'
        },
        {
            title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
            date: '2021.07.30.',
            page: '#'
        },
        {
            title: '[미래자동차 사업단]  미래자동차공학  융합전공 추가 접수 안내(~8/27 13:00)',
            date: '2021.08.20.',
            page: '#'
        },
        {
            title: '[공학교육혁신센터] 2021-2학기 학생대상 공학교육인증 설명회 개최',
            date: '2021.08.20.',
            page: '#'
        },
        {
            title: '2021년 8월 졸업자 관련 학위증서 배부안내',
            date: '2021.08.19.',
            page: '#'
        },
        {
            title: '2021학년도 2학기 수업 방식 안내(1~7주)',
            date: '2021.08.12.',
            page: '#'
        }

    ];
    var notice_data_4 = [{
            title: '[학부-국가장학]2021년 2학기 국가장학금 2차 신청 안내 ',
            date: '2021.08.17.',
            page: '#'
        },
        {
            title: '[학부-국가근로] 2021학년도 2학기 국가근로 장학생 희망근로기관 신청 안내',
            date: '2021.08.11.',
            page: '#'
        },
        {
            title: '2021학년도 2학기 가송재단 장학생 선발 공고',
            date: '2021.08.03.',
            page: '#'
        },
        {
            title: '[창업지원단] 창업 꿈나무 장학금 신청안내 (대학원)',
            date: '2021.07.30.',
            page: '#'
        },
        {
            title: 'eeee',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: ' [창업지원단] 창업 꿈나무 장학금 신청안내 (학부)',
            date: '2021.07.30.',
            page: '#'
        }

    ];
    var notice_data_5 = [{
            title: '인하대 다문화융합연구소의  북새통, 명사와 함께하는 다문화인문학 산책   특강 안내: 줌주소 포함',
            date: '2021.08.17.',
            page: '#'
        },
        {
            title: '[국어문화원] 외국인 대상 ‘한국어와 한국 문화 바로 알기’ 특강 수강자 모집 ',
            date: '2021.08.17.',
            page: '#'
        },
        {
            title: '[교수학습개발센터] 2021-1 9차 학습법 워크숍 안내  왜 우리는 배움에 실패하는가 - 새로운 배움의 방식 찾기 ',
            date: '2021.08.17.',
            page: '#'
        },
        {
            title: '[INSTAR] (BK21대학원혁신) 정보·기술 보안 교육 - 박찬암 대표 초청 특강(8/20)  안내 ',
            date: '2021.08.13.',
            page: '#'
        },
        {
            title: '인하대학교 다문화융합연구소의  2021 ICME 특강 유튜브 URL 안내 ',
            date: '2021.08.12.',
            page: '#'
        },
        {
            title: '[평생교육원] 인천시민대학(인하 라이프디자인 스쿨2) 교육생 모집',
            date: '2021.08.11',
            page: '#'
        }

    ];
    var notice_data_6 = [{
            title: '2021학년도 2학기 인하멘토링 멘토 모집 안내',
            date: '2021.08.12.',
            page: '#'
        },
        {
            title: '조교/사무보조원 채용 공고',
            date: '2020.11.11',
            page: '#'
        },
        {
            title: '[경제학과] 2021학년도 2학기 조교장학생(TA1) 모집 안내',
            date: '2021.08.20.',
            page: '#'
        },
        {
            title: '[창업지원단] 근로장학생 모집',
            date: '2021.08.20.',
            page: '#'
        },
        {
            title: '2021-2학기 공인회계사(CPA) 고시반 실원 선발 안내',
            date: '2021.08.19.',
            page: '#'
        },
        {
            title: '[법학연구소] 사무원 채용 공고',
            date: '2021.08.18.',
            page: '#'
        }

    ];
    var notice_data_7 = [{
            title: '[정석학술정보관] eBook 서비스 일시 중단 안내 - 8.17.(화) 10시 ~ 18시 ',
            date: '2021.08.17.',
            page: '#'
        },
        {
            title: '교내 전체 정전 복구 안내(8월 15일 교내 전체)',
            date: '2021.08.15.',
            page: '#'
        },
        {
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
        }

    ];

    // 입찰공고를 위한 데이터
    var bid_data = [{
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

    // 데이터의 카테고리를 클릭하면 데이터를 갱신하여 화면에 보여준다.
    var notice_data_all = [

        notice_data_1,
        notice_data_2,
        notice_data_3,
        notice_data_4,
        notice_data_5,
        notice_data_6,
        notice_data_7

    ];

    $.each(notice_cate, function(index, item) {
        $(this).click(function(event) {

            // item은 a태그입니다.
            // 그래서 웹 브라우저가 갱신됩니다.
            // 그래서 클릭시 데이터 갱신이 안됩니다.
            // a태그의 href 기본 기능을 막는다.
            event.preventDefault();
            sort_data(notice_data_all[index], notice_data_div);
            // css 꾸미기
            notice_cate.removeClass('notice-menu-focus');
            $(this).addClass('notice-menu-focus');
        });
    });

    //초기에 보여줄 데이터

    //공지 사항 처음 내용
    sort_data(notice_data_1, notice_data_div);
    //입찰 정보 처음 내용
    sort_data(bid_data, bid_data_div);

    function sort_data(_obj, _where) {


        $.each(_where, function(index, item) {

            // 실제 배치할 데이터
            var temp_data = _obj[index];

            // 제목자리
            var temp_tit = $(this).find('.notice-box-tit');
            temp_tit.text(temp_data.title);


            // 날짜자리
            var temp_date = $(this).find('.notice-box-date');
            temp_date.text(temp_data.date);

            // href="" anchor자리
            var temp_link = $(this).find('.notice-box-link');
            temp_link.attr('href', temp_data.page);

        });

        // dotdotdot.js 적용
        // $('.notice-box-tit').dotdotdot();
    }


    // 공지사항, 일찰정보 보이고 숨기기
    // .notice-tit을 저장해서 참조한다.
    var notice_tit = $('.notice-tit');

    // .notice-cont를 저장해서 참조한다.
    var notice_cont = $('.notice-cont');

    // notice-tit를 클릭하면 notice-cont를 보여줘라.
    $.each(notice_tit, function(index, item) {
        $(this).click(function(event) {
            // href 기본 기능을 막자
            event.preventDefault();
            //일단 모든 목록을 숨기자.
            notice_cont.hide();
            notice_cont.eq(index).show();

            // 포커스 이동하기
            notice_tit.removeClass('notice-tit-focus');
            $(this).addClass('notice-tit-focus');
        });
    });

});




//그림, 영상, 소리 등..
//html 태그에서 사용하는 멀티미디어 요소를
//모두 로딩 완료 했다면 그때 처리한다.
window.onload = function() {
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


    //메인슬라이드
    var sw_main = new Swiper('.sw-main', {
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
    $('.sw-main-bt').click(function() {
        $(this).toggleClass('sw-main-bt-play');
        // sw-main-bt-play 클래스가 있냐?
        var temp = $(this).hasClass('sw-main-bt-play');
        if (temp == true) {
            sw_main.autoplay.stop();
        } else {
            sw_main.autoplay.start();
        }
    });

    // 배너 슬라이드
    var sw_banner = new Swiper('.sw-banner', {
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

    // info 슬라이드
    var sw_info = new Swiper('.sw-info', {
        loop: true,
        navigation: {
            prevEl: '.sw-info-prev',
            nextEl: '.sw-info-next',
        },
        allowTouchMove: false,
    });

    // 산학협력단 뉴스 슬라이드
    $('.coop-news-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        draggable: false,
        prevArrow: '.coop-news-slide-prev',
        nextArrow: '.coop-news-slide-next',
    });

    // sns슬라이드
    new Swiper('.sw-sns', {
        slidesPerView: 4,
        spaceBetween: 22,
        allowTouchMove: false,
    });

}