function expresionesEquilibradas(expresion) {
    let almacenarSimbolos = [];
    let simbolosApertura = ['(', '{', '[',];
    let simbolosCierre = [')', '}', ']'];
    
    for (let i = 0; i < expresion.length; i++) {
        let caracter = expresion[i];
        
        if (simbolosApertura[i]===caracter) {
            almacenarSimbolos.push(caracter);
        } else if(simbolosCierre.includes(caracter)){
            if(almacenarSimbolos===0){
                return "La expresion no es equilibrada";
            }
        }
    }
    
    if(almacenarSimbolos.length === 0){
        return "La expresion es equilibrada";
    }else{
        return "La expresion no es equilibrada";
    }
}

console.log(expresionesEquilibradas("{ [ a * ( c + d ) ] - 5 }"));
console.log(expresionesEquilibradas("{ a * ( c + d ) ] - 5 }"));