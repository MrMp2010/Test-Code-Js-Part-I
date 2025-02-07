console.log("Hello Word");
//=======================
let nam = "mohammad";
console.log(nam);
//=======================
const sen = 27;
console.log(sen);
//=======================
let person = {
    name : "ali",
    age : 18,
    admin : true,
}
console.log(person);
console.log(person["admin"]);
//=======================
let applicasion = ["telegram","bale","pinterast"];
console.log(applicasion);
console.log(applicasion.length);
//=======================
function meet () {
    console.log("Barcelona");
}
meet();

function meet2 (a,b) {
      let x = 11
      console.log(x+a+b)
}
meet2(33,66);
//=======================
let n1 = 10;
console.log(n1++);
console.log(++n1);
console.log(n1);
//=======================
let n2 = 8;
let n3 = 4;
n2 = n2 + n3;
console.log(n2);
n3 = n3 + 2**3;
console.log(n2==n3);
n4 = "12";
console.log(n3===n4);
console.log(n2!==n4);
//=======================
let xy = true;
let bottontext = xy===true?"dashbord":"login";
console.log(bottontext);

let kala = 3;
let value = 1000;
let userValue = 1200;
let userValue2 = 900;
let buy = 3 > 0 && userValue > value ;
let buy2 = 3 > 0 && userValue2 > value;
console.log(buy);
console.log(buy2);
console.log(!buy);
console.log(!buy2);
//=======================
let t = true;
let u = false;
let s = false;
let h = false;
console.log(t||u||s||h);
console.log(u||s||h);
//=======================
function age (a) {
    if( a >= 18){
         console.log("OK");
    }else{
        console.log("NOT OK");
    }
}
age(35);
//=======================
let role = "admin"
switch (role) {
    case "guest":
        console.log('welcome guest user');
        break;
    case "admin":
        console.log('welcome admin user');
        break;
    default:
        console.log('welcome unknown user');
        break;
}
//=======================
for(let i = 1;i < 5;i++){
    console.log(i);
}

for(let i2 = 0;i2 < 5;i2++){
    console.log(i2);
}

for(let i3 = 0;i3 <= 5;i3++){
    console.log(i3);
}

for(let i4 = 5;i4 >= 1;i4--){
    console.log(i4);
}

for(let i5 = 5;i5 >= 0;i5--){
    console.log(i5);
}

let output = '';
for (let i = 1; i <= 10; i++){
    output += i + ' ';
}
console.log(output);

let a = 0;
while (a <= 5) {
    console.log(a);
    a++;
}

let n10 = [];
let a2 = 1;
while (a2 <= 10){
    n10.push(a2)
    a2++;
}
console.log(n10);

let a3 = 0;
    do{
        console.log(a3);
        a3++;
}while(a3 <= 5);
//=======================
for(let key in person){
    console.log(key);
    console.log(person[key]);
}

for(let index in applicasion){
    console.log(index);
    console.log(applicasion[index]);
}

for(let i10 of applicasion){
    console.log(i10);
}
//=======================
let i13 = 0;
while(i13<=10){
    if(i13==5){
        break;
    }
    console.log(i13);
    i13++;
}
let b = 0;
while(b<=10){
   if(b==5){
    b++
        continue;
    }
   console.log(b);
    b++;
}
//=======================
let circleA = {
    radius : 1,
    location : {
        x : 1,
        y : 2,
    },
    isvisible : true,
    draw : function(){
        console.log("draw");
    },
};
console.log(circleA);
console.log(circleA["draw"]);
console.log(circleA["location"]);
circleA.draw();
circleA.color = "red";
delete circleA.draw;
//=======================
function createCircle (radius){
    return{
        radius,
        draw : function(){
            console.log("draw");
        }
    };
}
let circleB2 = createCircle(2);
console.log(circleB2);

let circleB3 = createCircle(3);
console.log(circleB3);
//=======================
function Circle (radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}
let circleC3 = new Circle(4);
console.log(circleC3);

