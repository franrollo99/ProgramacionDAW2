(function(){
    function obtenerEstructuraJSON(){
        const cuerpo = document.body;
        // console.log(cuerpo.childNodes);
        console.log(cuerpo.children);

        for(let c of cuerpo.children){
            // console.log(c.children);
        }
    }

    function imprimirEstructura(selector){

    }

    obtenerEstructuraJSON();

})();