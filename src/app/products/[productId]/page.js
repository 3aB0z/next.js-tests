export default function ProductId({ params, searchParams }) {
  return (
    <>
      <p>Product id: {params.productId}</p>
      <p>Searched for: {searchParams.productId}</p>
    </>
  );
}
