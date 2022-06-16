import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter/index";
import Navbar from "../../components/Navbar/index";
import PagesButton from "../../components/PagesButton/index";
import ProductsCard from "../../components/ProductCard/index";
import {
  getItemLocalStorage,
  saveToLocalStorage,
} from "../../utils/localStorage";

import {
  StoreDiv,
  ProductGridDiv,
  ProductDiv,
  FoundItemsDiv,
} from "../../styles/pages/store";

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<string[] | []>([]);
  const [filteredProducts, setFilteredProducts] = useState<string[] | []>([]);
  const [filter, setFilter] = useState<string>("");
  // const [searchedProducts, setSearchedProducts] = useState<string[] | []>([]);
  // const [search, setSearch] = useState<string>("");
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const cart = getItemLocalStorage("cart");
    if (cart) {
      setCartItems(cart);
    } else {
      setCartItems([]);
      saveToLocalStorage("cart", cartItems);
    }
  }, [setCartItems]);

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
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    asyncFunc();
  }, [currentPage]);

  useEffect(() => {
    if (filter !== "") {
      setLoading(true);
      const asyncFunc = async () => {
        try {
          const response = await fetch(
            `https://wine-back-test.herokuapp.com/products`
          );
          const data = await response.json();
          setProducts(data.items);
          setTotalItems(data.totalItems);
          setTotalPages(data.totalPages);
          setLoading(false);
        } catch (err) {
          setError(err);
        }
      };
      asyncFunc();
      const firstFilter = +filter.split(",")[0];
      const secondFilter = +filter.split(",")[1];
      const filtered = products.filter((product: any) => {
        return (
          product.priceNonMember >= firstFilter &&
          product.priceNonMember <= secondFilter
        );
      });
      setFilteredProducts(filtered);
    }
  }, [filter]);

  return (
    <div id="store-page">
      <Navbar cartItems={cartItems} />

      <StoreDiv>
        <Filter setFilter={setFilter} />
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <ProductDiv>
            <FoundItemsDiv>
              <span>{filter ? filteredProducts.length : totalItems}</span>
              <span>produtos encontrados</span>
            </FoundItemsDiv>
            <ProductGridDiv>
              {filter
                ? filteredProducts.map((product) => (
                    <ProductsCard
                      key={product.id}
                      product={product}
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                    />
                  ))
                : products.map((product) => (
                    <ProductsCard
                      key={product.id}
                      product={product}
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                    />
                  ))}
            </ProductGridDiv>
            <PagesButton
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </ProductDiv>
        )}
      </StoreDiv>
    </div>
  );
};

export default Catalog;