let circleC4 = new Circle(5);
console.log(circleC4);
//=======================
let v = 10;
let v2 = v;
v = 20;
console.log(v);
console.log(v2);
//=======================
let r = {value2 : 10};
let r2 = r;
r.value2 = 20;
console.log(r);
console.log(r2);

let obj = {value3 : 10}
function r3 (obj){
    obj.value3++;
}
r3(obj);
console.log(obj);
//=======================
let circleE = {
    radius : 1,
    draw(){
        console.log("draw")
    }
}
for(let key in circleE){
    console.log(key);
    console.log(circleE[key]);
}

let aA = Object.keys(circleE);
console.log(aA);
for(let key of aA){
    console.log(key);
}

let circleEntries = Object.entries(circleE);
console.log(circleEntries);

for(let entry of circleEntries){
    console.log(entry);   
}
//=======================
if("radius" in circleE){
    console.log("YES");
}

if("radius" in circleA){
    console.log("radius" in circleA);
}

if("location" in circleE){
    console.log("YES");
}else{
    console.log("NO");
}

if("location" in circleE){
    console.log("location" in circleE);
}else{
    console.log("location" in circleE);
}
//=======================
let another = {};
for(let key in circleA){
    another[key] = circleA[key];
}
console.log(another);

let another2 = Object.assign({area : 10},circleA,{pinterast : 8});
console.log(another2);

let another3 = {volume : 12,pinterast : 14,...circleE,area : 16};
console.log(another3);          
//=======================
console.log(Math.PI);

let randomNumber = Math.random();
console.log(randomNumber);

function randomNumber2(min,max) {
    return Math.random() * (max - min) + min;
}
console.log(randomNumber2(1,100)); 

function randomNumber3(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber3(1,100)); 

function randomNumber4(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
console.log(randomNumber4(1,100)); 

function randomNumber5(min, max, decimalPlaces) {
    let random = Math.random() * (max - min) + min;
    return parseFloat(random.toFixed(decimalPlaces));
}
console.log(randomNumber5(1, 100, 2)); 

let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];

let max = Math.max(...numbers); 
let min = Math.min(...numbers);

console.log("The largest number:", max); 
console.log("The smallest number:", min); 

let nN = -3;
let nN2 = Math.abs(nN);
console.log(nN2);
//=======================
const message = "neon";
console.log(message);
console.log(message.length);
console.log(message[0]);
console.log(message[2]);
console.log(message.includes("e"));
console.log(message.includes("x"));
console.log(message.startsWith("n"));
console.log(message.startsWith("a"));
console.log(message.endsWith("n"));
console.log(message.endsWith("a"));
console.log(message.indexOf("n"));
console.log(message.indexOf("o"));
console.log(message.indexOf("x"));

let message2 = "neonB";
console.log(message2);
console.log(message2.replace("neonB","learnA"));

let message3 = "neon learn"
console.log(message3.toUpperCase());

let message4 = "NEON LEARN";
console.log(message3.toLowerCase());

let message5 = new String ("neon");
console.log(message5);
//=======================
let text = "neon\"learn";
console.log(text);

let text1 = "neon learn";
console.log(text1.split(' '));

let text3 = "neon*learn";
console.log(text3.split('*'));
//=======================
let messageA = "neon\nlearn";
console.log(messageA);

let messageB = `neon
learn
`;
console.log(messageB);

let Nam = "ali";
let msg = "hi" + " " + Nam + ".";
console.log(msg);

let msg2 = `hi ${Nam}.`
console.log(msg2);
//=======================
let now = new Date();
console.log(now.toDateString());

let now2 = new Date("may 11 2018 09:00");
console.log(now2.getHours());
console.log(now2.getDate());
console.log(now2.getDay());
console.log(now2.getMonth());
console.log(now2.getFullYear());
now2.setHours(12);
now2.setDate(15);
now2.setFullYear(2015);
now2.setMonth(5);
console.log(now2); 

