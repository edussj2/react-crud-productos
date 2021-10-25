import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaListarTrabajador from '../../components/trabajador/tablaListarTrabajador';

const ListarTrabajador = () => {

    const { datos: listaTrabajadores } = useFetch('/trabajador');
    
    return (
        <TablaListarTrabajador
            listaTrabajadores={listaTrabajadores}
        />
    );
}

export default ListarTrabajador;