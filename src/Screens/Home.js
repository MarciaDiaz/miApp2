import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";

const Home = ({ selectedCategoryState }) => {
  //recibe por parametro
  return (
    <>
      <Header title="Home" />
      <Categories selectedCategoryState={selectedCategoryState} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F55DFC",
  },
});
