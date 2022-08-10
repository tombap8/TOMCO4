window.addEventListener("DOMContentLoaded",()=>{
    console.log("모든이벤트정상실행");

    // 햄버거목록이벤트
    hamEvent();

    // 햄버거목록안에 아이콘 마우스이벤트
    hammouseEvent();

    //버튼 이벤트
    btns();


    // 배경색전환 이벤트
    col();


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

   
    // ham.addEventListener('click', function(){
    //     article.classList.toggle('al');
    // });
    
    ham.onclick=()=>{
        
        article.classList.toggle('al');
    };
}////////////////// 햄버거메뉴클릭시 목록펼쳐지는함수////////////////////////
////////////////////////////////////////////////////////////////////////////



////////////////// 햄버거목록안에 아이콘 마우스이벤트////////////////////////
////////////////////////////////////////////////////////////////////////////
function hammouseEvent(){
        // console.log("hammouser정상호출");
        const img = document.querySelectorAll(".hm2 li img");
        // console.log(img);

        // 글씨에 올렷을경우 속성 변하게 변경을???@@@@

        img.forEach( (val, idx)=> { 
            // console.log(val);
            // console.log(idx);
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
            // console.log(val);
            // console.log(idx);
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
        // console.log("hammouser정상호출");
        

        const box = document.querySelectorAll(".sbox");
        // console.log("박스",box);

        let ig = document.querySelectorAll(".sbox .lbox3 .lbox3_1 img");
        // console.log("ig값",ig);

        // const img = document.querySelectorAll(".sbox img");


        box.forEach((val,idx)=>{
            // console.log("box",val);

            val.onmouseover = ()=>{
                // console.log(idx);

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
            // console.log("box",val);

            val.onmouseout = ()=>{
                // console.log(idx);

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
    // console.log("hammouser정상호출");
    

    const card = document.querySelectorAll(".card");
    // console.log("박스",box);

    let ig = document.querySelectorAll(".card img");
    // console.log("ig값",ig);

    // const img = document.querySelectorAll(".sbox img");


    card.forEach((val,idx)=>{
        // console.log("box",val);

        val.onmouseover = ()=>{
            // console.log(idx);

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
    // console.log('btnR 정상호출');
    // 슬라이드 ul에 접근
    let pi = document.querySelector(".pi");


    // btn 공통클래스에 접근
    const btnArray = document.querySelectorAll(".btn");


    // 광클금지 변수
    let cl = 0;

   
    
        
        btnArray.forEach((val,idx)=>{
            
            val.onclick = function(){
            //    let ccode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
            //    console.log("랜덤값색상반올림",Math.random() * 0xffffff);
            //    console.log("컬러색상",ccode); // # + 랜덤컬러값
            //    console.log("투스트링",Math.round);
            /* document.querySelector("header").style.backgroundColor = ccode;
               document.querySelector("header").style.linearGradient = ccode;
                "#"은 컬러속성의 앞에 오는 문자열이다 기본적으로 붙이고 
                소수점값 반올림 ((난수발생) * HEX단위).toString(진수표현법) 2/ 8/ 10/ 16/ 32/
                toString() 숫자타입을 문자타입으로 변환 !
                 // document.querySelector("header").style.backgroundColor = ccode;
            */

                

                

                
                if(cl=== 1) return /* console.log("나가",cl), */false;
                // console.log("들어와",cl);
                cl = 1;
                 setTimeout(()=> cl = 0,1000);

                
                // console.log("this는?",this);
                // this === btnArray(.btn)
                const isRight = this.classList.contains('btn1');
                

                if(isRight){
                    let btnRli = pi.querySelectorAll("li");
                    // console.log("btnRli길이",btnRli.length);
                    // console.log("오른쪽");


                    pi.style.left = "-100%";
                    pi.style.transition = "left 1s ease-out";
                    /*이해하자! 
                    -100%프로 = pi(슬라이드ul)을 부모(section) 기준만큼
                    1초동안 왼쪽으로 이동함
                    */
                   
                 

                    setTimeout(() => {
                         /*이해하자! 
                         setTimeout은 본함수(if)의 실행이 끝난후에
                         시간을 지정하여 실행시키는 함수를 말한다. 1000=1초 기준(1000/1)
                         */ 
                    
                    
                        // 뒤에추가
                        pi.appendChild(btnRli[0]);
                        pi.style.left= "0";
                        pi.style.transition = "none";
                        /* 이해하자!
                        밖으로 나간 pi(슬라이드ul)이 li중 0번째, 즉첫번째 자식을
                        appendChild로  자식li들중 제일마지막으로  배치시킨다 그런후
                        부모요소(section)의 기준으로 -100%로 나가있던위치를 
                        부모요소 위치(section) 0으로(제자리)로 돌아온다.
                        이상황에서 transition을 줄경우 돌아오는과정에서 원래있던
                        첫번째 자식 li의 자리에 다음에 있던 자식 li가들어오게되고
                        부모가 돌아오는 속도보다 자식li가 들어오는 속도가빠르기때문에
                        부모와 같이 들어오므로 영역밖으로 나갔다가 들어오는 현상이
                        발생한다.
                        */
                    },1000);/////////////if timeout/////////////////////////
                }  ////////////////if///////////////////////////



                else{
                    let btnLli = pi.querySelectorAll("li");
                    pi.insertBefore(btnLli[btnLli.length-1],btnLli[0]);

                    // console.log("btnRli길이",btnLli.length);
                    // console.log("왼쪽");

                    pi.style.left = "-100%";
                    pi.style.transition = "none";
                    
                    /*이해하자!
                     부모요소기준 왼쪽으로 100프로 트랜지션없이나간다
                        여기서 생각할수있다 transition = none면 없는값인데
                        왜 값을 줬을까 ?
                        20분 고민결론 => none 값을 주지않으면 처음왼쪽으로 넘길때
                        문제는 발생하지않는다. 그다음 넘길때 튕김현상이발생? 왜?
                        settimeout에 있는 트랜지션이 작동하는것같다
                        트랜지션이 없는 상태에서는 적용된 트랜지션이 없기때문에 첫번째는
                        정상 실행이되고 두번재 부터는 setTimeout에서의 트랜지션이 적용된
                        상태에서 실행이 된다. 즉 setTimeout의 트랜지션이 1초라할때
                        다음에 -100%를 나갈때 1초라는 트랜지션이 적용이되고
                        다음 setTimeout의 실행은 0.01초후 실행이되면서
                        -100%를 나가던 pi는 다시 0으로 돌아오게되고
                        li또한 부모와 같이 들어오기때문에 튕김현상이발생
                     */

                    setTimeout(() => {
                        
                    // 앞에추가
                        pi.style.left="0";
                        pi.style.transition = "left 1s ease-out";
                        /* 이해하자!
                        나가있던 -100%로에서 원래자리0으로 1초동안 마지막에는 천천히들어온다
                            
                        */

                        
                      
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

    
    /***********************************************************************
        요구:  ul(.pi)에  첫번째자식(0)li 가 왔을때 그 li의 대한
        배경색을 바꿈 
     ************************************************************************/
   
    function col(){
        console.log("색상실행")

        const coco = document.querySelectorAll(".pi li img");
        console.log(coco[0].alt);
        const co = document.querySelector("#top");


        // if(coco[1].alt === "2"){
        //     co.style.backgroundColor = "red";
        // }
        

    }
















//////////////////////////------------------------//////////////////////////////////

// function ov(){
//         const img = document.querySelector(".hm2 li img");
//         let ic = img.alt
        
//         function Test(event) {
//             const eventType = event.type
//             // eventType: string = mouseover, mouseout
//             // ic: string = '구매'
//             // if (eventType === '')

//             // const isMouseOver = eventType === 'mouseover';
//             // let is = null;
//             // console.log(img.src.endsWith('.png'))
//             // switch(ic){
//             //     case"구매": {
//             //         if (isMouseOver) {
//             //             is="./프로젝트이미지/구매.gif";
//             //         } else {
//             //             is="./프로젝트이미지/구매.png";
//             //         }
//             //     }
                    
//             //     break;
//             // };
//             // img.setAttribute("src", is)
//             // console.log(img);

//             //
//             switch (eventType) {
//                 case 'mouseover':
//                     img.src = img.src.replace('.png', '.gif')
//                     break;
//                 case 'mouseout':
//                     img.src = img.src.replace('.gif', '.png')
//                     break;
//             }
//         }

        
//         console.log(ic);
 

//         let is;
//         img.onmouseover = ((event)=>{
//             Test(event.type)
//             // console.log(`over: `)
//             // console.log(event.type)
//             // e1 = event;
//             // switch(ic){
//             //     case"구매":
//             //     is="./프로젝트이미지/구매.gif";
//             //     break;
//             // };

//             // img.setAttribute("src",is);
//             // console.log(img);


//         });

//         img.onmouseout = ((event)=>{
//             Test(event.type)
//             // console.log(`out:`)
//             // console.log(event.type)
//             // e2 = event;
//             // switch(ic){
//             //     case"구매":
//             //     is="./프로젝트이미지/구매.png";
//             //     break;
//             // };
//             // img.setAttribute("src",is)
//             // console.log(img);

//         });

    
//         // addEventListener('mouseover', Test)
//         // addEventListener('mouseout', Test)
//         // img.onmouseover = Test
//         // img.onmouseout = Test


        



// };