let now3 = new Date();
console.log(now3.toISOString());
//=======================
const numbers2 = [3,4];
numbers2.push(5, 6); 
numbers2.unshift(1,2);
numbers2.splice(0,0,"a");
numbers2.splice(4,0,"b");
numbers2.splice(8,0,"c");
console.log(numbers2);
//=======================
const numbers3 = [1,2,1,3];
console.log(numbers3.includes(2));
console.log(numbers3.includes(1));
console.log(numbers3.includes(5));
console.log(numbers3.indexOf(2));
console.log(numbers3.indexOf(1));
console.log(numbers3.indexOf(5));
console.log(numbers3.lastIndexOf(1));
console.log(numbers3.indexOf(1,1));
console.log(numbers3.indexOf(1,0));

if(numbers3.indexOf(7) !== -1){
    console.log("YES");
}else{
    console.log("NO");
}

if(numbers3.includes(1)){
    console.log("YES");
}else{
    console.log("NO");
}

const courses = [
    {id : 1,n11 : "ali"},
    {id : 2,n13 : "reza"},
];
console.log(courses.indexOf({id : 2,n13 : "reza"}));
console.log(courses.includes({id : 1,n11 : "ali"}));

const result = courses.find(function(course){
    return course.id === 2;
});
console.log(result);

const result2 = courses.find(function(course){
    return course.n13 === "mohammad";
});
console.log(result2);

const result3 = courses.findIndex(function(course){
    return course.id === 1;
});
console.log(result3);

const result4 = courses.findIndex(function(course){
    return course.n11 === "ahmad";
});
console.log(result4);
//Arrow Function
const resultA = courses.find((course)=>course.id === 2);
console.log(resultA);

const resultB = courses.find((course)=>course.n11 === "akbar");
console.log(resultB);

const resultC = courses.findIndex((course)=>course.id === 1);
console.log(resultC);

const resultE = courses.findIndex((course)=>course.n13 === "beny");
console.log(resultE);
//=======================
const numbersA = ["a",1,2,3,"b",4,5,6,"c"];
numbersA.pop();
numbersA.shift();
numbersA.splice(3,1);
console.log(numbersA);
//=======================
let numbersA1 = [1,2,3];
let anotherA = numbersA1;
numbersA1 = [];
console.log(numbersA1);
console.log(anotherA);

let numbersA2 = [1,2,3];
let anotherA1 = numbersA2;
numbersA2.length = 0;
console.log(numbersA2);
console.log(anotherA1);

let numbersA3 = [1,2,3];
let anotherA2 = numbersA3;
numbersA3.splice(0,numbersA3.length)
console.log(numbersA3);
console.log(anotherA2);
//=======================
const first = [1,2,3];
const secend = [4,5,6];
const third = first.concat(secend);
console.log(third);

const Third = third.slice(1,4)
console.log(Third);
const Obj = {id : 1};
const fourth = Third.concat(Obj);
console.log(fourth);

const First = [{id : 1}];
const Secend = [1,2,3];
const THird = First.concat(Secend);
First[0].id = 10; 
console.log(First);
console.log(THird); 
//=======================
const THIrd = ["a",...first,"b",...secend,"c"];
console.log(THIrd);

const THIRd = [...THird];
console.log(THIRd);
//=======================
const Numbers = [1,2,3,4];

for(let numderS of Numbers){
    console.log(numderS);
}

console.log(Numbers.join(' '));

Numbers.forEach(function(numberS2){
    console.log(numberS2);
})

Numbers.forEach(numderS3=>console.log(numderS3));

Numbers.forEach((numderS4,i20)=>console.log(i20,numderS4));
//=======================
const joined = Numbers.join(' ');
console.log(joined);

const Message = "neon_learn"
const parts = Message.split('_');
console.log(parts);

