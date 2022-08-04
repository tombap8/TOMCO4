// 보그 PJ 공통 기능 JS - common.js

// 현재 페이지명을 알아내어 제어에 활용한다!
// 페이지명 변수
let pname = location.pathname;
// location.pathname 페이지명이 포함된 전체경로
// split(자를문자열) -> 배열에 담는다!
pname = pname.split('/');
pname = pname[pname.length - 1]; //마지막배열
pname = pname.split('.')[0]; //첫배열
console.log('페이지이름:', pname);

///////////// 제이쿼리 블록 ///////////////////
$(() => {

    // 호출확인
    console.log("로딩완료!");

    /// 부드러운 스크롤 호출!(제이쿼리 아님!)
    startSS();

    /************************************** 
        모바일 버튼 클릭시 검색 / GNB 보이기
    **************************************/
    // 1. 햄버거버튼
    $('.hbtn').click(() => {
        // GNB 박스 슬라이딩 보임/숨김
        // slideToggle() -> slideUp/slideDown
        // 대상: 모바일 GNB
        $('#mobx').slideToggle(400, resetH);
        // 애니후 높이값 재설정 호출!
    }); ////////// click /////////

    // 2. 검색버튼
    $('.sbtn').click(() => {
        // GNB 박스 슬라이딩 보임/숨김
        // slideToggle() -> slideUp/slideDown
        // 대상: 모바일 GNB
        $('.mos').slideToggle(200, resetH);
        // 애니후 높이값 재설정 호출!
    }); ////////// click /////////

    /* 모바일 GNB 높이값 재설정 함수 */
    const resetH = () => {
        // #mobx의 높이값을 동적으로 생성함
        console.log(
            '.top의 높이값:',
            $('.top').innerHeight(),
            '\n.mos의 높이값:',
            $('.mos').css('display')
        );

        // 검색박스 높이는 block일때 넣어줌!
        let temp = $('.mos').css('display') === 'none' ?
            0 : $('.mos').innerHeight();

        // 변경할 높이
        let Hval =
            $('.top').innerHeight() + temp;
        // innerHeight()는 패딩포함높이
        // height()는 순수높이(컨텐츠만)
        // 017문서참조

        console.log('.top높이:',
            $('.top').innerHeight());

        console.log('.mos높이:',
            $('.mos').css('display') === 'none' ?
            0 : $('.mos').innerHeight());

        console.log('보정높이:', Hval);

        // 동적으로 변경하기
        $("#mobx").css({
            height: `calc(100vh - ${Hval}px)`
        })
    }; /////// resetH 함수 ///////////




    /******************************** 
        페이지 스크롤시 변경 구현하기
        - 이벤트: scroll
        - 제이쿼리 메서드 : scroll()
        - 대상: window
    ********************************/
    let scTop; // 스크롤위치변수
    // 변경대상: 상단영역(#top)
    let topA = $("#top");
    // 변경대상: 위로가기버튼(.tbtn)
    let tbtn = $(".tbtn");

    // 각 등장액션 위치 배열변수
    const scpos = [];
    // 각 등장액션 요소변수
    const scAct = $(".scAct");
    // 각 등장위치 보정값(화면크기 기준)
    const gap = $(window).height();
    // height()는 선택요소의 높이값
    // 참고) width() 는 가로값

    // 스크롤 등장요소(.scAct)만 위치값을 배열에 저장
    scAct.each((idx, ele) => { // idx-순번, ele-요소
        // console.log(idx,ele);

        // 위치값 변수에 넣기!
        scpos[idx] = $(ele).offset().top;
        // offset().top -> 맨위에서부터 top 위치값 

    }); /////// each //////////////

    // 위치배열값 확인!
    // console.log(scpos);
    //    scpos.forEach((val)=>console.log(val));

    /************************************* 
         함수명: scAction
         기능: 스크롤 등장액션 주기
    *************************************/
    function scAction(n) { // n - 순번값

        // 해당영역일 경우 해당요소에 클래스 on넣기
        if (
            // 등장요소 위치전 보다 크고
            scTop > scpos[n] - gap &&
            // 등장요소 위치 보다 작음
            scTop < scpos[n]
        ) {
            // 변경대상: .scAct -> scAct변수
            scAct.eq(n).addClass("on");
        } /////////// if ////////////////////

    } /////////// scAction 함수 //////////////
    //////////////////////////////////////////

    // 보통 브라우저 화면은 처음에 정해진 크기로 보는게
    // 일반 유저들의 사용 습관이다. 그러나...
    // 개발자가 실시간으로 화면크기를 조정하거나
    // 일반 유저가 화면 크기 전환을 할 경우
    // 처음에 읽었던 위치값이 바뀌게 될때
    // 등장액션 위치에 문제가 생긴다!
    // 그래서... 화면크기가 변할때 업데이트가 필요함!!
    // 제이쿼리 메서드 : resize()

    /// 등장요소 위치 업데이트하기 ////////////////
    $(window).resize(() => {

        // 스크롤 등장요소(.scAct)만 위치값을 배열에 저장
        scAct.each((idx, ele) =>
            scpos[idx] = $(ele).offset().top);

        // 위치배열값 확인!
        // console.log(scpos);

    }); /////////// resize함수 ///////////////////


    ////////////////////////////////////
    // 윈도우에 스크롤 이벤트 설정하기 ///
    ////////////////////////////////////
    $(window).scroll(function (e) {

        // 로그인, 회원가입, 갤러리 페이지는 안함!
        if (pname === "login" ||
            pname === "member" ||
            pname === "gallery") return;

        scTop = $(this).scrollTop();
        // scrollTop() -> 세로스크롤바 위치값
        // 참고) 가로스크롤바 위치값은 scrollLeft()

        // 스크롤확인+위치값
        // console.log(scTop);

        // 1. 상단영역 슬림변경 클래스 on주기!
        // 스크롤위치 기준은 100px이상일때
        // 스크롤을 한번 작게 작동할때 100px이동함!
        if (scTop >= 100) {

            // 상단영역에 클래스 on주기
            topA.addClass("on");

        } /////// if //////////////
        else { // 100미만일때        

            // 상단영역에 클래스 on삭제
            topA.removeClass("on");

        } //////// else ///////////

        // 2. 스크롤 등장액션 주기
        // 등장요소만큼 scAction함수 호출하기!

        // 요소로 호출하기
        scAct.each((idx) => scAction(idx));

        // each()메서드는 제이쿼리 전용임!!!
        // each((idx,ele){})-> 첫번째 순번만 이용하므로
        // each((idx){}) 전달변수를 하나만 사용했음!

        // 또는 배열로 호출하기
        // scpos.forEach((val,idx)=>scAction(idx));

        // forEach()는 배열/요소용 for문
        // forEach((val,idx)=>{}) 두번째 전달값 순번을
        // 사용하므로 전달변수를 2개 모두 써야함!


        // 3. 위로가기 버튼 보이기/숨기기
        if (scTop >= 300) { // 300이상일때
            // 변경대상: .tbtn -> tbtn변수
            tbtn.addClass("on");
        } ////////// if /////////
        else { // 300미만일때
            tbtn.removeClass("on");
        } ////////// else ////////

    }); ////////// scroll /////////////////
    ///////////////////////////////////////

    // 위로가기버튼 클릭시 
    // 맨위로 스크롤 애니메이션하기!
    // 대상: .tbtn -> tbtn변수
    tbtn.click(() => {
        // 변경대상: html,body
        // -> 전체 스크롤 위치이동대상
        // 사용메서드: animate()
        // 스크롤위치이동 속성은 scrollTop
        $("html,body")
            .animate({
                scrollTop: "0"
            }, 800, "easeOutQuart");

        // 부드러운 스크롤 위치변수에
        // 변경된 위치값 업데이트 필수!
        pos = 0; // 숫자값으로 넣음!

    }); ///// click ///////////////


    // 로딩테스트용 동영상 넣기
    // $("body").prepend('<iframe width="1090" height="613" src="https://www.youtube.com/embed/GduEtmvwcI0" title="[한산: 용의 출현] 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

}); /////////////// jQB ///////////////////////


