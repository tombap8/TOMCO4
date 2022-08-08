// 보그 PJ 회원가입 페이지 JS - member.js

/////// 제이쿼리 코드블럭 //////////////////
$(()=>{

    // 로딩완료
    console.log('로딩완료');

    /**************************************** 
        [ 사용자 입력폼 유효성 검사 ]
        - 이벤트 종류: blur (포커스가 빠질때 발생)
        - 제이쿼리 이벤트 메서드 : blur()
        - 이벤트 대상:

        -> id가 'email2'가 아니고 class가 'search'가
        아닌 type이 'text'인 입력요소 input

        >>> 제이쿼리 선택표현법:
        input[type=text][id!=email2][class!=search]
        >>> 대괄호는 속성선택자, != 같지않다(제이쿼리전용)

        -> type이 'password'인 입력요소 input

        >>> 제이쿼리 선택표현법:
        input[type=password]
    
    ****************************************/
   $(`input[type=text][id!=email2][class!=search],
   input[type=password]`)
   .blur(function(){

        /// 모든공백 처리함수 /////
        const groSpace = cv => cv.replace(/\s/g, '');
        // groSpace는 get rid of Space 즉, 공백제거라는 말
        // cv => {return cv.replace(/\s/g, '');}
        // 정규식: 슬래쉬(/) 사이에 표현함, \s 스페이스문자
        // g는 모두 찾으라는 global(전역) 플래그문자임 
        // flag는 깃발이라는 영단어임. 즉 정규식 표시자문법
        // 참고) https://www.w3schools.com/js/js_regexp.asp

        // 1. 방금 블러가 발생한 요소의 id는?
        let cid = $(this).attr('id');
        // cid는 current id 즉, 현재아이디라는 뜻

        // 2. 블러가 발생한 요소의 입력값은?
        let cv = $(this).val().trim();
        // cv는 current value 즉, 현재값이라는 뜻

        // "이름"일 경우 앞뒤공백만 제거함 : trim()
        if(cid==='mnm') cv = cv.trim();
        // 기타인 경우 모든 공백제거처리! : groSpace()
        else cv = groSpace(cv);

        console.log('블러발생!',cid,'/',cv);

        // 제거된 공백문자로 입력창에 다시 출력하기
        $(this).val(cv);


        /*************************************** 
            3. 빈값 여부 체크하기
        ***************************************/
       if(cv === ""){
            // 메시지 출력
            $(this).siblings('.msg')
            .text('필수입력!')
            .removeClass('on'); // 녹색글자지움
            // .msg박스는 input요소의 형제요소임
            // siblings(요소) - 다른형제요소 중 특정요소선택
            // siblings() 아무값도 안쓰면 다른형제요소 모두선택
       } /////////// if : 빈값체크 ///////////////

       /******************************************************* 
            4. 아이디일 경우 유효성 검사하기
            - 검사기준 : 영문자로 시작하는 6~20글자 영문자/숫자
       *******************************************************/
      else if (cid === 'mid'){
        // console.log('검사결과:',vReg(cv,cid));
        if(!vReg(cv,cid)){ // 불통과일경우!
            // !(NOT연산자) -> false일때 if문으로 들어옴!
            
            // 메시지 띄우기
            $(this).siblings('.msg')
            .text('영문자로 시작하는 6~20글자 영문자/숫자')
            .removeClass('on');  // 녹색글자지움

        } /////////// if : 아이디검사 불통과 ///////
        else{ //// 검사결과가 통과이면 //////

            // 성공메시지출력
            $(this).siblings('.msg')
            .text('훌륭한 아이디네요~!')
            .addClass('on'); // 녹색글자

        } /////////// else : 아이디검사결과 통과 ///////
        

      } //////////// else if : 아이디검사 ///////////////

       /******************************************************* 
            5. 비밀번호일 경우 유효성 검사하기
            - 검사기준 : 특수문자,문자,숫자포함 형태의 5~15자리
       *******************************************************/
      else if (cid === 'mpw'){
        // console.log('검사결과:',vReg(cv,cid));
        if(!vReg(cv,cid)){ // 불통과일경우!
            // !(NOT연산자) -> false일때 if문으로 들어옴!
            
            // 메시지 띄우기
            $(this).siblings('.msg')
            .text('특수문자,문자,숫자포함 형태의 5~15자리');

        } /////////// if : 비밀번호검사 불통과 ///////
        else{ //// 검사결과가 통과이면 //////

            // 메시지 지우기
            $(this).siblings('.msg').empty();
            // empty() 선택요소의 텍스트를 지움

        } /////////// else : 비밀번호검사결과 통과 ///////
        

      } //////////// else if : 비밀번호검사 ///////////////

       /******************************************************* 
            6. 비밀번호확인일 경우 유효성 검사하기
            - 검사기준 : 입력된 비밀번호와 일치여부
       *******************************************************/
      else if (cid === 'mpw2'){
        
        // 비밀번호확인값과 비밀번호값이 같지 않으면
        if(cv !== $('#mpw').val()){ // !== 같지않으면
            
            // 메시지 띄우기
            $(this).siblings('.msg')
            .text('비밀번호가 일치하지 않습니다!');

        } /////////// if : 비밀번호확인검사 불통과 ///////
        else{ //// 검사결과가 통과이면 //////

            // 메시지 지우기
            $(this).siblings('.msg').empty();
            // empty() 선택요소의 텍스트를 지움

        } /////////// else : 비밀번호확인검사결과 통과 ///////
        

      } //////////// else if : 비밀번호확인검사 ///////////////

      /******************************************************* 
            7. 이메일 입력할때 검사하기
            - 검사기준 : 이메일 형식에 맞는지 여부검사
       *******************************************************/
      else if(cid === 'email1'){

        // 이메일 주소 만들기 : 앞주소@뒷주소
        let comp = eml1.val() + '@' + 
        (seleml.val()==='free' ? eml2.val():seleml.val());
        // (비?집:놀이동산)
        // 선택박스의 값이 '직접입력'일 경우(free)
        // 이메일 뒷주소 입력창값을 읽어가고
        // 아니면 선택박스 값을 넣는다!
        console.log('이메일주소:',comp);


      } //////////////// else if : 이메일검사 //////////////


      ///////////// 만약 통과시 메시지 지우기 //////////////
      else{
        // 메시지 지우기
        $(this).siblings('.msg').empty();
      } //////////// else : 통과시 ///////////////////


   }); ///////////////// blur ///////////////////////
   //////////////////////////////////////////////////

   //////// 이메일 관련 대상선정 ///////////
   // 이메일 앞주소
   let eml1 = $('#email1');
   // 이메일 뒷주소
   let eml2 = $('#email2');
   // 이메일 선택박스
   let seleml = $('#seleml');
   /////////////////////////////////////////

   /**************************************** 
        함수명: resEml (result Email)
        기능: 이메일 검사결과 처리
   ****************************************/
  const resEml = comp => { // comp - 완성된 이메일 주소

    // 이메일 정규식 검사
    // 통과시 //////////////////////
    // vReg(검사할값,검사항목)
    if(vReg(comp,'eml')){
        // 메시지 띄우기
        eml1.siblings('.msg')
        .text('적합한 이메일 형식입니다!')
        .addClass('on');

    } ///////// if : 통과시 ///////////
    else{ /////// 불통과시 ////////////
         // 메시지 띄우기
         eml1.siblings('.msg')
         .text('맞지않는 이메일 형식입니다!')
         .removeClass('on');

    } ////////// else : 불통과시 ///////////

  }; ////////////// resEml 함수 ///////////////
  /////////////////////////////////////////////




}); ///////////// jQB //////////////////////




