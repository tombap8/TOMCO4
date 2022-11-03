// 하나씩 내보내도 됨!
// export const name = "Jesse";
// export const age = 40;

const personInfo = 
[
    ["준현",23],["정희",33],["성락",45],["진경",22]
];
const mainTitle = "모듈을 이용한 구현";
const subTitle = "이것은 리액트의 기초입니다!!!";

// 다중변수 전송 : 중괄호 사용 & 콤마로 구분 -> {변수명,변수명,...}
export {personInfo, mainTitle, subTitle};