import { Suspense } from "react";

async function fetchProducts() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Products");
    }, 3000)
  );
}

function FetchProducts() {
  const products = fetchProducts();
  return <h1>{products}</h1>;
}

export default function ProductId() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <FetchProducts />
      </Suspense>
    </>
  );
}
