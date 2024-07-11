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
*/
////while
let again = true
while (again) {
    let answer = prompt("2+2=?")
    if (answer == "4") {
        again = false
    }
}