const parts2 = parts.join('_');
console.log(parts2);
//=======================
const NumberS = [2,5,7,9,1,3,8,6,4];
console.log(NumberS.sort());

const reverse = NumberS.reverse();
console.log(reverse);

const products = [
    {id: 1, Name: "html"},
    {id: 2, Name: "css"},
    {id: 3, Name: "javascript"},
    {id: 4, Name: "python"}
];

const sortAscending = products.sort(function(a, b){
    if(a.Name < b.Name) return -1;
    if(a.Name > b.Name) return 1;
    return 0;
});
console.log(sortAscending);

const sortDescending = [...products].sort((a, b) => {
    if (a.Name < b.Name) return 1;
    if (a.Name > b.Name) return -1;
    return 0;
});
console.log(sortDescending);

const sortAscending2 = products.sort(function(a,b){
    let NameA = a.Name.toLowerCase();
    let NameB = b.Name.toLowerCase();
    if(NameA < NameB) return -1;
    if(NameB > NameA) return 1;
    return 0;
});
console.log(sortAscending2);

const sortDescending2 = [...products].sort((a, b) => {
    let NameA = a.Name.toUpperCase();
    let NameB = b.Name.toUpperCase();
    if (NameA < NameB) return 1; 
    if (NameA > NameB) return -1;  
    return 0;
}); 
console.log(sortDescending2);
//=======================
const Condition = Numbers.every(function(value){
    return value >= 0; 
});
console.log(Condition); 

const Numbers2 = [0, -1, 1, -2, 2, -3, 3, -4, 4];
const Condition2 = Numbers2.every(function(value){
    return value >= 0; 
});
console.log(Condition2); 

const Condition3 = Numbers2.every(v=>v >= 0);
console.log(Condition3);

const Condition4 = Numbers2.some(function(value){
    return value >= 0; 
});
console.log(Condition4); 

const Numbers3 = [-1,-2,-3,-4];
const Condition5 = Numbers3.some(function(value){
    return value >= 0; 
});
console.log(Condition5); 

const Condition6 = Numbers3.every(v=>v >= 0);
console.log(Condition5);
//=======================
const filtered =  Numbers2.filter(function(value){
    return value >= 0;
})
console.log(filtered);

const filtered2 = Numbers2.filter(v=>v >= 0);
console.log(filtered2);

const users = [
    {Name1 : "ali",Age : 18},
    {Name2 : "ahmad",Age : 14},
    {Name3 : "akdar",Age : 27},
];
const filtered3 = users.filter(function(user){
    return user.Age >= 18;
});
console.log(filtered3);

const filtered4 = users.filter(u=>u.Age <= 18);
console.log(filtered4);
//=======================
const Result = Numbers.map(function(value){
    return value * 2;
});
console.log(Result);

const Result2 = Numbers.map(v=>v * 2);
console.log(Result2);

const products2 = ["html","css","javascript","phyton"];
const items = products2.map(function(product){
    return `<li>${product}</li>`
});
console.log(items);

const items2 = products2.map(p=>`<li>${p}</li>`);
console.log(items2);

const items3 = items.join('&');
console.log(items3);

const items4 = `<ul>${items2.join('*')}</ul>`;
console.log(items4);

const items5 = products.map(function(product){
    const obj = {applicasion : product};
    return obj
});
console.log(items5);

const items6 = products2.map(function(product){
    return obj = {language : product};
});
console.log(items6);

const items7 = products.map(p=>({languageCoding : p}));
console.log(items7);

const items8 = products.map(p=>{languageCoding : p});
console.log(items8);

const items9 = Numbers2.filter(function(v){
    return v >= 0;
}).map(function(n){
    return {value : n};
});
console.log(items9);

const items10 = Numbers2.filter(v=>v >= 0).map(n=>({value : n}));
console.log(items10);

const items11 = Numbers2
.filter(v=>v >= 0)
.map(n=>({number : n}));
console.log(items11);