/*////////////////////////////////////////////////////////
    함수명: vReg (validation with Regular Expression)
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
*/ ////////////////////////////////////////////////////////
function vReg(val, cid) {
    // val - 검사할값, cid - 처리구분아이디
    // //console.log("검사:"+val+"/"+cid);

    // 정규식 변수
    let reg;

    // 검사할 아이디에 따라 정규식을 변경함
    switch (cid) {
        case "mid": // 아이디
            reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
            // 영문자로 시작하는 6~20글자 영문자/숫자
            // /^[a-z]{1} 첫글자는 영문자로 체크!
            // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
            // 최소 5글자에서 최대 19글자를 유효범위로 체크!
            // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
            break;
        case "mpw": // 비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            // 특수문자,문자,숫자포함 형태의 5~15자리
            // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
            // (?=.*\d) 숫자 사용체크!
            // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
            // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
            break;
        case "eml": // 이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            // 이메일 형식에 맞는지 검사하는 정규식
            break;
    } //////////// switch case문 //////////////////

    // //console.log("정규식:"+reg);

    // 정규식 검사를 위한 JS메서드 
    // -> 정규식.test(검사할값) : 결과 true/false
    return reg.test(val); //호출한 곳으로 검사결과리턴!

} //////////// vReg 함수 //////////////////////////////////
///////////////////////////////////////////////////////////