// 윈도우 객체 컨텐츠가 모두 로딩된 후 로딩박스 없애기
$(window).on("load", function () {
    $(".LDbx").hide();
}); /////////// load ///////////////


/************************************************ 
    제이쿼리 스크롤 멈춤 체크 플러그인 메서드
************************************************/
$.fn.scStop = function (callback) {

    ///// 스크롤 이벤트 설정하기 //////////
    $(this).scroll(function () {

        // 1. 먼저 타임아웃지우기(아래서 설정된 타임아웃)
        clearTimeout($(this).data('scTime'));
        // 2. 타임아웃설정을 한다!
        $(this).data('scTime', setTimeout(callback, 80));
        // 제이쿼리 data() 메서드
        // -> data(키,값)  특정이름에 값을 셋팅하여 저장!
        // 타임아웃에 시간은 부드러운 스크롤에 셋팅된 시간인
        // speed, smooth 시간을 더한 값으로 넣어준다!
        // 예) new SmoothScroll(document, 60, 20) -> 60+20=80
        // 80dms 1/1000초 (0.08초)

    }); //// 스크롤시 계속 발생구역 ///////



}; //////////// 스크롤멈춤 플러그인 ////////////

/// 윈도우객체를 제이쿼리로 플러그인 호출!
// 이때 실행될 함수를 전달함!
$(window).scStop(function () {
    // 마지막 스크롤 위치값 
    let scTop = $(this).scrollTop();
    // 콘솔에 확인!
    // console.log("스크롤멈춤!",scTop);
    // 부드러운 스크롤 위치값에 업데이트!
    pos = scTop;
}); ///////// window /////////////////



$(() => {

    // 제이쿼리 data(키,값) 연습
    let mykey = $("#top");
    mykey.data('헐', '고양이');
    mykey.data('힘', '강아지');

    // console.log(
    //     'data()키값:',
    //     mykey.data('헐'),'/',
    //     mykey.data('힘'));

    // data() 삭제는 removeData(키)
    mykey.removeData('헐');


    // console.log(
    //     'data()키값:',
    //     mykey.data('헐'),'/',
    //     mykey.data('힘'));


}); ///////// jQB ///////////////


///////////////// 비교 JS Map() 메서드 /////////////
// -> 키,값으로 저장하는 메모리공간 생성 메서드 //////
// 1. 메모리 공간 생성: Map() -> new 키워드로!
// Map() 객체 아래 메서드: set(), get(), has(), delete()
const keyval = new Map();

// 2. 값셋팅: set(키,값)
keyval.set('한국배우', '조승우');
keyval.set('미국배우', '탐크루즈');
keyval.set('중국배우', '성룡');

// 3. 값호출 : get(키)
// console.log('Map()값:',
// keyval.get('한국배우'),'/',
// keyval.get('미국배우'),'/',
// keyval.get('중국배우')
// );

// 4. 키존재여부: has(키)
// console.log('성룡있나? 지금? ',keyval.has('중국배우'));

// 5. 값삭제 : delete(키)
keyval.delete('중국배우');

// console.log('성룡있나? 지금? ',keyval.has('중국배우'));


// console.log('Map()값:',
// keyval.get('한국배우'),'/',
// keyval.get('미국배우'),'/',
// keyval.get('중국배우')
// );