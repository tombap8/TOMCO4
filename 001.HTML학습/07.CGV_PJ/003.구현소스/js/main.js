///// CGV 메인 페이지 JS - main.js //////

// 로딩구역 ///////////////////////////////////
// 이벤트: load, DOMContentLoaded
window.addEventListener("DOMContentLoaded",()=>{

    // 호출확인
    console.log("로딩완료!");


    //////////////////////////////////////////////////
    // 포스터 메뉴 클릭시 예고편 변경 및 클래스on주기 //
    /////////////////////////////////////////////////

    // 영화정보 셋팅하기
    const minfo = [
        // 닥터스트레인지2
        "mI9oyFMUlfg",
        // 쥬라기월드:도미니언
        "aOu1ubTZdH8",
        // 브로커
        "DpVAb7Bi5UQ",
        // 범죄도시2
        "aw9j_23nORs",
        // 몬스터싱어
        "OTiqmI6Ooqs",
        // 스파이더맨:노웨이홈
        "yFZh-Wqi7RI"
    ]; ///// minfo 배열 ////




    // 대상선정(포스터메뉴 a링크): .mlist a
    const mlist = document.querySelectorAll(".mlist a");
    // console.log(mlist);

    // 대상선정(포스터메뉴 최상위 li만):
    const mli = document.querySelectorAll(".mlist>ul>li") 

    // 대상 컬렉션의 개수만큼 돌면서 
    // 예고편변경함수(멍멍함수)호출
    mlist.forEach((ele,idx)=>{ // ele-요소,idx-순번
        // console.log(minfo[idx]);

        // 각 요소에 click이벤트 설정!
        ele.onclick = ()=>{
            // console.log(minfo[idx]);

            // 1.멍멍함수 호출! -> 예고편 변경
            멍멍(minfo[idx]);

            // 2.모든 li요소의 클래스 지우기(일괄제거)
            mli.forEach((eli)=>eli.classList.remove("on"));
            // eli는 각 최상위 li임!

            // 3.클릭된 요소의 부모(li)에 클래스 on넣기
            ele.parentElement.classList.add("on");
            // ele.parentElement -> a자신의 부모요소로 이동!
            // console.log(ele.parentElement);

        }; //////// click /////////

    }); ////// forEach ///////////////////



    ////////////////////////////////////
    // 극장가는길 클릭시 구글맵 보이기 ///
    ////////////////////////////////////

    // 이벤트 대상: .goMV
    let goMV = document.querySelector(".goMV");
    // 이벤트 대상: .cbtn
    let cbtn = document.querySelector(".cbtn");
    // 변경대상: .gmap
    let gmap = document.querySelector(".gmap");


    // 변경방법: goMV 클릭시 gmap에 클래스"on"넣기
    // 사용 메서드: classList.toggle()
    goMV.onclick = ()=>{
        // 구글맵박스에 on넣기
        gmap.classList.add("on");
        // goMV에 on넣기
        goMV.classList.add("on");
    }; /////////// click ////////////

    // 닫기버튼 cbtn 클릭시 gmap에 클래스 "on" 빼기
    cbtn.onclick = () =>{ 
        // 구글맵박스에 on빼기
        gmap.classList.remove("on");
        // goMV에 on빼기
        goMV.classList.remove("on");
    }; ////////// click //////////////


}); /////////////// 로딩구역 ////////////////////
////////////////////////////////////////////////


/******************************************* 
     함수명: 멍멍
    기능: 포스터메뉴 클릭시 유튜브 iframe
        src속성값 변경하여 영화바꾸기! 
*******************************************/
function 멍멍(먹이) {
    // 먹이 - 전달값을 담는 변수
    // -> 먹이 변수에 영화 고유코드를 담는다!

    // 1. 호출 및 전달값확인!
    console.log("먹이줘!", 먹이);

    // 2. 변경대상 : 아이프레임 -> #screen iframe
    var 아이 = document.querySelector('#screen iframe');

    // 3. 변경내용 : 아이프레임의 src속성값 변경하기!
    아이.src =
        "https://www.youtube.com/embed/" + 먹이 +
        "?autoplay=1";

    // 이퀄(=)을 만나는 순간
    // 이퀄 오른쪽의 값을 만든후
    // 왼쪽의 변수나 속성에 값을 넣는다!

    // 전달변수 먹이 에 담긴 값을 다른 문자값과
    // 합쳐서 하나의 문자로 만들어 준다!
    // +는 문자를 합치는 연산자!


} /////////////// 멍멍 함수 //////////////////
/////////////////////////////////////////////