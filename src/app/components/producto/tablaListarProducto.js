import React from "react";
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { RiAddCircleLine, RiDeleteBin5Line } from 'react-icons/ri';

const TablaListarProducto = ({listaProductos}) =>{

    const encabezado = () => {
        return (
            <tr>
                <th>Nro</th>
                <th>Nombre</th>
                <th>Vigencia</th>
                <th>Marca</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
        );
    }

    const nombreVigencia = (props) =>{
        let vigencia = props.vigencia;

        if(vigencia === 1){
            return "Vigente";
        }else{
            return "No Vigente";
        }
    }

    const celdas = () => {
        let numero=0;
        return (            
            listaProductos.map((producto) => (
                <tr key={producto.id}>
                    <td>{numero+=1}</td>
                    <td>{producto.nombre}</td>
                    <td>{nombreVigencia(producto)}</td>
                    <td>{producto.idMarca}</td>
                    <td>
                        <Link to={"/editarProducto/" + producto.id} className="btn btn-success">
                            <BiEdit/>
                        </Link>
                    </td>
                    <td>
                        <Link to={"/eliminarProducto/" + producto.id} className="btn btn-danger">
                            <RiDeleteBin5Line/>
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return(
        <div className="container mt-3">
            <h1 className="text-center">Lista de Productos</h1>
            <Link to="/agregarProducto" className="btn btn-primary mb-2">
               <RiAddCircleLine/> Agregar
            </Link>
            <Table responsive>
                <thead className="bg-dark text-light">
                    { encabezado() }
                </thead>
                <tbody>
                    { celdas() }
                </tbody>
            </Table>
        </div>
    );
}

export default TablaListarProducto;