$(() => {

    let block = 0;
    $('.mobtn').click(function(){

        if(block){
                $('#mobx').css({display:'none'})
                $('#mobx').css({width:'0px'})
                block = 0;
            
        }
        else{
            $('#mobx').css({display:'block'})
            $('#mobx').css({width:'200px'})
            block = 1;
        }
    })
    
    $('.sns a, .mosns a').click(function (e) {

        // a요소 기본이동막기
        e.preventDefault();
        // JS의 return false와 효과동일
        // 단, return false는 코드 맨아래 위치함!

        // 1. 클릭된 a요소의 텍스트읽기
        let atxt = $(this).text().trim();
        // trim() 앞뒤공백제거
        console.log(atxt)

        // 2. 이동할 페이지 주소할당하기
        let url;
        switch (atxt) {
            case "인스타그램":
                url = "https://www.instagram.com/hanatour_official/";
                break;
            case "페이스북":
                url = "https://www.facebook.com/HanaTour.fb";
                break;
            case "유튜브":
                url = "https://www.youtube.com/user/HanaTour";
                break;

        } ///////// switch case ////////

        // 3. 페이지 이동하기
        if (atxt === "로그인" ||
            atxt === "회원가입" ||
            atxt === "갤러리")
            location.href = url;
        else // 기타 sns는 새창열기(window.open())
            window.open().location.href = url;

    }); ///////// click //////////////////



    $('header').mouseenter(function(){
        $('#gnb li a').css({color:'#000'})
        $('.sns a').css({color:'#000'})
        $('header>.inner>a').css({color:'#000'})
    })
    $('#gnb li a').mouseenter(function(){
        $('#gnb li a').css({color:'#000'})
        $(this).css({color:'rgba(7, 207, 218, 0.6)'})
    })
    $('.sns a').mouseenter(function(){
        $('.sns a').css({color:'#000'})
        $(this).css({color:'rgba(7, 207, 218, 0.6)'})
    })
    $('#gnb li a').mouseout(function(){
        $('#gnb li a').css({color:'#000'})
    })
    $('header>.inner>a').mouseover(function(){
        $(this).css({color:'rgba(7, 207, 218, 0.6)'})
    })
    $('header>.inner>a').mouseout(function(){
        $(this).css({color:'#000'})
    })

});