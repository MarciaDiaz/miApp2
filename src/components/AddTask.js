import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const AddTask = ({
  taskTitle,
  onHandlerTitle,
  taskDescription,
  onHandlerDescription,
  addTask,
}) => {
  return (
    <View style={styles.container}>
      <Text>funciona?!</Text>
      <TextInput
        value={taskTitle}
        onChangeText={onHandlerTitle}
        placeholder="ingresar tarea:"
        style={styles.input}
      />
      <TextInput
        value={taskDescription}
        onChangeText={onHandlerDescription}
        placeholder="ingresar descripcion:"
      />
      <Button color="#B110DE" title="ADD" onPress={addTask} />

      <StatusBar style="auto" />
    </View>
  );
};
export default AddTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#872FF5",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "white",
    fontSize: 16,
    textAlignVertical: "top",
  },
});
