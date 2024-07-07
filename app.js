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