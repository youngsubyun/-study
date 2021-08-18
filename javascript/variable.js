'use strict';  //바닐라 자바스크립트 유용..

//variable 변수 변경될 수 있는 값
//변수 선언 키워드 let
//var (don't ever use this! / 쓰지마)
//var hoisting (어디에 선언했냐에 상관없이 항상 제일 위로 선언을 제일 위로 끌어 올리는것)
//javascript의 경우 age = 4;
//                var age;
//블럭스콥이 없다 (블럭을 철저히 무시함)

//variable types
//primitive, single item(더 이상 작은 단위로 나눌수 없는 한가지 아이템)
//:number, string, boolean, null, undefiedn, symbol
//object(single item들을 여려게 묶어서 한 박스로 관리), box container
//function(데이터 타입중 한개) , first-class function(다른 데이터 타입처럼 변수에 할당 가능/ 함수의 인자로도 전달이 됨/ 함수에서 return 타입으로도 function을 return 가능)

const count = 17; //integer(정수)
const size = 17.1; //decimal number(소숫점 숫자)

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string) 변수를 이용해 동적으로 생성할 수 있는 문법
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects 자료구조 등에서 고유한 식별자가 필요하거나 동시에 다발적으로 일어날수 있는 코드에서 우선순위를 주고 싶을때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

//동일한 symbol 만들고 싶을때 
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
//symbol은 바로 출력시 그냥 하면 오류가 나므로 .description 을 이용해서 string으로
//변환해서 출력해야함

//object, real-life object, data structure 물건이나 물체들을 대체할 수 있는 박스 형태
const young = { name: 'young', age: 20 };
young.age = 21;

//Dynamic typing: dynamically typed language 선언할 때 어떤 타입인지 선언하지 않고 런타임(프로그램이 동작할 때) 할당된 값에 따라 타입이 변경될 수 있다.
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);



