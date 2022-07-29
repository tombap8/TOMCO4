// 보그 PJ 공통 기능 JS - common.js

///////////// 제이쿼리 블록 ///////////////////
$(()=>{

    // 호출확인
    console.log("로딩완료!");

    /******************************** 
        페이지 스크롤시 변경 구현하기
        - 이벤트: scroll
        - 제이쿼리 메서드 : scroll()
        - 대상: window
    ********************************/
   let scTop; // 스크롤위치변수
   // 변경대상: 상단영역(#top)
   let topA = $("#top");

   // 각 등장액션 위치 배열변수
   const scpos = [];
   // 스크롤 등장요소(.scAct)만 위치값을 배열에 저장
   $(".scAct").each((idx,ele)=>{ // idx-순번, ele-요소
        // console.log(idx,ele);

        // 위치값 변수에 넣기!
        scpos[idx] = $(ele).offset().top;
        // offset().top -> 맨위에서부터 top 위치값 

   }); /////// each //////////////

   // 위치배열값 확인!
   scpos.forEach((val)=>console.log(val));

   // 윈도우에 스크롤 이벤트 설정하기 ///
   $(window).scroll(function(){

        scTop = $(this).scrollTop();
        // scrollTop() -> 세로스크롤바 위치값
        // 참고) 가로스크롤바 위치값은 scrollLeft()

        // 스크롤확인+위치값
        console.log(scTop);

        // 1. 상단영역 슬림변경 클래스 on주기!
        // 스크롤위치 기준은 100px이상일때
        // 스크롤을 한번 작게 작동할때 100px이동함!
        if(scTop >= 100){

            // 상단영역에 클래스 on주기
            topA.addClass("on");

        } /////// if //////////////
        else{ // 100미만일때        

            // 상단영역에 클래스 on삭제
            topA.removeClass("on");

        } //////// else ///////////



   }); ////////// scroll /////////////////

}); /////////////// jQB ///////////////////////