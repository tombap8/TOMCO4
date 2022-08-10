// 보그 JS 카테고리 페이지 JS - category.js


// URL로 넘어온 파라미터 전달값 받기 //////
let pm = location.href;
// console.log('파라미터:',pm);

// 만약 물음표(?)가 없으면 메뉴를 클릭한 것이 아니므로
// 첫페이지로 돌아가게 한다!!!
if (pm.indexOf('?') === -1) location.href = 'index.html';

// 현재 파라미터값만 필요하므로
// 물음표(?)로 잘라서 뒤엣것 -> [1]
// 이퀄(=)로 잘라서 뒤엣것 -> [1]
pm = pm.split('?')[1].split('=')[1];
// 특수문자복원하기
pm = decodeURIComponent(pm);

console.log('파라미터:', pm);

//////// 제이쿼리 코드블록 //////////////
$(() => {

    console.log('로딩완료');

    ///// 데이터바인딩 Vue 인스턴스 생성하기 ///
    let db = new Vue({
        el: "#cont",
        // 바인딩할 대상(변경요소를 포함하는 부모요소)
        // ->아이디만적용됨!
        data: {
            vals: {},
            // json 데이터가 객체임!
            catName: pm.replace(' & ', '-'),
            // 파라미터로 넘어온 값을 Vue 데이터변수에 담기!
            catName2: pm //조건을 위한변수
        }, ////////// data //////////
        mounted: function () {
            axios.get('js/cat.json')
                .then(x => this.vals = x);
        }, ///////// mounted //////////
        methods: {
            // 탭 타이틀 변경 메서드
            chgTit: function (tit) { // tit는 제목전달
                $('title').prepend(tit);
            }, ///////// chgTit 메서드 /////

            // 한글자씩 등장애니 메서드 //////
            callAni: function () {
                $(()=>{ // jQB -> html그린후 실행!
                 
                // 대상: .stit
                // 방법: 서브타이틀을 가져와서 각각 span태그로 싸준다!
                const stit = $('.stit');

                // 1. 서브타이틀 글자읽어오기
                let stxt = stit.text();

                // 2. span태그 한글자씩 싸기
                let newtxt = "";
                // for of로 한글자씩 돌아줌!
                for (let x of stxt) {
                    newtxt += `<span>${x}</span>`;
                } ///// for of ////////////

                console.log('이거야!', stit);

                // 3. 원래 박스에 다시넣기
                stit.html(newtxt);

                // 4. span태그 css설정하기
                stit.find('span').css({
                    position: "relative",
                    top: "-40px",
                    opacity: 0
                }); /////// css ////////


                // 5. 순차적으로 하나씩 글자 등장하기 애니!
                stit.find('span').
                each((idx, ele) => {
                    $(ele).delay(50 * idx)
                        .animate({
                            top: "0",
                            opacity: 1
                        }, 200, "easeInOutQuart");
                }); //////// each ////////

                // 6. LNB메뉴가 있으면 조금있다가 나와라!
                $(".lnb").fadeTo(1, 0).delay(1000).fadeTo(500, 1);
                // fadeTo(시간,오파,이징,함수)
                // -> fadeIn/fadeOut과 달리 display를 none하지 않음!
   
            });

            } ////////// callAni 메서드 //////

        } ////////// methods //////////

    }); ////////// Vue /////////////////

    ////////// 뷰JS 체험존 GNB 메뉴 클릭시 셋팅! ////
    $(".VueGnb a").click(function(e) {

        // 기본기능막기
        e.preventDefault();

        // 1. 클릭시 a요소 텍스트 읽어오기
        let txt = $(this).text().toLowerCase();
        // toLowerCase()는 소문자변환
        console.log(txt);

        // 2. 파라미터 변수값 업데이트
        pm = txt;
        console.log('체험존pm업뎃:',pm);

        // 3. 뷰 인스턴스의 data를 변경하여
        // 자동으로 페이지 갱신하기!
        db.$data.catName = pm.replace(' & ', '-');
        db.$data.catName2 = pm;
        // db변수에 뷰JS 인스턴스가 담겨있고
        // $data는 내부의 data속성임!
        // methods는 db.$methods라고 쓰지않고
        // 바로 db.메서드이름() 으로 실행가능!

        /* 
            [ 뷰JS 양방향 바인딩의 특징! ]
            뷰JS의 속성값을 업데이트 하면
            실시간으로 뷰페이지(hmtl 실제DOM)를
            관리하는 가상돔(Virtual DOM)에 변화가 생길경우
            바로 실제DOM에 뷰JS 인스턴스가 이를 반영하여
            페이지를 변경한다! 물론 새로고침없이!!!
        */




    }); //////////// click /////////////////








}); ///////////// jQB ////////////////////