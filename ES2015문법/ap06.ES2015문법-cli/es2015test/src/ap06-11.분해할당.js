/*
 (구조) 분해 할당에 대해서 알아본다.
  배열 분해 할당은 배열의 순번을 이용해서 매핑한다.
  객체 분해 할당은 객체의 프로터티 명을 이용해서 매핑한다.
*/

const points = [20, 30, 40];
const x1 = points[0];
const y1 = points[1];
const z1 = points[2];

console.log(x1, y1, z1);

const [x2, y2, z2] = points; //points ===[20,30,40] //순서대로 들어감
console.log(x2, y2, z2);

const [x3, , z3] = points; //points ===[20,30,40] //30은 안만들때는 비어놓으면됌.
console.log(x3, z3); // 20,40

const [x4, , , y4] = points;
console.log(x4, y4);

const car = {
  type: 't',
  color: 's',
  year: 2023,
};

//객체의 프로퍼티를 개별 변수로 만들기.
const type1 = car.type;
const color1 = car.type;
const year1 = car.type;
console.log(type1, color1, year1);

//객체의 프로퍼티를 분행할당을 이용하여 변수로 만들기.
// const { type: type, color: color, year: year , gear:gear} = car;
const { type, color, year, gear } = car;
console.log(type, color, year, gear); // t,s,2023,undefined
