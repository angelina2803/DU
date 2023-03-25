let jmeno = "Angelina";

console.log(jmeno);
/---------------Dokument--------------------/ 
let nadpis;

nadpis = document.querySelector('h1');//выбираем обьект с документа Документ это целый сайт (.class)
console.log(nadpis);
/-----------------ZmenaObrazku------------------/ 
let pes;
pes = document.querySelector('.pes'); // выбираем группу и меняем картинку
// pes.src = 'jelen.jpg';
/-------------Funkce----------------------/ 
let x,y;
x= 10;
y= 15;

function nazev(a,b){
 let soucet = a+b;
 return soucet; //c ним потом работаем 
}
console.log(nazev(x,y));
/-------------Udalost----------------------/ 

