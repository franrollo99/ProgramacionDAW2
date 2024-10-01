function pintaRombo(diagonal){
    let result='';
    for(let i=1; i<=diagonal/2; i++){ //Recorre la altura

        result+=' '.repeat(diagonal/2-i)  + '*'.repeat(2*i-1) + '\n';
    }
    for(let i=diagonal/2; i>=1; i--){ //Recorre la altura

        result+=' '.repeat(diagonal/2-i)  + '*'.repeat(2*i-1) + '\n';
    }
    return result;
}

console.log(pintaRombo(10));