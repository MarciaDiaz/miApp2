import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";

const Home = ({ selectedCategoryState }) => {
  //recibe por parametro
  return (
    <View>
      <Header title="Home" />
      <Categories selectedCategoryState={selectedCategoryState} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
