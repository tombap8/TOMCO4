window.addEventListener("DOMContentLoaded",()=>{
    console.log("모든이벤트정상실행");

    // 햄버거목록이벤트
    hamEvent();

    // 햄버거목록안에 아이콘 마우스이벤트
    hammouseEvent();

    //버튼 이벤트
    btns();

    // 인기이모티콘 이벤트
    best();


    //New이모티콘 이벤트
    New();

});////////////////실행 함수 ///////////////////////////



//////////////////////////////////////////////////////////////////////////
////////////////// 햄버거메뉴클릭시 목록펼쳐지는함수////////////////////////
function hamEvent() {
    // console.log("ham정상호출");
    const ham = document.querySelector(".ham");
    const article = document.querySelector('article');

    ham.onclick=()=>{
        
        article.classList.toggle('al');
    };
}////////////////// 햄버거메뉴클릭시 목록펼쳐지는함수////////////////////////
////////////////////////////////////////////////////////////////////////////



////////////////// 햄버거목록안에 아이콘 마우스이벤트////////////////////////
////////////////////////////////////////////////////////////////////////////
function hammouseEvent(){
        const img = document.querySelectorAll(".hm2 li img");
        img.forEach( (val, idx)=> { 
  
            val.onmouseover=()=>{
                console.log(val.alt);

                switch(val.alt){
                    case "구매내역":
                        val.src = "./프로젝트이미지/구매.gif";
                        break;
                    case "선물함":
                        val.src = "./프로젝트이미지/선물함.gif";
                        break;
                    case "쿠폰함":
                        val.src = "./프로젝트이미지/쿠폰함.gif";
                        break;
                    case "장바구니":
                        val.src = "./프로젝트이미지/장바구니.gif";
                        break;
                };
            }; //////mouseover switch////////////////////////
        }); ///////// Each ///////////
            

        img.forEach( (val, idx)=> { 

            val.onmouseout=()=>{
                console.log(val.alt);

                switch(val.alt){
                    case "구매내역":
                        val.src = "./프로젝트이미지/구매.png";
                        break;
                    case "선물함":
                        val.src = "./프로젝트이미지/선물함.png";
                        break;
                    case "쿠폰함":
                        val.src = "./프로젝트이미지/쿠폰함.png";
                        break;
                    case "장바구니":
                        val.src = "./프로젝트이미지/장바구니.png";
                        break;
                };
            }; //////mouseout switch///////////////////////
        }); ///////// Each ///////////
}////////////////// 햄버거목록안에 아이콘 마우스이벤트////////////////////////
////////////////////////////////////////////////////////////////////////////



////////////////// 인기 이모티콘 마우스이벤트////////////////////////
////////////////////////////////////////////////////////////////////////////
function best(){
        

        const box = document.querySelectorAll(".sbox");

        let ig = document.querySelectorAll(".sbox .lbox3 .lbox3_1 img");

        box.forEach((val,idx)=>{

            val.onmouseover = ()=>{

                    switch(idx){
                        case 0:
                        ig[idx].src = "./프로젝트이미지/인기1.gif";
                        break;
                        case 2:
                        ig[idx].src = "./프로젝트이미지/인기2.gif";
                        break;
                        case 4:
                        ig[idx].src = "./프로젝트이미지/인기3.gif";
                        break;
                        case 6:
                        ig[idx].src = "./프로젝트이미지/인기4.gif";
                        break;
                        case 8:
                        ig[idx].src = "./프로젝트이미지/인기5.gif";
                        break;
                        case 1:
                        ig[idx].src = "./프로젝트이미지/인기6-1.png";
                        break;
                        case 3:
                        ig[idx].src = "./프로젝트이미지/인기7.gif";
                        break;
                        case 5:
                        ig[idx].src = "./프로젝트이미지/인기8.gif";
                        break;
                        case 7:
                        ig[idx].src = "./프로젝트이미지/인기9.gif";
                        break;
                        case 9:
                        ig[idx].src = "./프로젝트이미지/인기10.gif";
                        break;
                    };
            };/////////////////box mouseover///////////////
        });//////////box forEach//////////////////

        
        box.forEach((val,idx)=>{
            val.onmouseout = ()=>{

                    switch(idx){
                        case 0:
                        ig[idx].src = "./프로젝트이미지/인기1.png";
                        break;
                        case 2:
                        ig[idx].src = "./프로젝트이미지/인기2.png";
                        break;
                        case 4:
                        ig[idx].src = "./프로젝트이미지/인기3.png";
                        break;
                        case 6:
                        ig[idx].src = "./프로젝트이미지/인기4.png";
                        break;
                        case 8:
                        ig[idx].src = "./프로젝트이미지/인기5.png";
                        break;
                        case 1:
                        ig[idx].src = "./프로젝트이미지/인기6.png";
                        break;
                        case 3:
                        ig[idx].src = "./프로젝트이미지/인기7.png";
                        break;
                        case 5:
                        ig[idx].src = "./프로젝트이미지/인기8.png";
                        break;
                        case 7:
                        ig[idx].src = "./프로젝트이미지/인기9.png";
                        break;
                        case 9:
                        ig[idx].src = "./프로젝트이미지/인기10.png";
                        break;
                    };
            };/////////////////box mouseout///////////////
        });//////////box forEach//////////////////
}////////////////// 인기 이모티콘 마우스이벤트////////////////////////
////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////신규이모티콘//////////////////////

