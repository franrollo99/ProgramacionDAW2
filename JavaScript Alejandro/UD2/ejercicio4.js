function pintaTriangulo(altura){
    let result='';
    for(let i=1; i<=altura; i++){ //Recorre la altura

        result+=' '.repeat(altura-i)  + '*'.repeat(2*i-1) + '\n';
    }
    return result;
}

console.log(pintaTriangulo(8));