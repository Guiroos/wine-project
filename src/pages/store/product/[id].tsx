import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar";

const ProductDetails: React.FC = () => {
  const [products, setProducts] = useState<string[] | []>([]);
  const [product, setProduct] = useState<string | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const asyncFunc = async () => {
      try {
        const response = await fetch(
          `https://wine-back-test.herokuapp.com/products`
        );
        const data = await response.json();
        setProducts(data.items);
        const foundItem = products.find(
          (product: any) => product.id === router.query.id
        );
        setProduct(foundItem);        
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    asyncFunc();
  }, [router.query.id]);

  return (
    <div>
      <Navbar cartItems={[]} />

      {/* <ProductDetails
          key={product.id}
          product={product}
          cartItems={cartItems}
          setCartItems={setCartItems}
        /> */}
    </div>
  );
};

export default ProductDetails;
