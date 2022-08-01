// 제이쿼리 기본 JS - main.js 

// 제이쿼리 코드블록 /////
$(() => {

    // 0. 주인공들 변수할당하기!
    // (1) 미니언즈
    let mi = $(".mi");

    // (2) 건물 li
    let bd = $(".building li");

    // (3) 버튼들
    let btns = $(".btns button");

    // 1. 건물에 각방 번호 넣기
    bd.each((idx, ele) => { // idx-순번, ele-요소
        // text() 텍스트 넣기
        $(ele).text(idx);
    }); ///////// each ///////////////

    // 2. 버튼 셋팅하기
    // 모든 버튼은 숨기고 첫번째 버튼만 보여
    // 버튼.숨겨().첫번째().보여()
    btns.hide().first().show();

    // 3. "들어가기"버튼 클릭시
    btns.first().click(function () {
        // 1. 위치값 알아오기(대상:빌딩li)
        // 8번째 li
        // eq(순번) -> 순번요소 선택 메서드!
        let tval = bd.eq(8).offset().top;
        let lval = bd.eq(8).offset().left;
        // offset() 메서드 - 요소셋팅값(위치,크기)
        // top,left,width,height 속성값 사용!


        // 2. 위치이동(이동대상:미니언즈)
        mi.animate({
            top: tval+"px",
            left: lval+"px"
        }, 1000, "easeInOutElastic")

    }); ///////// click ///////////



}); ////////////// jQB /////////////////////////