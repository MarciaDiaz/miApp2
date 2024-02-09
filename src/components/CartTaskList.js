import { StyleSheet, Text, View, Button, StatusBar } from "react-native";

const CartTaskList = (item, onHandlerModaDelete) => {
  return (
    <View style={styles.taskCard}>
      <Text style={styles.text}>{item.title}</Text>
      <Button title="DEL" onPress={() => onHandlerModaDelete(item)} />
    </View>
  );
};

export default CartTaskList;

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: "#872FF5",
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "flex-start",
    borderRadius: 5,
    gap: 25,
  },
  text: {
    width: "100%",
    color: "white",
    fontSize: 18,
  },
  completedContanier: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
  },
  textCompleted: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
