$(() => {
    // 호출확인
    console.log("로딩완료!");

    let a=$('#BR-RJ');
    let b=$('#BR-SP')
    let c=$('#BR-PR')
    let d=$('#BR-MS')
    let tooltip=$("div.tooltip");
    tooltip.css({opacity:0, display:"none"})

    a.on("mouseenter",onOver);
    a.on("mousemove",onMove);
    a.on("mouseleave",onOut);	
    
    b.on("mouseenter",onOver);
    b.on("mousemove",onMove);
    b.on("mouseleave",onOut);	
    
    c.on("mouseenter",onOver);
    c.on("mousemove",onMove);
    c.on("mouseleave",onOut);	
    
    d.on("mouseenter",onOver);
    d.on("mousemove",onMove);
    d.on("mouseleave",onOut);	
    

    function onOver(e){

        console.log($(this).attr("id"))

        let btxt = $(this).attr('id')
        console.log("버튼:",btxt);

            if(btxt==="BR-RJ"){
                $('.tooltip').text('리우데자네이루, 파라티')
            }
            else if(btxt==="BR-SP"){
                $('.tooltip').text('상파울루')
            }
            else if(btxt==="BR-PR"){
                $('.tooltip').text('포스두이구아수')
            }
            else if(btxt==="BR-MS"){
                $('.tooltip').text('보니또')
            }

    
        //alert(e.pageX) // 마우스의X좌표를 출력해본다. 
        tooltip.show(); // 툴팁을 보여주게 
        tooltip.css({"left":e.pageX+10, "top":e.pageY+10}); // 툴팁의좌표를 마우스의 좌표의 10간격을 두고 지정 	
        // 중요) e.pageX : 페이지에서(body)부터의 마우스 x좌표 
        // 주의) 함수에서 e (이벤트객체를 반드시 붙여야 e.pageX,  e.pageY 를 인식 )
        tooltip.stop();
        tooltip.animate({"opacity":0.9},500,"easeOutCubic"); // 툴팁의 투명도를 0.8 로 에니메이션 
        timer=setTimeout(onOut,3000); // 중요) setTimerout() 함수 : 일정한시간후에 함수를 실행 	
      }
      
      function onMove(e){
        tooltip.css({"left":e.pageX+10, "top":e.pageY+10});	 
        // 마우스를 움직일때도 툴팁의좌표를 마우스의 좌표의 10간격을 두고 따라다니게 지정 	
      }
      
      function onOut(){
        clearTimeout(timer); // 진행되고있는 setTimeout을 해제
        tooltip.stop();
        tooltip.animate({"opacity":0},500,"easeOutCubic", function(){
        tooltip.hide();					
        });
        // 마우스가 아웃되면 툴팁의 투명도를 0 으로에니메니션 주고 사라지게함 
      }



});