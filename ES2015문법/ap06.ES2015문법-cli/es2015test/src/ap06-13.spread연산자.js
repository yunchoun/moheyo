/*

  스프레드 사용법을 학습한다.

  ES 5에서는
  arguments 매개변수는 유사 배열 객체다.
    length 프로퍼티가 있다.
    Array  메서드를 사용할 수 없다.
    arrow function에서는 arguments는 사용할 수 없다.

  ES2015 에서는
  rest 매개변수는 배열이다.
    rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
    함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.

  Spread 연산자는 ... 이다.
    이터러블(iterable) 객체를 "개별" 요소로 분리
    이터러블(iterable) 객체에는 Array, String, Map, Set 등이 있다.
    iterator를 생성해서 next()로 순회할 수 있는 자료구조가 이터러블

*/

const cities = ['서울', '부산', '제주'];
console.log(cities[0], cities[1], cities[2]); //'서울', '부산', '제주'
console.log(...cities);
debugger;

const newcities = [...cities];
console.log(...newcities); //'서울', '부산', '제주'
debugger;

const east = ['U', 'K', 'T'];
const west = ['N', 'C', 'G'];

//east와 west 를 결합하여 countries1 배열은 만드시오
const countries1 = east.concat(west); // u,k,t,n,c,g
console.log(east); // u,k,t,n,c,g
console.log(countries1); // u,k,t,n,c,g
debugger;
const countries2 = [...east, ...west];
console.log(countries2);
// debugger;

const lakes = ['경포', '화진', '송지', '청초'];
const [first, ...rest] = lakes; //first 빼고 아래에있는 모든 애들을 받고싶을때 ...rest
console.log(first);
console.log(rest);
// debugger;

const [city1, ...ciryrest] = [...east, ...west];

const car1 = {
  type: 't1',
  color: 's1',
  model: 2017,
};

const car2 = {
  type: 't2',
  color: 's2',
  model: 2019,
};

const { type } = car1; //t1
console.log(type); //t1
// debugger;
//{type} = {...car1,...car2}

const func = function ({ type }) {
  console.log(type); //t2
  debugger;
};
func({ ...car1, ...car2 });

const moring = {
  breacfast: '미역국',
  lunuch: '삼치구이',
};
const dinner = '스테이크';

const meals = {
  ...moring,
  dinner, //dinner:dinner
};
console.log(meals);

function childComponent(...props) {
  //calle
  console.log(props);
}

const message = 'passed from Parent Component';
childComponent(...message);
debugger;
