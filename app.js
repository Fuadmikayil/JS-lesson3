/*let a = prompt("Enter number a...")
let b = prompt("Enter number b...")
if (a > b) {
    alert(`${a} > ${b}`)
}
else if (a < b) {
    alert(`${a} < ${b}`)
}
else if (a == b) {
    alert(`${a} == ${b}`)
}
else {
    alert("Wrong Number")
}*/
////////if bloku her zaman oxunur 
//////// else if,else bloku  if blokuna qeder butun bloklar  false olanda oxunur
//if, else if de şert yazılır lakin else-de şert olmur

//Level 1 -mini calculuyator
/*
let sec = prompt("Zehmet olmasa seçim edin + - * / ");

let num1 = +prompt("1ci reqemi daxil edin");
let num2 = +prompt("2ci reqemi daxil edin");
if (sec === '+') {
    alert(num1 + num2);

} else if (sec === '-') {
    alert(num1 - num2);

} else if (sec === '*') {
    alert(num1 * num2);
} else if (sec === '/') {
    alert(num1 / num2);


} else {
    alert("Yanlış seçim daxil etdiniz!!!!!!!!!!");
}

alert("Redbull - 1.20azn, Cola 2.30, Sprite 4.10 ")
let sec = prompt("Redbulldan neçe dene olsun?");
let sec2 = prompt("Cola neçe dene olsun?");
let sec3 = prompt("Sprite neçe dene olsun?");

let result =1.20*sec+2.30*sec2+4.10*sec3 
alert(result.toFixed(2)+"azn");
let money = prompt("Ödenişi edin !!!!!!")
if(money>result.toFixed(2)){
    alert(money-result.toFixed(2) +"azn")
}
else{
    alert("Kasıb!!!")
}
/////////Arrey///
let arrey1 = ["Salam",false,123,undefined,null]
let studentName = ["Fuad", "Orkhan","Yasemin","Nurlan"]
console.log(studentName[1]);
//////////İntervyu sualı 1//////
console.log(studentName[studentName.length -1]);
let lastindex = studentName[studentName.length -1]
console.log(studentName[lastindex]);
/////////Concat/////////
console.log(arrey1.concat(studentName));


/////İndexof////////
console.log(studentName.indexOf("Fuad"));

/////Lastİndexof////////
console.log(studentName.lastİndexOf("Fuad"));
*/
/////İncludes serach true and false////////
/*
let studentName = ["Fuad", "Orkhan","Yasemin","Nurlan"]

console.log(studentName.includes("Fuad"));
///////////Join/////////
console.log(studentName.join("/"));
//////////////Push///////
console.log(studentName.push("Hesen"));
//////Pop//////
console.log(studentName.pop());
//////UnShift//////
console.log(studentName.unshift("Rasim"));
//////Shift//////
console.log(studentName.shift());
//////Reverse//////
console.log(studentName.reverse());


//////////arrey within arrey 
let arrey2 = [123, ["Fuad", "Hesen", 154]]
console.log(arrey2[1][2]);

const students = [123, [111, ["Yasamen", "Leyla"], 222, ["Oraxan", "Fuad", "Nurlan"], 333]]
console.log(students[1][3][2]);

///////////For
for (let a = 0; a < 10; ++a) {
    console.log(a);
    
}

////while
let again = true
while (again) {
    let answer = prompt("2+2=?")
    if (answer == "4") {
        again = false
    }
}
//////////login
let again = true
while (again) {
    let login = prompt("Enter login")
    let password = prompt("Enter password")
    if (login == "fuad123" && password == "fuad77") {
        alert("Welcome")
        again = false
    }
    else{
        alert("Try again")
    }
}


//////reqemleri toplama
let counter = 0
for (let index = 0; index < 100; index++) {
    counter += i

}
console.log(counter);

const countries = ["Finland","Sweden","Denmark","Norway","İceland","Baku"]
for (let index = 0; index < countries.length; index++) {
    console.log(countries[index]);
    
}
/////////numberss
const numbers = [111,222,333,444,555,666,747]
let i =0
for (let index = 0; index < numbers.length; index++) {
    i = i +numbers[index]
    
}
console.log(i);

///////qüvvete yükseltmek
const numbers2 = [2,4,6,8,10,12,14]
let newNumbers =[]
for (let index = 0; index < numbers2.length; index++) {
    newNumbers.push(numbers2[index] **2)
    
}
console.log(numbers2);
console.log(newNumbers);

//////////////2nd solution
const numbers2 = [2,4,6,8,10,12,14]
for (let index = 0; index < numbers2.length; index++) {
    numbers2[index] = numbers2[index] **2
    
}
console.log(numbers2);

/////For of
for (const iterator of numbers2) {
    console.log(iterator);
}
//////////////Function
function login(){
    alert("Welcome")
    let continueLogin = true 
    while (continueLogin) {
        let username = prompt("Enter username....")
        let pass = prompt("Enter pass....")
        if (username === "Fuad123" && pass === "Fuad456") {
            alert("Welcome")
            continueLogin= false
        }
        else{
            alert("Try again")
        }
        
    }
}
function add( a,b,operator){
    console.log(a+b)
}
add(10,20)
*/
function sayHello(name, surname, salary, age) {
    alert(` Hİ ${name} ${surname}`)
    alert(salary > 1000 ? "You are Rich" : "You are poor")
    alert(age > 18 ? "You re adult" : "You are child")

}
sayHello("Fuad" ,"Mikayılov",1000,10)