import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { AuthResponse, AuthResponseError } from "../types/types";
import "./Login.css"

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();

  function handleChange(e: React.ChangeEvent) {
    const { name, value } = e.target as HTMLInputElement;
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const json = (await response.json()) as AuthResponse;
        console.log(json);

        if (json.body.accessToken && json.body.refreshToken) {
          auth.saveUser(json);
        }
      } else {
        const json = (await response.json()) as AuthResponseError;

        setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (auth.isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return (
    <DefaultLayout>
      <div className="login_container">
      <h1>Iniciar sesion</h1>
<form onSubmit={handleSubmit} className="">
  {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
  <label className="label">Usuario</label>
  <input
  placeholder="Usuario"
    name="username"
    type="text"
    onChange={handleChange}
    value={username}
    className="input"
  />
  <label className="label">Contraseña</label>
  <input
    placeholder="Contraseña"
    type="password"
    name="password"
    onChange={handleChange}
    value={password}
    className="input"
  />

  <button className="primarybtn">Ingresar</button>
</form>
</div>
<div className="img_login_container">
        <img src="./logo2Remove.png" alt="Ilustracion de persona meditando" />
      </div>
    </DefaultLayout>
  );
}
