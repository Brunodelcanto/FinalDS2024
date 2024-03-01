import { Link } from "react-router-dom";
import React, { MouseEvent } from "react";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/authConstants";
import "./footer.css"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface PortalLayoutProps {
  children?: React.ReactNode;
  allProducts: any; 
  setAllProducts: any; 
  total: any;
  countProducts: any;
  setCountProducts: any;
  setTotal: any;
}


const abrirInstagram = () => {
  window.open('https://www.instagram.com/che_el_mate/', '_blank');
};

export default function PortalLayout({ children, allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal, }: PortalLayoutProps) {

    const [active, setActive] = useState(false);
    
    const onDeleteProduct = (product: any) => {
        const results = allProducts.filter(
          (item: any) => item.id !== product.id
        );

        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };

    const onCleanCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };
  const auth = useAuth();

  async function handleSignOut(e: MouseEvent) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/signout`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getRefreshToken()}`,
        },
      });
      if (response.ok) {
        auth.signout();
      }
    } catch (error) {
      console.log(error);
    }

    
  }
  return (
    <>
      <header className="headerPortal">
          <div className="BarraDeBusqueda">
        <form className="Buscador" role='search'>
                <input className='inputBuscar' type="search" placeholder='¿Que estas buscando?'/>
                <button className='Buscar' type='submit'><img className="Lupa" src="./lupa.png" alt="" /></button>
            </form>
            </div>

            <div className='Logo'>
                <img src="/logo.png" alt="Logo Emprendimiento" />
            </div>

            <div className='Buttons'>
                <button className='Contacto'><img src="/headphones.svg" alt="Contacto" /></button>
                <button className='IniciarSesion'><img src="/person.svg" alt="Iniciar Sesion" /></button>
                <button className='Carrito'><img src="/market.svg" alt="Carrito" /></button>
				<div className='container-icon'>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-products'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{allProducts.length ? (
						<>
							<div className='row-product'>
								{allProducts.map((product: any) => (
									<div className='cart-product' key={product.id}>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito'>
												{product.quantity}
											</span>
											<p className='titulo-producto-carrito'>
												{product.nameProduct}
											</p>
											<span className='precio-producto-carrito'>
												${product.price}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
            </div>
            </header>
            <nav className="rutas"> 
          <ul className="links">
            <li className="">
              <Link className="anclajes" to="/home">Home</Link>
            </li>
            <li className="">
              <Link className="anclajes" to="/tips">Tips</Link>
            </li>
            <li className="">
              <Link className="anclajes" to="/contacto">Contacto</Link>
            </li>
            <li className="">
              <Link className="anclajes" to="">¡{auth.getUser()?.username ?? ""} Bienvenido a Ché!</Link>
            </li>
            <li className="">
              <Link className="anclajes" to="/productos">Productos</Link>
            </li>
            <li className="">
              <a className="anclajes"href="#" onClick={handleSignOut}>
                Salir
              </a>
            </li>
          </ul>
        </nav>
      <main>{children}</main>
      <footer>
            <div className="Info">
            <ul className="listaInfo">
            <li>
                <a className="linksFooter" href="#">Categorías</a>
            </li>
            <li>
                <a className="linksFooter" href="#">Medios de pago</a>
            </li>
            <li >
                <a className="linksFooter" href="#" >Medios de envío</a>
            </li>
            </ul>    
            </div>
            <div className="Botones">
            <button className='Correo'><img src="/contacto.png" alt="Correo" /></button>
            <button className='Instagram' onClick={abrirInstagram}><img src="/instagram.png" alt="Instagram" /></button>
            <button className='Telefono'><img src="/whatsapp.png" alt="Telefono" /></button>
            </div>
            <div className="copy">
            <p>&copy; 2024 Ché el Mate. Todos los derechos reservados.</p>
            </div>
        </footer>

        
        
    </>
  );
}
