// 보그 PJ 공통 기능 JS - common.js

///////////// 제이쿼리 블록 ///////////////////
$(() => {

    // 호출확인
    console.log("로딩완료!");

    /// 부드러운 스크롤 호출!(제이쿼리 아님!)
    startSS();


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
    console.log(scpos);
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
        console.log(scpos);

    }); /////////// resize함수 ///////////////////


    $(window).on("mousewheel wheel",()=>{
        console.log("ㅎㅎㅎ");
        // 부드러운 스크롤 위치변수pos 업데이트
        // pos = scTop;

    })


    ////////////////////////////////////
    // 윈도우에 스크롤 이벤트 설정하기 ///
    ////////////////////////////////////
    $(window).scroll(function () {

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


}); /////////////// jQB ///////////////////////