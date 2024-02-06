import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import uuid from "react-native-uuid";
import ModalDeleteTask from "./src/components/ModalDeleteTask";
import AddTask from "./src/components/AddTask";
import ListTasks from "./src/components/ListTasks";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskSelected, setTaskSeleted] = useState({});
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      id: uuid.v4(),
      createAt: new Date().toLocaleDateString(),
      updateAt: new Date().toLocaleDateString(),
      title: taskTitle,
      description: taskDescription,
    };
    setTasks([...tasks, newTask]);
    console.log(tasks);
    setTaskTitle("");
    setTaskDescription("");
  };

  const onHandlerTitle = (t) => {
    //const id = uuid.v4();
    setTaskTitle(t);
  };

  const onHandlerDescription = (t) => {
    setTaskDescription(t);
  };

  const onHandlerModalDelete = (task) => {
    setTaskSeleted(task);
    setModalVisible(!modalVisible);
  };

  const deleteTask = () => {
    setTasks(tasks.filter((task) => task.id != taskSelected.id));
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <AddTask
        taskTitle={taskTitle}
        onHandlerTitle={onHandlerTitle}
        taskDescription={taskDescription}
        onHandlerDescription={onHandlerDescription}
        addTask={AddTask}
      />
      <ListTasks tasks={tasks} onHandlerModalDelete={onHandlerModalDelete} />
      <ModalDeleteTask
        modalVisible={modalVisible}
        taskSelected={taskSelected}
        deleteTask={deleteTask}
        onHandlerModalDelete={onHandlerModalDelete}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