function New(){
    

    const card = document.querySelectorAll(".card");

    let ig = document.querySelectorAll(".card img");


    card.forEach((val,idx)=>{

        val.onmouseover = ()=>{

                switch(idx){
                    case 0:
                    ig[idx].src = "./프로젝트이미지/신규1.gif";
                    break;
                    case 1:
                    ig[idx].src = "./프로젝트이미지/신규2.gif";
                    break;
                    case 2:
                    ig[idx].src = "./프로젝트이미지/신규3.gif";
                    break;
                    case 3:
                    ig[idx].src = "./프로젝트이미지/신규4-4.png";
                    break;
                    case 4:
                    ig[idx].src = "./프로젝트이미지/신규5.gif";
                    break;
                    case 5:
                    ig[idx].src = "./프로젝트이미지/신규6.gif";
                    break;
                    case 6:
                    ig[idx].src = "./프로젝트이미지/신규7-7.png";
                    break;
                    case 7:
                    ig[idx].src = "./프로젝트이미지/신규8.gif";
                    break;
                    case 8:
                    ig[idx].src = "./프로젝트이미지/신규9.gif";
                    break;
                    case 9:
                    ig[idx].src = "./프로젝트이미지/신규10.gif";
                    break;
               
                };

        




        };/////////////////box mouseover///////////////

        val.onmouseout = ()=>{
            // console.log(idx);

                switch(idx){
                    case 0:
                    ig[idx].src = "./프로젝트이미지/신규1.png";
                    break;
                    case 1:
                    ig[idx].src = "./프로젝트이미지/신규2.png";
                    break;
                    case 2:
                    ig[idx].src = "./프로젝트이미지/신규3.png";
                    break;
                    case 3:
                    ig[idx].src = "./프로젝트이미지/신규4.png";
                    break;
                    case 4:
                    ig[idx].src = "./프로젝트이미지/신규5.png";
                    break;
                    case 5:
                    ig[idx].src = "./프로젝트이미지/신규6.png";
                    break;
                    case 6:
                    ig[idx].src = "./프로젝트이미지/신규7.png";
                    break;
                    case 7:
                    ig[idx].src = "./프로젝트이미지/신규8.png";
                    break;
                    case 8:
                    ig[idx].src = "./프로젝트이미지/신규9.png";
                    break;
                    case 9:
                    ig[idx].src = "./프로젝트이미지/신규10.png";
                    break;
               
                };
        };/////////////////box mouseover///////////////
    });//////////box forEach//////////////////
}/////////////////////신규이모티콘////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


////////////////// 버튼 이벤트////////////////////////
////////////////////////////////////////////////////////////////////////////

function btns(){

    let pi = document.querySelector(".pi");

    const btnArray = document.querySelectorAll(".btn");

    let cl = 0;

   
    
        
        btnArray.forEach((val,idx)=>{
            
            val.onclick = function(){
     
                

                
                if(cl=== 1) return false;
                cl = 1;
                 setTimeout(()=> cl = 0,1000);

                const isRight = this.classList.contains('btn1');
                console.log(isRight);
            

                if(isRight){
                    let btnRli = pi.querySelectorAll("li");
 


                    pi.style.left = "-100%";
                    pi.style.transition = "left 1s ease-out";
                   
                 

                    setTimeout(() => {
  
                    
                        pi.appendChild(btnRli[0]);
                        pi.style.left= "0";
                        pi.style.transition = "none";
  
                    },1000);/////////////if timeout/////////////////////////
                }  ////////////////if///////////////////////////



                else{
                    let btnLli = pi.querySelectorAll("li");
                    pi.insertBefore(btnLli[btnLli.length-1],btnLli[0]);


                    pi.style.left = "-100%";
                    pi.style.transition = "none";

                    setTimeout(() => {
                        
                        pi.style.left="0";
                        pi.style.transition = "left 1s ease-out";
     

                        
                      
                    },10);/////////////else timeout/////////////////////////////////  
                    
                }//////////////////////else//////////////////////////////////////
                
                
                /* 중요한라인 pi 밑에있는 img에 접근해서 삼항연산자를사용
                 isRight ? true : false 
                 */
                let seqN = pi.querySelectorAll('li img')[isRight?1:0].getAttribute('alt');
                console.log(seqN);

                document.querySelector('#top')
                .style.backgroundColor = colors[seqN-1];


            };///////////onclick/////////////////
        }); //////////////forEach//////////////////

    };////////////////// 버튼 이벤트////////////////////////
    ////////////////////////////////////////////////////////////////////////////
const colors = ['#f5f3a0','#fee25d','#fffdfa','#ffffff','#94bab5'];

