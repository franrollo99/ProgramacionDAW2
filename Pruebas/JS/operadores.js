let a=5;
let b=3;

//Operadores aritmeticos
console.log(a + b, 'suma'); //suma
console.log(a - b, 'resta'); //resta
console.log(a * b, 'multiplicacion'); //multiplicacion
console.log(a / b, 'division'); //division
console.log(a % b, 'modulo'); //modulo (resto)
console.log(a ** b, 'potencia'); //potencia (elevado a)
console.log(Math.pow(a, b), 'potencia') //potencia
console.log(a ** (1/2), 'raiz cuadrada') //raiz cuadrada
console.log(Math.sqrt(a), 'raiz cuadrada') //raiz cuadrada

//incrementar
console.log(++a);
console.log(a++);
console.log(a);

//decrementar
console.log(--a);
console.log(a--);
console.log(a);

//Operadores de asignacion
a=a+5;
a+=5;
a-=5;
a*=5;
a/=5;
a%=5;
a**=5;
a**=(1/2);





//Operadores de comparacion
let c=5;

console.log(c<5);
console.log(c<=5);
console.log(c>5);
console.log(c>=5);

console.log(c==5);
console.log(a==5);
console.log(c===5); //comprueba mismo tipo de dato y mismo valor
console.log(c!==5);





//Operadores logicos
console.log(true && false, 'operador AND'); //solo es true si ambos son true; es false si cualquiera de los dos es false
console.log(true || false, 'operador OR'); //es true si cualquiera de los dos es true; solo es false si ambos son false