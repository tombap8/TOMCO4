// const message = (name,age) => {
//     this.name = name;
//     this.age = age;
//     return name + ' is ' + age + 'years old.';
//     };

const message = (name,age) => 
`나의 이름은 ${name}입니다. 나이는 ${age}살입니다. 반갑습니다!!!^^<br>`;
    
// export default 를 사용하면 import하는 곳에서 변수명을 중괄호 없이 바로 사용할 수 있음
// 그냥 export하면 import하는 곳에서 변수명을 중괄호로 받아야함!
export default message;
// export {message};

// default 키워드는 유일한 값을 내보낼때 사용함(여러개 만들어도 하나만 내보냄)
// as 키워드는 export에서도 줄 수 있지만 import로 사용하는 곳에서 별칭을 줄때 사용함!
// import에서 별칭을 주려면 export에서 default없이 중괄호로 내보내야함!


// 클래스나 함수를 내보낼때 세미콜론(;) 붙이지 말것을 권고함(JS기본문법)
// 이유: 클래스나 함수는 중괄호 끝에 세미콜론을 붙이지 않기때문임!