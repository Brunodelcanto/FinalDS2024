import { Link } from "react-router-dom";
import React from "react";
import "./DefaultLayout.css"

interface DefaultLayoutProps {
  children?: React.ReactNode;
}
export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
<header className="headerLayout">
  <nav className="nav">
    <ul className="defaultLayout">
      <li className="defaultLi">
        <Link to="/" className="navegacion-link">Iniciar sesion</Link>
      </li>
      <li className="defaultLi">
        <Link to="/signup" className="navegacion-link">Registrar</Link>
      </li>
    </ul>
  </nav>
</header>
      <main className="main1">{children}</main>
    </>
  );
}
