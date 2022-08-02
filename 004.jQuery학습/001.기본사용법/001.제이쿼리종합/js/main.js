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
    // btns.hide().last().show();

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
        let tg = bd.eq(seq); // 타겟li
        let tval = tg.offset().top;
        let lval =
            tg.offset().left + tg.width() / 2 - mi.width() / 2;
        // left위치 보정으로 미니언즈 li의 중앙위치
        // 계산: left위치 + li가로절반 - 미니언즈가로절반

        // offset() 메서드 - 요소셋팅값(위치,크기)
        // top,left,width,height 속성값 사용!
        // width(),height() 메서드로 바로 가로,세로크기 구함!


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
                $(this).next().fadeIn(300);
                // console.log(this);

                // this 키워드는 누구인가?
                // function(){} 일반 익명함수에서는
                // 가장 가깝게 싸고 있는 대상이 주인공임
                // mi의 콜백함수로 실행하므로
                // this는 mi가 됨
                // 그.러.나...
                // 화살표함수 ()=>{}는 this키워드의 주인공은
                // 최상위 이벤트 주인공인 버튼자신이 된다!

            }; ///////// fn //////////

            // 공통 기능구현 함수 호출!
            actMini(this, 8, fn);

        }) ///////// "들어가기" click ///////////

        // 5. "옆방으로"버튼 클릭시 ////////
        .next().click(function () {

            // 이동후 함수
            let fn = () => {

                // 좀비 나타나기(2초후)
                bd.eq(9).find('.mz')
                    .delay(2000).fadeIn(400,
                        () => { // 좀비나온 후

                            // 메시지
                            msg.html(`
                            악!;;;; 좀비! <br>
                            어서피하자!
                        `)
                            .css({
                                left: "-154%"
                            }) //메시지위치
                            .fadeIn(200); // 보이기


                            // 다음버튼 보이기
                            $(this).next().fadeIn(300);

                        }); /////// fadeIn /////////////

            }; ///////// fn //////////

            // 공통 기능구현 함수 호출!
            actMini(this, 9, fn);

        }) //////////// "옆방으로" click ////////////

        // 5. "윗층으로 도망가!"버튼 클릭시 ////////
        .next().click(function () {

            // 이동후 함수
            let fn = () => {

                // 메시지 보이기
                msg.html(`여긴없겠지?`)
                .fadeIn(200);

                // 좀비보이기
                bd.eq(7).find(".mz")
                .delay(1000).fadeIn(400,()=>{
                    
                    // 메시지 변경하기
                    msg.html(`악! 여기도!!!`);

                    // 다음버튼 보이기
                    $(this).next().fadeIn(300);

                }); ///////// fadeIn //////////




            }; ///////// fn //////////

            // 공통 기능구현 함수 호출!
            actMini(this, 7, fn);

        }) ///////// "윗층으로 도망가!" click /////////

        // 6. "다시옆방으로!"버튼 클릭시 ////////
        .next().click(function () {

            // 이동후 함수
            let fn = () => {

                // 첫번째 메시지
                msg.html('여긴없겠지?')
                .fadeIn(200)
                .delay(1000) // 지연시간은 애니메이션 앞에서 효과!
                .fadeIn(200, 
                    ()=>{
                        // 두번째 메시지
                        msg.html('그래도 무서우니<br>윗층으로 가자!')
                        // 다음버튼 보이기
                        $(this).next().fadeIn(300);
                    }); ///////// fadeIn /////////////

            }; ///////// fn //////////

            // 공통 기능구현 함수 호출!
            actMini(this, 6, fn);

        }) ///////// "다시옆방으로!" click /////////

        // 7. "무서우니 윗층으로!"버튼 클릭시 ////////
        .next().click(function () {

            // 이동후 함수
            let fn = () => {

                // 무.서.워... 메시지
                msg.text('무')
                .fadeIn(200)
                .delay(500)
                .fadeIn(200,()=>msg.text('무.'))
                .delay(500)
                .fadeIn(200,()=>msg.text('무.서'))
                .delay(500)
                .fadeIn(200,()=>msg.text('무.서.'))
                .delay(500)
                .fadeIn(200,()=>msg.text('무.서.워'))
                .delay(500)
                .fadeIn(200,()=>msg.text('무.서.워.'))
                .delay(500)
                .fadeIn(200,()=>msg.text('무.서.워..'))
                .delay(500)
                .fadeIn(200,()=>msg.text('무.서.워...'))
                .delay(500)
                .fadeIn(200,
                    ()=>{
                        // 7번방 좀비가 올라와서
                        // 달겨든다!
                        bd.eq(7).find(".mz")
                        .animate({ // 윗층으로 올라옴
                            bottom:bd.eq(7).height()+"px"
                        },300,"easeOutElastic")
                        .delay(500)
                        .animate({ // 달겨들기!
                            right:(bd.eq(7).width()*1.2)+"px"
                        },1000,"easeInExpo",
                        ()=>{ // 물린후 대사
                            msg
                            .css({left:"-110%"})
                            .html('아~악! 물렸다!<br>어서 치료주사방으로!')

                            // 미니언즈 좀비이미지 변경(1초후)
                            setTimeout(() => {
                                mi.find("img")
                                .attr("src","images/mz1.png");                                
                            }, 1000);

                            // 다음버튼 보이기
                            $(this).next().fadeIn(300);
                        });//////// animate ////////////////

                    }); ///////////// fadeIn //////////////




            }; ///////// fn //////////

            // 공통 기능구현 함수 호출!
            actMini(this, 4, fn);

        }) ///////// "무서우니 윗층으로!" click /////////

        // 8. "치료주사방으로!"버튼 클릭시 ////////
        .next().click(function () {

            // 이동후 함수
            let fn = () => {

                // 주사기 돌기
                $('.inj').css({
                    transform:"rotate(-150deg)",
                    transition:".5s .5s",
                    zIndex: 9999
                }); //// css ///////

                // 미니언즈로 다시태어나다!(1초후)
                setTimeout(() => {
                    // 이미지변경
                    mi.find("img").attr("src","images/m2.png");
                    // 대사
                    msg.html("이제 조금만 더 <br>가면 탈출이닷!")
                    .css({left:"-150%"})
                    .fadeIn(200)
                }, 1000);

                // 다음버튼 보이기
                $(this).next().fadeIn(300);



            }; ///////// fn //////////

            // 공통 기능구현 함수 호출!
            actMini(this, 2, fn);

        }) ///////// "치료주사방으로!" click /////////

        // 9. "3번방으로!"버튼 클릭시 ////////
        .next().click(function () {

            // 이동후 함수
            let fn = () => {

                // 메시지 보이기
                msg.html("어서윗층으로 가자!")
                .fadeIn(200);

                // 다음버튼 보이기
                $(this).next().fadeIn(300);



            }; ///////// fn //////////

            // 공통 기능구현 함수 호출!
            actMini(this, 3, fn);

        }) ///////// "3번방으로!" click /////////

        // 10. "1번방으로!"버튼 클릭시 ////////
        .next().click(function () {

            // 이동후 함수
            let fn = () => {

                
                // 메시지 보이기
                msg.html("이제 곧 탈출이닷!")
                .fadeIn(200);


                // 다음버튼 보이기
                $(this).next().fadeIn(300);



            }; ///////// fn //////////

            // 공통 기능구현 함수 호출!
            actMini(this, 1, fn);

        }) ///////// "1번방으로!" click /////////

        // 11. "헬기를 호출!"버튼 클릭시 ////////
        .next().click(function () {

            // 이동후 함수
            let fn = () => {

                
                // 메시지 보이기
                msg.html("도와줘요!")
                .fadeIn(200);

                // 1번 좀비들이 나타나서 달겨듬!
                bd.eq(1).find(".mz")
                .fadeIn(300)
                .animate({
                    right: bd.eq(1).width()+"px"
                },3000,"easeInExpo");

                // 헬기등장하기
                $(".heli")
                .animate({
                    left:"20%"
                },4000,"easeOutBack",
                function(){ 

                    // 헬기도착 후 탑승이미지 변경
                    $(this)
                    .attr("src","images/heli2.png");

                    // 미니언즈 없애기
                    mi.hide();
                })
                .delay(500) // 0.5초 쉬었다가
                .animate({ // 다시 오른쪽 끝으로 이동
                    left:"70%"
                },4000,"easeInOutCirc",
                function(){ // 끝쪽에서 조정사 좀비로!
                    $(this)
                    .attr("src","images/heli3.png");
                })
                .delay(300)
                .animate({ // 아주 천천히 나감!
                    left: "100%"
                },10000,"linear",()=>{
                    // 최종 마무리 구역 ///

                    // 간판 떨어뜨리기
                    // 1단계 : 중간까지 떨어짐
                    // -> 간판에 class "on"주기
                    let tit = $(".tit");
                    tit.addClass("on");
                    setTimeout( // 3초후 2단계 다떨어짐
                        // -> 간판에 class "on2"추가
                        ()=>tit.addClass("on2")
                    ,3000);

                    // 빌딩 무너뜨리기
                    // 간판 떨어진 후 실행(6초후)
                    setTimeout(()=>
                        bd.parent().addClass("on")
                        // parent() 부모요소인 .building
                    ,6000);


                }); ///////// animate //////////


                // 다음버튼 보이기
                $(this).next().fadeIn(300);


            }; ///////// fn //////////

            // 공통 기능구현 함수 호출!
            actMini(this, 0, fn);

        }) ///////// "헬기를 호출!" click /////////


        // 간판에 마우스 오버시/ 아웃시 색상변경!
        // hover(함수1,함수1)
        // - 함수1은 오버시, 함수2는 아웃시 실행!
        $(".tit").hover(
            function(){ // over
                $(this).css({
                    backgroundColor:"blue",
                    color:"cyan"
                });
            },
            function(){ // out
                $(this).css({
                    backgroundColor:"pink",
                    color:"yellow"
                });
            }); ///////// hover //////////




}); ////////////// jQB /////////////////////////