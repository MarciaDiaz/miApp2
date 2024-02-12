import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  StatusBar,
  ButtonPrimay,
} from "react-native";

const addTask = ({
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
        placeholderTextColor={"white"}
        maxLength={25}
        style={styles.input}
      />
      <TextInput
        value={taskDescription}
        onChangeText={onHandlerDescription}
        placeholder="ingresar descripcion:"
        placeholderTextColor={"white"}
        multiline
        numberOfLines={4}
        maxLength={100}
        style={styles.input}
      />
      <Button color="#B110DE" title="ADD" onPress={addTask} />

      <StatusBar style="auto" />
    </View>
  );
};
export default addTask;

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
