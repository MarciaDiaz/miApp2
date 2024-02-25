import { FlatList, StyleSheet, Text, View } from "react-native";
import products from "../utils/data/products.json";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import ProductByCategory from "../components/ProductByCategory";
import Search from "../components/Search";

const ProductsByCategory = ({ categorySelected }) => {
  const [productsFiltered, setProductsFiltered] = useState([]);
  //filtrar para el buscador por palabra clave
  const [keyword, setKeyword] = useState("");
  //funcion que maneja la palabra clave
  const handlerKeyword = (k) => {
    setKeyword(k);
  };

  useEffect(() => {
    if (categorySelected)
      setProductsFiltered(
        products.filter((product) => product.category === categorySelected)
      );
    if (keyword)
      setProductsFiltered(
        productsFiltered.filter((product) => product.title.includes(keyword))
      );
  }, [categorySelected, keyword]);
  return (
    <>
      <Header title={categorySelected} />
      <Search handlerKeyword={handlerKeyword} />

      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductByCategory
            selectedProductId={selectedProductId}
            id={item.id}
            title={item.title}
          />
        )}
      />
    </>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({});
