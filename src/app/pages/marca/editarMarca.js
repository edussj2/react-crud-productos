import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../services/api';
import FrmEditarMarca from '../../components/marca/frmEditarMarca';

const EditarMarca = () => {
    const [marca, setMarca] = useState({
        nombre: '',
        vigencia: ''
    });

    const { id } = useParams();

    const history = useHistory();

    useEffect(() => {
        const fetchMarca = async () => {
            try {
                const datos = await buscar('/marca', id);
                setMarca({
                    nombre: datos.nombre,
                    vigencia: datos.vigencia
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchMarca();
    }, [id])

    const handleChange = (event) => {
        const target = event.target;
        var valor = target.value;
        const nombre = target.name;
        
        if(nombre==="vigencia"){
            valor = parseInt(valor);
        }

        setMarca({
            ...marca,
            [nombre]: valor
        });
        console.log(marca)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const marcaModificado = await modificar('/marca', id, marca);
                console.log(marcaModificado);
                history.push('/marcas');
            }           
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }

    return (
        <>
            <FrmEditarMarca
                marca={marca}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditarMarca;