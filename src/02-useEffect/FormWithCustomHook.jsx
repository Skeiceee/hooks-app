import { useEffect, useState } from "react";
import Message from "./Message";
import useForm from "../hooks/useForm";

const FormWithCustomHook = () => {

  const { formState, onInputChange, onResetForm, username, email, password} = useForm({
    username: '',
    email: '',
    password: '',
  })
  // const { username, email, password } = formState

  /* ---- Nota ----
    useEffect() tiende dos parametros una funcion de callback y una lista de dependencias, 
    el callback se llama en la primera renderizacion y al cambiar los estados si no se define una o mas dependencias, 
    basicamente si no definimos dependencias el componente llamara a nuestro callback cada vez que cambiemos algun 
    useState que hubieramos creado, en cambio si definimos solo ciertas dependencias solo se llamara a nuestra 
    funcion de callback cuando ese useState que definimos cambie.
  */
  useEffect(() => {
    console.log("formState changed!");
  }, [formState]);
  
  useEffect(() => {
	console.log("email changed!");
  }, [email]);

  useEffect(() => {
    console.log("call!");
  }, []);



  return (
    <div className="mt-4">
      <div className="card">
        <div className="card-header">Formulario Simple</div>
        <div className="card-body p-4">
          <div className="mt-0">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              name="username"
              value={username}
              onChange={onInputChange}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="usuario@example.com"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="usuario@example.com"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="px-4 pb-4"> 
          <button className="btn btn-danger mt-2" onClick={onResetForm}>Borrar</button>
        </div>

      </div>
    </div>
  );
};

export default FormWithCustomHook;
