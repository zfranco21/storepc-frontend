import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../context/UserAuthContext";

export default function AppRouter(){
    const {user} = useAuth();

    return (
       <Routes>
        {/* RUTAS PUBLICAS */}
    <Route
        path="/" // direccion en navegador donde se encuenta el componente
        element={<Inicio/>} // componente a renderizar 
    />

    {/* RUTAS PROTEGIDAS USUARIOS */}
    <Route element={<ProtectedRoutes/>}>
        <Route
            path= "/"
            element={}
        />
     </Route>

    {/* RUTAS PROTEGIDAS ADMINISTRADOR */}
    <Route element={<ProtectedRoutes adminOnly/>}>
        <Route 
            path="/"
            element={}
        />    
    </Route>
    
    
    </Routes>
    );
}