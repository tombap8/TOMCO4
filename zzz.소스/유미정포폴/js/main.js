////// 제이쿼리 블록 /////////////////

// 자동 스크롤 기능 - autoScroll.js

///// 전역변수 구역 ///////////////
// 1. 현재 페이지 번호
let pno = 0;
// 2. 전체 페이지수
const totnum = 5;
// 3. 광스크롤 상태변수
let prot_sc = 0; //0-허용,1-불허용
// 4. 스크롤 애니메이션 시간
const dur_sc = 700;
// 광스크롤 금지시간 === 스크롤 애니메이션 시간
// 5. 스크롤 이징
const easing_sc = "easeOutQuint";




let bestdata = {
    "eu": {
        "사진1": "1-1",
        "패키지1": "패키지",
        "여행지1": "스위스/이탈리아 9일",
        "해시태그1": "#나폼소 #피렌체 #베네치아 #스위스 여왕의 산 리기",
        "금액1": "2,299,000원~",
        "사진2": "1-2",
        "패키지2": "패키지",
        "여행지2": "[1개국 베스트셀러] 스위스 일주 ",
        "해시태그2": "#시내호텔 1박 이상 #고르너그라트 or 리기산 등정 #여유로운 일정",
        "금액2": "3,499,000원~",
        "사진3": "1-3",
        "패키지3": "패키지",
        "여행지3": "[1개국 깊이보기] 스페인 일주 9일",
        "해시태그3": "#5성1박 #전일정4성호텔 #맛10 #마드리드시내호텔1박 #루프탑레스토랑 #플라멩고",
        "금액3": "3,699,000원~",
    },
    "dong": {
        "사진1": "2-1",
        "패키지1": "패키지",
        "여행지1": "보라카이 4일,5일 #라카멜라 신관",
        "해시태그1": "#전신마사지 #세일링보트 #디몰 #특식2회",
        "금액1": "399,000원~",
        "사진2": "2-2",
        "패키지2": "패키지",
        "여행지2": "[부산출발] 다낭 4일 #4성급호텔",
        "해시태그2": "#바나산 #호이안투어 #오전자유 #쇼핑3회",
        "금액2": "399,000원~",
        "사진3": "2-3",
        "패키지3": "패키지",
        "여행지3": "방콕/파타야 5일  #파타야 5성호텔 ",
        "해시태그3": "#가성비여행 #요트크루즈 #스노클링 #전통마사지",
        "금액3": "699,000원~",
    },
    "guam": {
        "사진1": "3-1",
        "패키지1": "패키지",
        "여행지1": "하얏트 리젠시 4일,5일",
        "해시태그1": "#전객실오션프론트 #NEW시내관광 #스페셜런치 #귀국시코로나검사비용지원 ",
        "금액1": "1,329,000원~",
        "사진2": "3-2",
        "패키지2": "에어텔, 패키지",
        "여행지2": "두짓타니 호텔 4,5일",
        "해시태그2": "#전객실오션프론트 #NEW시내관광 #에메랄드밸리 #귀국시코로나검사비용지원 ",
        "금액2": "1,619,000원~",
        "사진3": "3-3",
        "패키지3": "패키지",
        "여행지3": "롯데호텔 4일,5일",
        "해시태그3": "#오션뷰룸 #호텔조식 #인피니트풀 #카바나이용권 #귀국시코로나검사비용지원 ",
        "금액3": "1,109,000원~",
    },
    "sai": {
        "사진1": "4-1",
        "패키지1": "에어텔, 패키지",
        "여행지1": "사이판 켄싱턴 4,5일 #오션뷰 ",
        "해시태그1": "#올인클루시브 #키즈룸도 있어요",
        "금액1": "1,209,000원~",
        "사진2": "4-2",
        "패키지2": "에어텔, 패키지",
        "여행지2": "사이판 PIC 4,5일 #액티비티천국",
        "해시태그2": "#PIC영어클래스 #가족전용상품 포함",
        "금액2": "709,000원~",
        "사진3": "4-3",
        "패키지3": "패키지",
        "여행지3": "월드리조트 4,5일",
        "해시태그3": "#현지 PCR검사 지원 #가족전용상품 포함",
        "금액3": "809,000원~",
    },
    "jp": {
        "사진1": "5-1",
        "패키지1": "패키지",
        "여행지1": "오사카/고베 3일 #시내중심호텔",
        "해시태그1": "#가성비추천 #도톤보리관광 ",
        "금액1": "549,900원~",
        "사진2": "5-2",
        "패키지2": "패키지",
        "여행지2": "도쿄/요코하마/오다이바 3일",
        "해시태그2": "#도쿄시내숙박 #라면박물관",
        "금액2": "703,880원~",
        "사진3": "5-3",
        "패키지3": "패키지",
        "여행지3": "규슈 3일 #시내호텔숙박",
        "해시태그3": "#베스트셀러 #후쿠오카핵심관광",
        "금액3": "489,900원~",
    }
};


