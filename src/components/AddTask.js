import { View, Text, Button, TextInput } from "react-native";

const AddTask = ({
  taskTitle,
  onHandlerTitle,
  taskDescription,
  onHandlerDescription,
  addTask,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text>funciona?!</Text>
      <TextInput
        value={taskTitle}
        onChangeText={onHandlerTitle}
        placeholder="ingresar tarea:"
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
