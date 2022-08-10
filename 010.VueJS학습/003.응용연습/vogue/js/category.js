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
            catName: pm.replace(' & ','-'),
            // 파라미터로 넘어온 값을 Vue 데이터변수에 담기!
            catName2: pm //조건을 위한변수
        }, ////////// data //////////
        mounted: function () {
            axios.get('js/cat.json')
                .then(x => this.vals = x);
        } ///////// mounted //////////

    }); ////////// Vue /////////////////


}); ///////////// jQB ////////////////////