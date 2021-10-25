import React from "react";
import { BrowserRouter, Switch,Route } from "react-router-dom";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js'; 

//Estilos
import './App.css';

//Componentes
import NavBar from './app/common/navBar/navBar';
import Inicio from './app/components/inicio/inicio';
import ListarMarca from './app/pages/marca/listarMarca';
import AgregarMarca from './app/pages/marca/agregarMarca';
import EditarMarca from './app/pages/marca/editarMarca';
import ListarTrabajador from './app/pages/trabajador/listarTrabajador';
import AgregarTrabajador from './app/pages/trabajador/agregarTrabajador';
import EditarTrabajador from './app/pages/trabajador/editarTrabajador';
import ListarProducto from "./app/pages/producto/listarProducto";
import AgregarProducto from "./app/pages/producto/agregarProducto";
import EditarProducto from "./app/pages/producto/editarProducto";
import ListarUsuario from "./app/pages/usuario/listarUsuario";
import AgregarUsuario from "./app/pages/usuario/agregarUsuario";
import EditarUsuario from "./app/pages/usuario/editarUsuario";

const App =() => {
  return (
      <BrowserRouter>
        <NavBar/>
        
        <div className="mt-3">
          <Switch>
            <Route path="/" exact><Inicio/></Route>
            <Route path="/trabajadores" exact><ListarTrabajador/></Route>
            <Route path="/agregarTrabajador" exact><AgregarTrabajador/></Route>
            <Route path="/editarTrabajador/:id" exact><EditarTrabajador/></Route>
            <Route path="/marcas" exact><ListarMarca/></Route>
            <Route path="/agregarMarca" exact><AgregarMarca/></Route>
            <Route path="/editarMarca/:id" exact><EditarMarca/></Route>
            <Route path="/productos" exact><ListarProducto/></Route>
            <Route path="/agregarProducto" exact><AgregarProducto/></Route>
            <Route path="/editarProducto/:id" exact><EditarProducto/></Route>
            <Route path="/usuarios" exact><ListarUsuario/></Route>
            <Route path="/agregarUsuario" exact><AgregarUsuario/></Route>
            <Route path="/editarUsuario" exact><EditarUsuario/></Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
