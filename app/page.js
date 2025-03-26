import { getProduct } from "../service/service";
import ProductCard from "../components/productCard";


export default async function Home() {
  const products = await getProduct();
  

  return (
    
  
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {products?.data.slice(1, 20).map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </main>
    
  );
}
