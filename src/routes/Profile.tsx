import PortalLayout from "../layout/PortalLayout";

interface Profile {
  children?: React.ReactNode;
  allProducts: any; // Cambia "any" al tipo adecuado si es necesario
  setAllProducts: any; // Cambia "any" al tipo adecuado si es necesario
  total: any;
  countProducts: any;
  setCountProducts: any;
  setTotal: any;
}

export default function Profile({  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,}:Profile) {
  return (
    <PortalLayout allProducts={allProducts}
    setAllProducts={setAllProducts}
    total={total}
    setTotal={setTotal}
    countProducts={countProducts}
    setCountProducts={setCountProducts}>
      <h1>Profile</h1>
    </PortalLayout>
  );
}
