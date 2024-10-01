function pintaRombo(diagonal){
    let result='';
    for(let i=1; i<=diagonal/2; i++){ //Recorre la altura

        result+=' '.repeat(diagonal/2-i)  + '*'.repeat(2*i-1) + '\n';
    }
    if(diagonal%2==0){
        for(let y=(diagonal/2); y>=1; y--){ //Recorre la altura invertida par

            result+=' '.repeat(diagonal/2-y)  + '*'.repeat(2*y-1) + '\n';
        }
    }else{
        for(let y=(diagonal/2); y>=1; y--){ //Recorre la altura invertida impar

            result+=' '.repeat(diagonal/2-y)  + '*'.repeat(2*y-2) + '\n';
        }
    }


    return result;
}

console.log(pintaRombo(5));