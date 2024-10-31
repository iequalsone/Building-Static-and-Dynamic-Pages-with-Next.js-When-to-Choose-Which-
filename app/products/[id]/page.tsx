import { getProduct } from "@/lib/api";

export async function getStaticProps({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return { props: { product }, revalidate: 60 }; // Revalidate every 60 seconds
}

export default function ProductPage({ product }: { product: ProductType }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}
