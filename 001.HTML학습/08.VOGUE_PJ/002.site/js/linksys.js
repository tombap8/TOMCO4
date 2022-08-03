// 보그 PJ 링크 시스템 JS - linksys.js ///////

$(()=>{ ////////// jQB ///////////////////////

    // 로고 클릭시 첫페이지 이동하기 /////
    $(".logo a").click(()=>location.href='index.html');

    // GNB 링크 셋팅 /////////////////////
    // 대상: .gnb a
    $('.gnb a,.mognb a').click(function(e){

        // a기본이동 막기
        e.preventDefault();

        // 1. 클릭된 a요소의 글자읽기
        let txt = $(this).text().toLowerCase().trim();
        // toLowerCase() 소문자변환
        // 참고) toUpperCase() 대문자변환
        // trim() 앞뒤공백제거
        console.log(txt);

        // 2. 서브페이지 이동하기
        if(txt!=="search") // 검색이 아니면!
            location.href = 'category.html?cat='+
            encodeURIComponent(txt);

        // 카테고리를 구분하기 위한 파라미터 키=값 쌍을 보냄
        // cat=카테고리명
        // 이것을 받아서 페이지 셋업을 한다!
        // 이렇게 데이터를 url로 전달하는 방식을 GET방식이라고 함!
        // 특수문자가 있으므로 (time & gem) 이것을 보낼때
        // encodeURIComponent() 로 변환하여 보내고
        // 받는 곳에서는 decodeURIComponent()로 복원함!




    }); //////////// click ///////////////





}); ////////////// jQB ///////////////////////