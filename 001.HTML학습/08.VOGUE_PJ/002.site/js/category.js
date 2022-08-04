// 보그 JS 카테고리 페이지 JS - category.js

// 객체로 만들어진 데이터 파일을 별도로 만든것을
// 제이슨(JSON)이라고 한다!
// 제이쿼리에서 제이슨 파일을 불러와서 변수에
// 할당하여 사용할 수 있다!!!
// 제이슨 위치: js/cat.json

// 제이쿼리 제이슨 가져오기 메서드
// $.getJSON(파일경로,함수)
// $.getJSON(파일경로,(변수)=>{코드})
// -> 함수의 변수는 제이슨 파일의 데이터를 전달함!
// 제이슨 파일경로로 불러오고 함수에서 내가 쓸 변수에 
// 할당한다!!!

// 참고) 자바스크립트는 제이슨을 쓰려면  js파일처럼  json도
// html페이지에서 <script src="제이슨파일"> 이렇게 호출함!
// 코드에서 JSON.parse(변수) 제이슨 변환 메서드를 사용해 코딩함!


// 제이슨 데이터 할당변수
let sinfo;
// 제이슨 데이터 연결하여 할당하기!
$.getJSON('js/cat.json',
    jdata => {
        // 제이슨 파일에서 가져온 데이터를 변수에 할당!
        sinfo = jdata;
        // 데이터확인
        //    console.log(sinfo);
    });
// jdata는 함수전달변수임(이름 맘대로!)


// URL로 넘어온 파라미터 전달값 받기 //////
let pm = location.href;
// console.log('파라미터:',pm);

// 만약 물음표(?)가 없으면 메뉴를 클릭한 것이 아니므로
// 첫페이지로 돌아가게 한다!!!
if(pm.indexOf('?')===-1) location.href = 'index.html';

// 현재 파라미터값만 필요하므로
// 물음표(?)로 잘라서 뒤엣것 -> [1]
// 이퀄(=)로 잘라서 뒤엣것 -> [1]
pm = pm.split('?')[1].split('=')[1];
// 특수문자복원하기
pm = decodeURIComponent(pm);

console.log('파라미터:', pm);


////// 제이쿼리 코드블럭 ///////////////////////
$(() => {

    // 1. 해당 카테고리의 데이터 셋업
    const data = sinfo[pm];
    console.log('선택데이터:',data);

    // 2. 데이터 페이지 바인딩하기 ////
    // (1) 타이틀 넣기
    $(".stit").text(data['제목']);

    // (2) .cont에 카테고리명으로 클래스 넣기
    // -> 미리셋팅된 배경이미지가 컨텐츠박스에 나옴!
    $(".cont").addClass(data['경로']);

    // (3) LNB메뉴 셋팅하기
    // "메뉴" 데이터 값으로 "없음"이 아닐 경우
    // 메뉴수만큼 ul>li>a 의 구조로 메뉴를 구성함!
    let menu = data['메뉴'];
    console.log('메뉴:',menu);

    // 대상: .lnb
    let lnb = $(".lnb");

    // 임시코드변수
    let hcode = "";
    
    // 분기: 조건 - 데이터가 "없음"인가?
    if(menu==="없음") lnb.remove(); // lnb삭제
    else { // 메뉴만들기
        hcode += "<ul>";

        // 메뉴배열만큼 코드만들기
        // 배열 forEach() 문에서 함수전달값이
        // 하나이면 그것이 바로 배열값!
        menu.forEach(val=>{
            hcode += `
                <li>
                    <a href="#">${val}</a>
                </li>
            `;
        }); ////// forEach ////////

        hcode += '</ul>';

        // 코드넣기
        lnb.html(hcode);

    } ////// else ////////////

    // (4) 각 컨텐츠 박스 타이틀 넣기
    // 대상: .cbx h2
    // 데이터: "타이틀"의 배열값
    // each((순번,요소자신)=>{코드})
    $('.cbx h2').each((idx,ele)=>{
        $(ele).html(data['타이틀'][idx]);
    }); ////////// each ////////////
    // data['타이틀'][배열순번]
    // 배열순번 === h2요소순번 === idx

    // (5) 타이틀 변경하기
    // 대상: title 태그
    // 데이터: "제목" 값
    $("title").prepend(data['제목']);
    // prepend() : 앞에 데이터추가(기존데이터 살아있음!)
    // 참고) append() : 뒤에 데이터추가!

}); ////////////// jQB ////////////////////////
///////////////////////////////////////////////



$(()=>{/////////// jQB /////////////////////////////
    
    /******************************************* 
        카테고리 페이지 타이틀 한글자씩 등장애니
    *******************************************/
    // 대상: .stit
    // 방법: 서브타이틀을 가져와서 각각 span태그로 싸준다!
    const stit = $('.stit');

    // 1. 서브타이틀 글자읽어오기
    let stxt = stit.text();

    // 2. span태그 한글자씩 싸기
    let newtxt = "";
    // for of로 한글자씩 돌아줌!
    for(let x of stxt){
        newtxt += `<span>${x}</span>`;
    } ///// for of ////////////

    console.log('이거야!',newtxt);

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
    each((idx,ele)=>{
        $(ele).delay(50*idx)
        .animate({
            top: "0",
            opacity: 1
        },200,"easeInOutQuart");
    }); //////// each ////////

    // 6. LNB메뉴가 있으면 조금있다가 나와라!
    $(".lnb").fadeTo(1,0).delay(1000).fadeTo(500,1);
    // fadeTo(시간,오파,이징,함수)
    // -> fadeIn/fadeOut과 달리 display를 none하지 않음!


});/////////// jQB /////////////////////////////