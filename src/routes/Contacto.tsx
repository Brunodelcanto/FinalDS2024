import PortalLayout from "../layout/PortalLayout";
import "./Contacto.css"
import 'bootstrap/dist/css/bootstrap.min.css';


interface Contacto {
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

export default function Contacto({  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,}:Contacto) {
  return (
    <PortalLayout allProducts={allProducts}
    setAllProducts={setAllProducts}
    total={total}
    setTotal={setTotal}
    countProducts={countProducts}
    setCountProducts={setCountProducts}>
    <>
    <div className='container'>
    <h1 className='contacto'>#Contacto</h1>
    <div className='Redes'>
    <li>
      <ul><img src="/whatsapp.png" alt="" className="whatsApp" />+54 9 3476-371430</ul>
      <ul><img src="/instagram.png" alt="" className="instagramChe" onClick={abrirInstagram} />@che_el_mate</ul>
      <ul><img src="/tik-tok.png" alt="" className="tiktok"/>@che_el_mate</ul>
    </li>
    </div>
    
    <form action="#" method="post" className='formulario'/>
    <label htmlFor="nombre" className='texto'>Nombre:</label>
    <input type="text" id="nombre" name="nombre" required/>

    <label htmlFor="email" className='texto'>Correo Electrónico:</label>
    <input type="email" id="email" name="email" required/>

    <label htmlFor="telefono" className='texto'>Teléfono:</label>
    <input type="tel" id="telefono" name="telefono"/>

    <label htmlFor="mensaje" className='texto'>Mensaje:</label>
    <textarea id="mensaje" name="mensaje" rows={4} required></textarea>

    <button type="submit" className='enviar'>Enviar</button>
  <form/>
</div>
    </>
    </PortalLayout>
  )
}