var scNum=0; //페이지번호


$(() => {

    // 호출확인
    console.log("로딩완료!");

    $('.sns a, .mosns a').click(function (e) {

        // a요소 기본이동막기
        e.preventDefault();
        // JS의 return false와 효과동일
        // 단, return false는 코드 맨아래 위치함!

        // 1. 클릭된 a요소의 텍스트읽기
        let atxt = $(this).text().trim();
        // trim() 앞뒤공백제거
        console.log(atxt)

        // 2. 이동할 페이지 주소할당하기
        let url;
        switch (atxt) {
            case "인스타그램":
                url = "https://www.instagram.com/hanatour_official/";
                break;
            case "페이스북":
                url = "https://www.facebook.com/HanaTour.fb";
                break;
            case "유튜브":
                url = "https://www.youtube.com/user/HanaTour";
                break;

        } ///////// switch case ////////

        // 3. 페이지 이동하기
        if (atxt === "로그인" ||
            atxt === "회원가입" ||
            atxt === "갤러리")
            location.href = url;
        else // 기타 sns는 새창열기(window.open())
            window.open().location.href = url;

    }); ///////// click //////////////////







    let block = 0;
    $('.mobtn').click(function(){

        if(block){
                $('#mobx').css({display:'none'})
                $('#mobx').css({width:'0px'})
                block = 0;
            
        }
        else{
            $('#mobx').css({display:'block'})
            $('#mobx').css({width:'200px'})
            block = 1;
        }
    })
    




    $('header').mouseenter(function(){
        $('#gnb li a').css({color:'#000'})
        $('.sns a').css({color:'#000'})
        $('header>.inner>a').css({color:'#000'})
    })
    $('#gnb li a').mouseenter(function(){
        $('#gnb li a').css({color:'#000'})
        $(this).css({color:'rgba(7, 207, 218, 0.6)'})
    })
    $('.sns a').mouseenter(function(){
        $('.sns a').css({color:'#000'})
        $(this).css({color:'rgba(7, 207, 218, 0.6)'})
    })
    $('#gnb li a').mouseout(function(){
        $('#gnb li a').css({color:'#000'})
    })
    $('.sns a').mouseout(function(){
        $('.sns a').css({color:'#000'})
    })
    $('header').mouseleave(function(){
        $('#gnb li a').css({color:'#fff'})
        $('.sns a').css({color:'#fff'})
        $('header>.inner>a').css({color:'#fff'})
    })
    $('header>.inner>a').mouseover(function(){
        $(this).css({color:'rgba(7, 207, 218, 0.6)'})
    })
    $('header>.inner>a').mouseleave(function(){
        $(this).css({color:'#000'})
    })
    $('header>.inner>a').mouseout(function(){
        $(this).css({color:'#000'})
    })



    $(".bestTravel span").click(function(){

        // 1. 버튼텍스트 읽어오기
        let btxt = $(this).attr('class');
        console.log("버튼:",btxt);

        let data = bestdata[btxt];
        console.log("데이터:",data);

        $('#content2 .main .bestTravel span').removeClass('on');

        $(this).addClass('on')

        for(let x in data){

        switch(x){
            case "사진1": $("#bestText1 .img").html(`<img src="../images/content2_${data[x]}.jpg" alt="포스터">`);
                break;
            case "패키지1": $('#bestText1 .text1 span').text(data[x]);
                break;
            case "여행지1": $('#bestText1 .text2 strong').text(data[x]);
                break;
            case "해시태그1": $('#bestText1 .text2 p').text(data[x]);
                break;
            case "금액1": $('#bestText1 .text3 strong').text(data[x]);
                break;
            case "사진2": $("#bestText2 .img").html(`<img src="../images/content2_${data[x]}.jpg" alt="포스터">`);
                break;
            case "패키지2": $('#bestText2 .text1 span').text(data[x]);
                break;
            case "여행지2": $('#bestText2 .text2 strong').text(data[x]);
                break;
            case "해시태그2": $('#bestText2 .text2 p').text(data[x]);
                break;
            case "금액2": $('#bestText2 .text3 strong').text(data[x]);
                break;
            case "사진3": $("#bestText3 .img").html(`<img src="../images/content2_${data[x]}.jpg" alt="포스터">`);
                break;
            case "패키지3": $('#bestText3 .text1 span').text(data[x]);
                break;
            case "여행지3": $('#bestText3 .text2 strong').text(data[x]);
                break;
            case "해시태그3": $('#bestText3 .text2 p').text(data[x]);
                break;
            case "금액3": $('#bestText3 .text3 strong').text(data[x]);
                break;
        }

    }

    });



    // 이벤트 대상: .abtn
    // 이벤트 : click() 메서드 사용
    // 양쪽버튼 구분 : .ab1(왼쪽버튼) / .ab2(오른쪽버튼)
    // 변경대상: #slide
    // 변경내용: 슬라이드의 left값을 이동하여 애니메이션함!
    let slide = $("#slide");

    // 변경에 사용할 제이쿼리 메서드: 
    // animate({CSS속성},시간,이징,함수)

    // 광클 금지상태변수
    let prot = 0; // 1-불허용, 0-허용

    // 애니메이션 시간 변수
    const aniT = 600;

    // 애니메이션 이징 변수
    const aniE = "easeInOutQuint";

    let pause = $(".pause");

    let isPlay = false;


    $(".abtn").click(function () {

        


        // console.log("진입:",prot);

        /// 광클금지 ////////
        if (prot) return;
        prot = 1; //잠금!
        setTimeout(() => prot = 0, aniT);
        // 0.6초후 prot=0 잠금해제!

        // console.log("통과:",prot);

        // 자동넘김 지우기함수 호출!
        clearAuto();

        // 1. 오른쪽여부
        // is(클래스/아이디명) -> 선택요소해당여부 리턴
        let isNext = $(this).is(".next");
        let isPrev = $(this).is(".prev");

        // 호출확인(방향확인)
        // console.log("오른쪽버튼인가? ",isNext);

        // 2. 버튼별 분기하여 기능구현
        if (isNext) { // 오른쪽버튼


            slide.animate({
                    left: "-100%"
                }, // CSS설정
                aniT, // 시간
                aniE, // 이징
                function () { // 이동후 실행함수
                    // append(요소) 
                    // -> 자식요소로 맨뒤추가(이동)
                    $(this) // slide
                        .append($("li", this).first())
                        // 첫번째 li요소선택-> 맨뒤로 이동!
                        // $(요소,this) -> 나자신 하위요소
                        // first() 첫번째 요소
                        .css({
                            left: "0"
                        });


                    $("li",this).removeClass('on')
                    $("li",this).first().addClass('on');

                    switch($("#slide").children().attr('class')){
                        case "bg1 on":  $('#content1').css({backgroundColor:"#cdf1eb"})
                        $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                            break
                        case "bg2 on":  $('#content1').css({backgroundColor:"#cff0fa"})
                        $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                            break
                        case "bg3 on":  $('#content1').css({backgroundColor:"#e9dbce"})
                        $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                            break
                        case "bg4 on":  $('#content1').css({backgroundColor:"#f5dbda"})
                        $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                            break
                        case "bg5 on":  $('#content1').css({backgroundColor:"#cae5f8"})
                        $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                            break
                        case "bg6 on":  $('#content1').css({backgroundColor:"#d3f2df"})
                        $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                            break
                        case "bg7 on":  $('#content1').css({backgroundColor:"#d0cef6"})
                        $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                            break
                        case "bg8 on":  $('#content1').css({backgroundColor:"#cff0fa"})
                        $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                            break
    
                    }


                    // 동시에 left값을 0으로 변경!
                }); ///////// animate ///////


        } /////////// if ///////////
        else if(isPrev) { // 왼쪽버튼

            // 맨뒤요소를 맨앞에 이동
            slide
                .prepend(slide.find("li").last())
                // prepend(요소) 자식요소로 앞에 추가(이동)
                // find(요소) 자손요소찾기
                // last() 마직막요소

                // 동시에 left값 -100%
                .css({
                    left: "-100%"
                })
                // 그후 left값 0으로 애니메이션
                .animate({
                        left: "0"
                    },
                    aniT, //시간
                    aniE, // 이징
                    
                ); ////// animate //////

                $("li",$('#slide')).removeClass('on')
                $("li",$('#slide')).first().addClass('on');

                switch($("#slide").children().attr('class')){
                    case "bg1 on":  $('#content1').css({backgroundColor:"#cdf1eb"})
                    $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                        break
                    case "bg2 on":  $('#content1').css({backgroundColor:"#cff0fa"})
                    $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                        break
                    case "bg3 on":  $('#content1').css({backgroundColor:"#e9dbce"})
                    $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                        break
                    case "bg4 on":  $('#content1').css({backgroundColor:"#f5dbda"})
                    $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                        break
                    case "bg5 on":  $('#content1').css({backgroundColor:"#cae5f8"})
                    $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                        break
                    case "bg6 on":  $('#content1').css({backgroundColor:"#d3f2df"})
                    $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                        break
                    case "bg7 on":  $('#content1').css({backgroundColor:"#d0cef6"})
                    $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                        break
                    case "bg8 on":  $('#content1').css({backgroundColor:"#cff0fa"})
                    $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                        break

                }
        } 
        
        else {
            
            if(isPlay==false){
                stopClearAuto();
                pause.addClass('play')
                isPlay=true;
            }
            else{
                pause.removeClass('play')
                isPlay=false;
            }
        }

    }); /////////// click /////////////


    // 배너 자동호출 넘기기 셋팅 //////
    // 인터발함수 : setInterval(함수,시간)
    // 인터발 지우기 함수 : clearInterval(변수)
    // 타임아웃함수 : setTimeout(함수,시간)
    // 타임아웃 지우기 함수 : clearTimeout(변수)
    // 타이밍함수는 변수에 할당해야 지울 수 있다!

    // 인터발용변수
    let autoI;

    // 타임아웃용변수
    let autoT;

    // 인터발 최초호출!
    autoSlide();

    // 인터발 호출함수 ///////
    function autoSlide() {

        autoI = setInterval(() => {

            // 슬라이드 넘기기
            slide.animate({
                    left: "-100%"
                }, aniT, aniE,
                function () {
                    $(this)
                        .append($("li", this).first())
                        .css({
                            left: "0"
                        });

                        $("li",$('#slide')).removeClass('on')
                        $("li",$('#slide')).first().addClass('on');
        
                        switch($("#slide").children().attr('class')){
                            case "bg1 on":  $('#content1').css({backgroundColor:"#cdf1eb"})
                            $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                                break
                            case "bg2 on":  $('#content1').css({backgroundColor:"#cff0fa"})
                            $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                                break
                            case "bg3 on":  $('#content1').css({backgroundColor:"#e9dbce"})
                            $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                                break
                            case "bg4 on":  $('#content1').css({backgroundColor:"#f5dbda"})
                            $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                                break
                            case "bg5 on":  $('#content1').css({backgroundColor:"#cae5f8"})
                            $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                                break
                            case "bg6 on":  $('#content1').css({backgroundColor:"#d3f2df"})
                            $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                                break
                            case "bg7 on":  $('#content1').css({backgroundColor:"#d0cef6"})
                            $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                                break
                            case "bg8 on":  $('#content1').css({backgroundColor:"#cff0fa"})
                            $('.control span').text($('#slide li').attr('class').charAt(2)+'/8')
                                break
        
                        }



                }); ///// animate /////


        }, 3000); ///// 인터발함수 ///


    } ////////// autoSlide함수 ///////


    //// 인터발 지우기 함수 ///////
    function clearAuto(){
        // 인터발지우기
        clearInterval(autoI);
        // 타임아웃지우기(실행쓰나미방지!)
        clearTimeout(autoT);

        // 일정시간후 다시 인터발호출!
        autoT = setTimeout(autoSlide,4000);

    } ///////// clearAuto함수 ///////////

    // 근본적 해결소스 아님!
    // setInterval(() => {
    //     $(".ab2").trigger("click");
    // }, 3000);
    // 제이쿼리 trigger(이벤트명) 메서드
    // ->  선택요소에 강제 이벤트발생 메서드

    function stopClearAuto(){
        // 인터발지우기
        clearInterval(autoI);
        // 타임아웃지우기(실행쓰나미방지!)
        clearTimeout(autoT);
    }

////////////////// 스크롤 슬라이드 ///////////////////

    /////////// 자동스크롤 구현 ////////////////////
    $(document).on('mousewheel wheel',e=>{

        // e.preventDefault(); // 에러발생

        // 광스크롤 막기 /////
        if(prot_sc) return;
        prot_sc = 1;
        setTimeout(()=>
        prot_sc = 0, dur_sc);
        ////////////////////////////

        console.log('휠중~');

        // e로 전달되는 이벤트 변수 처리하기
        e = window.event || e;
        // window.event (오리지널 이벤트)가 유효할 경우 할당

        // 2. 방향에 따른 페이지번호 증감
        // 방향은 델타값사용
        let delta = e.wheelDelta || e.detail;
        // e.wheelDelta 일반 브라우저용 방향정보
        // e.detail은 파이어폭스용 방향정보
        // 변수 = 속성값1 || 속성값2;
        // 둘 중 유효한 값이 변수에 할당됨

        console.log('방향:',delta);

        // 음수명 아랫방향 : 다음페이지
        if(delta < 0){
            $('header').css({backgroundColor:'#d0cef6'})
            $('.btnTop').css({display:'block'})
            pno++;
            // 한계수에서 끝번호 고정
            if(pno===totnum) pno = totnum - 1;
        }
        
        // 양수면 윗방향 : 이전페이지
        else{
            pno--;
            // 한계수에서 끝번호 고정
            if(pno===-1) pno = 0;
        }
        

        // 스크롤 애니메이션 : 페이지번호만큼 이동함
        $('html, body').animate({
            scrollTop:$(window).height() * pno +"px"
        },dur_sc, easing_sc)

    }); ///////////// mousewheel //////////////////
    ///////////////////////////////////////////////



}); 