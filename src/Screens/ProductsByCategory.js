import { FlatList, StyleSheet, Text, View } from "react-native";
import products from "../utils/data/products.json";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import ProductByCategory from "../components/wrappers/ProductByCategory";
import Search from "../components/Search";

const ProductsByCategory = ({ categorySelected }) => {
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    setProductsFiltered(
      products.filter((product) => product.category === categorySelected)
    );
  }, [categorySelected]);
  return (
    <>
      <Header title={categorySelected} />
      <Search />

      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductByCategory id={item.id} title={item.title} />
        )}
      />
    </>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({});
