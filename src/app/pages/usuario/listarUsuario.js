import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaListarUsuario from '../../components/usuario/tablaListarUsuario';

const ListarUsuario = () => {

    const { datos: listaUsuario } = useFetch('/usuario');
    
    return (
        <TablaListarUsuario
            listaUsuario={listaUsuario}
        />
    );
}

export default ListarUsuario;