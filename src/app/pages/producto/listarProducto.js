import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaListarProducto from '../../components/producto/tablaListarProducto';

const ListarProducto = () => {

    const { datos: listaProductos } = useFetch('/producto');
    
    return (
        <TablaListarProducto
            listaProductos={listaProductos}
        />
    );
}

export default ListarProducto;