function pintaTriangulo(altura){
    let resultado[]=new Array(altura);
    for(let i=0; i<Number; i++){
        let resultado='';
        for(let y=0; y<altura-i-1; y++){
            resultado+=' ';
        }
        for(let j=0; j<2*i+1; j++){
            resultado+=altura;
        }
        console.log(resultado);
        resultado[i]=resultado;
    }
}