import React from "react";
import {Link} from "react-router-dom";
import { Typeahead } from 'react-bootstrap-typeahead';
import { Form , Button} from 'react-bootstrap';

const FrmEditarProducto = ({onSubmit, onChange, producto,listaMarca,onSelectedTypeahead,
    onChangeInputTypeahead,onChangeTypeahead}) =>{
    return(
        <div className="container col-lg-6 mx-auto mt-3">

            <h1 className="text-center">Actualizar Producto</h1>

            <Form onSubmit={onSubmit}>

                <div className="row">

                    <div className="col-12">

                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Registrar Nombre" 
                                name="nombre"
                                value={producto.nombre}
                                onChange={onChange}
                                required=""
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Marca:</Form.Label>
                            <Typeahead
                                size="sm"
                                id="basic-typeahead-single"
                                placeholder="Elige una opción"
                                options={listaMarca}
                                labelKey={opcion => String(opcion.nombre)}
                                selected={onSelectedTypeahead('idMarca', producto.idMarca)}
                                onInputChange={(valorNuevo) =>
                                    onChangeInputTypeahead('idMarca', valorNuevo)}
                                onChange={(valorNuevo) => valorNuevo.length > 0 &&
                                    onChangeTypeahead('idMarca', valorNuevo[0].id)}
                                inputProps = {{ required: true }}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Vigencia:</Form.Label>
                                <Form.Control 
                                        size="sm"
                                        as="select"
                                        name="vigencia"
                                        value={producto.vigencia}
                                        onChange={onChange}
                                        required
                                >
                                <option value="">-- Seleccionar --</option>
                                <option value="1">Vigente</option>
                                <option value="0">No Vigente</option>
                            </Form.Control>
                        </Form.Group>
                    
                    </div>
                </div>
                
                <div className="text-center">
                    <Button variant="success" type="submit">
                        Actualizar
                    </Button>

                    <Link className="btn btn-danger ml-2" to="/productos">
                        Cancelar
                    </Link>
                </div>
            </Form>

        </div>
    );
}

export default FrmEditarProducto;