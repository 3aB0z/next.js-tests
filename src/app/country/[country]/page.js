import { notFound } from "next/navigation";

export default function Country({ params }) {
  if (params.country === "israel") {
    notFound();
  }
  return (
    <>
      <p>Country is: {params.country}</p>
    </>
  );
}
