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

    // (4) 메시지박스
    let msg = $(".msg");

    // 1. 건물에 각방 번호 넣기
    bd.each((idx, ele) => { // idx-순번, ele-요소
        // text() 텍스트 넣기
        $(ele).text(idx);
        // 9번방에 좀비넣기
        if (idx === 9)
            $(ele).append('<img src="images/mz1.png" alt="좀비1" class="mz">');
        else if (idx === 7)
            $(ele).append('<img src="images/mz2.png" alt="좀비2" class="mz">');
        else if (idx === 1)
            $(ele).append('<img src="images/zom.png" alt="좀비들" class="mz">');
        else if (idx === 2)
            $(ele).append('<img src="images/inj.png" alt="주사기" class="inj">');
    }); ///////// each ///////////////

    // 좀비는 모두 숨기기: hide()
    $(".mz").hide();


    // 2. 버튼 셋팅하기
    // 모든 버튼은 숨기고 첫번째 버튼만 보여
    // 버튼.숨겨().첫번째().보여()
    btns.hide().first().show();

    // 3. 공통 구현 함수 만들기
    // 각 스텝에서 미니언즈가 할 공통 기능 함수구현!
    const actMini = (ele, seq, fn) => {
        // ele - 버튼자신
        // seq - 이동할 li 순번
        // fn - 이동후 실행함수

        // 0. 버튼자신 없애기!
        // 없애기 방법: hide(),slideUp(),fadeOut()
        $(ele).slideUp(300);
        // + 메시지 없애기
        msg.hide();

        // 1. 위치값 알아오기(대상:빌딩li)
        // 8번째 li
        // eq(순번) -> 순번요소 선택 메서드!
        let tval = bd.eq(seq).offset().top;
        let lval = bd.eq(seq).offset().left;
        // offset() 메서드 - 요소셋팅값(위치,크기)
        // top,left,width,height 속성값 사용!


        // 2. 위치이동(이동대상:미니언즈)
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        }, 1000, "easeInOutElastic", fn);
        /////////// animate /////////////

    }; ////////// actMini 함수 ///////////////////
    //////////////////////////////////////////////


    // 4. "들어가기"버튼 클릭시
    btns.first().click(function () {

        // 이동후 함수
        let fn = () => {

            // 메시지 변경하기+보이기
            msg
                .text('와~! 아늑하다! 옆방으로 가보자!')
                .show();

            // 다음버튼 보이기
            btns.eq(1).fadeIn(300);

        }; ///////// fn //////////

        // 공통 기능구현 함수 호출!
        actMini(this, 8, fn);

    }); ///////// click ///////////

   


}); ////////////// jQB /////////////////////////