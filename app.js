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
function sayHello(name, surname, salary, age) {
    alert(` Hİ ${name} ${surname}`)
    alert(salary > 1000 ? "You are Rich" : "You are poor")
    alert(age > 18 ? "You re adult" : "You are child")

}
sayHello("Fuad" ,"Mikayılov",1000,10)
function demo ( a,b,c = 22){
    console.log(a);
    console.log(b);
    console.log(c);
}
let x=5,y=10,z=15;
demo(x,y,z)

function calc(a, b) {
    return a + b
}
let v = calc(1, 2)
console.log(v);
function login(username, password) {
    if (username == "admin", password = "123")
        return true

    return false

}
let result = login("admin", "123")
console.log(result);
//////////////Function7
const sayHello = (name) => `Hello ${name}`;
console.log(sayHello('Zahid'))
////////////////Function language
function salamala(name,surname,language){
    if(language == "en")
        console.log(`Hello ${name + " " +surname} !`);
    else if (language == "az")
    console.log(`Salam ${name + " " +surname} !`);

}
salamala("Fuad","Mikayılov","az")
///////////////nume sum
function add(a, b, c) {
    return a + b + c
}
let result = add(15, 20, 30)
let num1= +prompt("Num1"), num2 = +prompt("Num2"),num3 = +prompt("Num3");
console.log(num1,num2,num3);
/////////Callback Function and ananymouse function
const demo = (name) => {
    console.log(name);
}
demo("zaza")
const demo2 = (a, b, c) => a + b + c
const result1 = demo(1, 2, 3)
const result2 = demo(1, 2, 3)
console.log(result1);
console.log(result2);
///////Object 
const user1 = {
    name:"Fuad",
    surname:"Mikayılov",
    age:17,
    isWorking:false
}
const user2 = {
    name:"Zahid",
    surname:"Vahabzade",
    age:17,
    isWorking:false
}
const user3 = {
    name:"Orxan",
    surname:"Eliyev",
    age:17,
    isWorking:false
}

const users = [user1,user2,user3]
Courses1 = {
    language: "İngilis Dili kursları",
    imgLink: "imglink",
    lessoninfo: {
        icon: "icon1",
        timeHead: "Dərsin müddəti",
        timeİnfo: "həftədə 2 dəfə 90 Dəqiqə dərs +4 gün danışıq klubu"
    },
    courseTime: {
        icon: "icon1",
        courseHead: "Kursun müddəti",
        courseİnfo: "1.5-2ay"
    },
    coursePrice: {
        icon: "icon1",
        courseHead: "Kursun Qiymeti",
        courseİnfo: "99AZN / AY"
    },
    courseButoon: {
        link: "href//////"
    }
}
Courses2 = {
    language: "Biznes  İngilis Dili",
    imgLink: "imglink",
    lessoninfo: {
        icon: "icon1",
        timeHead: "Dərsin müddəti",
        timeİnfo: "həftədə 2 dəfə 90 Dəqiqə dərs +4 gün danışıq klubu"
    },
    courseTime: {
        icon: "icon1",
        courseHead: "Kursun müddəti",
        courseİnfo: "1.5-2ay"
    },
    coursePrice: {
        icon: "icon1",
        courseHead: "Kursun Qiymeti",
        courseİnfo: "140AZN / AY"
    },
    courseButoon: {
        link: "href//////"
    }
}
Courses3 = {
    language: "Rus Dili kursları",
    imgLink: "imglink",
    lessoninfo: {
        icon: "icon1",
        timeHead: "Dərsin müddəti",
        timeİnfo: "həftədə 2 dəfə 90 Dəqiqə dərs +4 gün danışıq klubu"
    },
    courseTime: {
        icon: "icon1",
        courseHead: "Kursun müddəti",
        courseİnfo: "1.5-2ay"
    },
    coursePrice: {
        icon: "icon1",
        courseHead: "Kursun Qiymeti",
        courseİnfo: "70AZN / AY"
    },
    courseButoon: {
        link: "href//////"
    }
}
Courses4 = {
    language: "İELTS",
    imgLink: "imglink",
    lessoninfo: {
        icon: "icon1",
        timeHead: "Dərsin müddəti",
        timeİnfo: "həftədə 2 dəfə 90 Dəqiqə dərs +4 gün danışıq klubu"
    },
    courseTime: {
        icon: "icon1",
        courseHead: "Kursun müddəti",
        courseİnfo: "3ay"
    },
    coursePrice: {
        icon: "icon1",
        courseHead: "Kursun Qiymeti",
        courseİnfo: "160azn / AY"
    },
    courseButoon: {
        link: "href//////"
    }
}
selectedCourses = [Courses1, Courses2, Courses3, Courses4]



