
import PortalLayout from "../layout/PortalLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"


interface Home {
  children?: React.ReactNode;
  allProducts: any; 
  setAllProducts: any; 
  total: any;
  countProducts: any;
  setCountProducts: any;
  setTotal: any;
}

 function Home({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,}:Home)
{


  const abrirInstagram = () => {
    window.open('https://www.instagram.com/che_el_mate/', '_blank');
  };


  return (
    <PortalLayout     
    allProducts={allProducts}
    setAllProducts={setAllProducts}
    total={total}
    setTotal={setTotal}
    countProducts={countProducts}
    setCountProducts={setCountProducts}>
 <body>         


<div className="slider-frame">
   <ul>
    <li><img src="/portamate.jpg" alt="" /></li>
    <li><img src="/mate.jpg" alt="" /></li>
    <li><img src="/yerbera.jpg" alt="" /></li>
   </ul>
</div>

<div className="Bienvenidos">
    <h2>Bienvenidos a Che el Mate</h2>  
</div>

<div className='container-items'>
        <div className='item'>
        <figure>
          <img src="./camionero.jfif" />
        </figure>
        <div className='info-product'>
          <h2>Camionero de algarrobo</h2>
          <p className='price'>$8500</p>
          <button /* onClick={() => onAddProduct(product)}*/ >
            Añadir al carrito
          </button>
        </div>
      </div>

      <div className='item'>
        <figure>
          <img src="./portamate.jpg" />
        </figure>
        <div className='info-product'>
          <h2>Portamate
          </h2>
          <p className='price'>$10700</p>
          <button /*onClick={() => onAddProduct(product)}*/>
            Añadir al carrito
          </button>
        </div>
      </div>

      <div className='item'>
        <figure>
          <img src="./torpedo.jfif" />
        </figure>
        <div className='info-product'>
          <h2>Torpedo labrado en cuero negro</h2>
          <p className='price'>$10500</p>
          <button /*onClick={() => onAddProduct(product)}*/>
            Añadir al carrito
          </button>
        </div>
      </div>



    </div>

  

  
<div className="Instagram">
<span className="nombreIg"><img src="./instagram2.png" alt="" className="ig" />che_el_mate</span>
<span className="estamos">Estamos en instagram</span>
<button className="seguinos" onClick={abrirInstagram} >Seguinos</button>
</div>
</body>
    </PortalLayout>
  );
}

export default Home;