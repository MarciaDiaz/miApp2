import { StyleSheet, Text, View, Button } from "react-native";

const CartTaskList = (item, onHandlerModalDelete) => {
  return (
    <View style={styles.taskCard}>
      <Text style={styles.text}>{item.title}</Text>
      <Button title="DEL" onPress={() => onHandlerModalDelete(item)} />
    </View>
  );
};

export default CartTaskList;

const styles = StyleSheet.create({});
