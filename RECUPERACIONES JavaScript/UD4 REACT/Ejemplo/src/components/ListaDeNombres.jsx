function ListaDeNombres({listaNombres}){

    const listado = listaNombres.map(nombre => <li>{nombre}</li>);

    return (
        <>
        <ul>
            {listado}
        </ul>
        </>
    );
}

export default ListaDeNombres;