import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter/index";
import Navbar from "../../components/Navbar/index";
import PagesButton from "../../components/PagesButton/index";
import ProductsCard from "../../components/ProductCard/index";

import { StoreDiv, ProductGridDiv, ProductDiv, FoundItemsDiv } from "./style";

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<string[] | []>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const asyncFunc = async () => {
      try {
        const response = await fetch(
          `https://wine-back-test.herokuapp.com/products?page=${currentPage}&limit=9`
        );
        const data = await response.json();
        setProducts(data.items);
        setTotalItems(data.totalItems);
        setTotalPages(data.totalPages);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    asyncFunc();
  }, [currentPage]);

  return (
    <div>
      <Navbar />
      <StoreDiv>
        <Filter />
        <ProductDiv>
          <FoundItemsDiv>
            <span>{totalItems}</span>
            <span>produtos encontrados</span>
          </FoundItemsDiv>
          <ProductGridDiv>
            {products.map((product) => (
              <ProductsCard key={product.id} {...product} />
            ))}
          </ProductGridDiv>
          <PagesButton
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </ProductDiv>
      </StoreDiv>
    </div>
  );
};

export default Catalog;
