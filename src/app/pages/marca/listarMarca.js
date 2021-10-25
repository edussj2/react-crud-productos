import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaListarMarca from '../../components/marca/tablaListarMarca';

const ListarMarca = () => {

    const { datos: listaMarcas } = useFetch('/marca');
    
    return (
        <TablaListarMarca
            listaMarcas={listaMarcas}
        />
    );
}

export default ListarMarca;