const phones = []

const phone1 = {
    deliveryİnfo: {
        icon: "//iconsDelivery",
        deliveryTime: "2saat/0.0m"
    },
    img: "/////imgssasd52",
    vendor: "Apple",
    model: "İphone 15 Pro",
    color: "Blue",
    beforePrice: 3.799,
    currentPrice: 3.299,
    currency: "₼",
    discount: this.beforePrice - this.currentPrice,
    priceİcon: "iconsMoney",
    creditİnfo: "0% 12ay",
    additionalinfo: {
        screen: '6.1"',
        ram: "8 GB",
        storage: "512 GB"
    }
}


const buildingİnformation = {
    title: "Satılır 2 otaqlı yeni tikili 57 m², Nəsimi r.",
    price: 186000,
    img: "////////////",
    squarePrice: this.price / this.area,
    category: "Yeni tikili",
    area: 57,
    extract: "var",
    repair: "var",
    floor: "9 / 16",
    numberOfRooms: "2",
    mortgage: "var",
    content: `
    DƏYƏRLİ MÜŞTƏRİLƏRİMİZ!!
    İPOTEKAYA YARARLI!!
    ✅ Nəsimi rayonu Niagara restoranı və Olimpik starın yanı
    ✅ 1 otaqdan 2 otağa düzəlmə
    ✅ Əla təmirli
    ✅ Mənzil bütün əşyaları ilə birgə satılır
    ✅ Mənzildə demək olar təmirdən sonra yaşayış olmayıb
    ✅ Bina İnfrastruktur cəhətdən çox əlverişli yerdə yerləşir
    ✅ 7/24 mühafizə
    ✅ Geniş həyət
    ✅ Uşaqlar üçün oyun sahəsi
    ✅ 2 sürətli lift
    Daha ətraflı məlumat üçün əlaqə saxlaya bilərsiniz`,
    location: "Sabit Rəhman küç."
}


/////////////////////////////Callback Funct'on
const add = (a,b) =>{
    return a+b
}
let result = add(10,20)
console.log(result);
////////////ForEach
const people = ["Nurlan","Orxan","Zahid","Fuad"]

console.log(people[2]);
people.forEach((x) => {
    console.log(x);
})
///////////////////Json Foreach
const people1 = [
    {
        name:"Nurlan",
        age:33
    },
    {
        name:"Fuad",
        age:44
    },
    {
        name:"Zahid",
        age:33
    }
]
people1.forEach((item) =>{
    console.log(item.name);
})
///////////// Find metodu şerte uyğun tapırsa geriye tapdığını qaytarır ilkini
///tapmırsa undifined qaytarır
const numbers = [-1,-2,-0,3,-0,4,5,6,7,8,9,10]
const x = numbers.find( item => {
    return item > 5
})
console.log(x);


//////////////////////Filter metodu şerte uyğun bütün tapdıqlarını
///arrey içersinde qaytarır tapmadıqda ise boş arrrey  qaytarır
const numbers = [-1,-2,-0,3,-0,4,5,6,7,8,9,10]

const y = numbers.filter((item) =>{
    return item < 0;
})
console.log(y);
*/


//////Every Metodu bütün elementlerin şerte uyğun olub ve ya olamdığına baxır eger hamsı 
////uyğundursa True uyğun deyilse Folse qaytarır
const numbers = [-1, -2, -0, 3, -0, 4, 5, 6, 7, 8, 9, 10]
const z = numbers.every((item) => item < 100)
console.log(z);
