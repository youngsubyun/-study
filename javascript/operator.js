//1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literal: 1 + 2 = ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3); //제곱

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

//4. Assignment operators (할당하는 operators)
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators 비교하는  
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. logical operators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// ||(or) 3개중 한개라도 true 이면 true , 처음으로 true 나오면 멈춤 
console.log(`or: ${value1 || value2 || check()}`);
// check 같은 함수는 나중에 선언 하는것이 효율적


//&&(and) 3개 모두 true 이어야 true로 return 함
//and 간편하게 null 체크할 때 많이 사용
/*if (nullableObject != null) {
    nullableObject.something;
}*/

console.log(`and: ${value1 && value2 && check()}`);
function check() {
    for (let i = 0; i = 10; i++) {
        //wating time
        console.log('s');
    }
    return true;
}

//!(not) 값을 반대로 바꿔줌
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 타입을 변경해서 검사함 
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion 타입이 다르면 다른것
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality reference , object는 메모리에 탑제될 때 reference의 형태로 저장
const young1 = { name: 'young' };
const young2 = { name: 'young' };
const young3 = young1; // young3 은 young1의 reference가 할당 되어 있으니 똑같은 reference 가짐
console.log(young1 == young2);
console.log(young1 === young2);
console.log(young1 === young3);


// equality - puzzler
console.log(0 == false); // false로 간주 될 수 있음 
console.log(0 === false); // 
console.log('' == false);
console.log('' === false);
console.log(null == undefined); // 같은 것으로 간주
console.log(null === undefined); // 다른 타입 


//8. conditional operators: if
//if, else if, else
const name = 'coder';
if (name ==='young') {
    console.log('Welcome, young');
}else if (name === 'coder') {
    console.log('You are amazing coder');
}else {
    console.log('unkwnon');
}

//9. Ternary operator: ?
//condition ? value1 : value2;
console.log(name === 'young' ? 'yes' : 'no');


//10. Switch statement
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all');
        break;
}

//11. Loops , while 같은 경우 (i > 0)>>[statement]가 false로 나오기 전 까지 무한으로 반복함, 조건문이 맞을때만 실행하고 싶을때 사용
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

//do while >> 블럭을 먼저 실행하고 조건이 맞는지 아닌지 검사, 블럭을 먼저 실행하고 싶을때 사용
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2) {
    //inline variable declaration >> 블럭안에 let 이라는 지역변수를 선언
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

//break>> 루프를 완전히 끝내는것 , continue>> 지금것만 스킵하고 다시 다음으로 넘어가는 것
//q1. 숫자를 0~10까지 짝수인 것만 프린트 하시오.(use continue)

for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }console.log(`d: ${i}`);
}

//q2. 0부터 10까지 반복하고 8까지 숫자를 출력
//(use break)

for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }console.log(`i: ${i}`);
}


















