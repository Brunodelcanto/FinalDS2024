import PortalLayout from "../layout/PortalLayout";
import "./Tips.css"


interface Tips {
  children?: React.ReactNode;
  allProducts: any; // Cambia "any" al tipo adecuado si es necesario
  setAllProducts: any; // Cambia "any" al tipo adecuado si es necesario
  total: any;
  countProducts: any;
  setCountProducts: any;
  setTotal: any;
}

export default function Tips({  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,}:Tips) {
  return (
    <PortalLayout allProducts={allProducts}
    setAllProducts={setAllProducts}
    total={total}
    setTotal={setTotal}
    countProducts={countProducts}
    setCountProducts={setCountProducts}>
    <div className='Contenedor'>
      <p className='Curado'>
      <h1>#TIPS</h1>
      <h2>Tips para el curado de tu mate</h2>
        <ul className='Opcion1'>
          <li className="tips">Utilizá yerba usada y llená 3/4 del mate</li>
          <li className="tips">Vertí agua hirviendo hasta 1 cm antes de tocar la virola</li>
          <li className="tips">Dejá reposar durante 24hs</li>
          <li className="tips">Quitá la yerba con una cuchara y rascá el interior del mate con la misma</li>
          <li className="tips">Enjuagá con agus hirviendo, vacialo y déjalo secando al sol</li>
        </ul>
        <img src="/torpedo.jfif" alt="" className='imagenes' />
        <h3>Opcional</h3>
        <ul className='Opcion2'>
          <li className="tips">Desparramá un pedacito de manteca por las paredes del mate para evitar rajaduras (Esta opción solo con mates de algarrobo)</li>
          <li className="tips">Repetí el proceso de 2 a 3 veces</li>
        </ul>
        <img src="/camionero.jfif" alt="" className='imagenes' />
      </p>
    </div>
    </PortalLayout>
  )
}

