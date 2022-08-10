$(() => {

    // 호출확인
    console.log("로딩완료!");

    let video = $('video')

    video.trigger('pause')


    $('figure').mouseenter(function(){

        $(this).children().children('video').trigger('play')
    })
    $('figure').mouseleave(function(){

        $(this).children().children('video').trigger('pause')
    })


    $('.see').click(function(){
        $(this).children('a').attr('href',"sub"+parseInt((Math.random()*2)+1)+".html")
    })
    $('.eat').click(function(){
        $(this).children('a').attr('href',"sub"+parseInt((Math.random()*2)+3)+".html")
    })
    $('.enjoy').click(function(){
        $(this).children('a').attr('href',"sub"+parseInt((Math.random()*2)+5)+".html")
    })

})



