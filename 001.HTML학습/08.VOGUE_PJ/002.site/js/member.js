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
        // cv => {return cv.replace(/\s/g, '');}
        // 정규식: 슬래쉬(/) 사이에 표현함, \s 스페이스문자
        // g는 모두 찾으라는 global(전역) 플래그문자임 
        // flag는 깃발이라는 영단어임. 즉 정규식 표시자문법
        // 참고) https://www.w3schools.com/js/js_regexp.asp

        // 1. 방금 블러가 발생한 요소의 id는?
        let cid = $(this).attr('id');

        // 2. 블러가 발생한 요소의 입력값은?
        let cv = $(this).val().trim();

        console.log('블러발생!',cid,'/',cv);

        // 제거된 공백문자로 입력창에 다시 출력하기
        $(this).val(cv);


        /*************************************** 
            3. 빈값 여부 체크하기
        ***************************************/
       if(cv === ""){
            // 메시지 출력
            $(this).siblings('.msg').text('필수입력!')
       } /////////// if : 빈값체크 ///////////////


   }); ///////////////// blur ///////////////////////
   //////////////////////////////////////////////////




}); ///////////// jQB //////////////////////