import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import CartTaskList from "./CartTaskList";

const ListTasks = ({ tasks, onHandlerModalDelete }) => {
  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartTaskList
            item={item}
            onHandlerModalDelete={onHandlerModalDelete}
          />
        )}
      />
    </View>
  );
};

export default ListTasks;

const styles = StyleSheet.create({});
