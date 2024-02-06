import { StyleSheet, Text, View, Modal, Button } from "react-native";

const ModalDeleteTask = ({
  taskSelected,
  deleteTask,
  onHandlerModalDelete,
  modalVisible,
}) => {
  return (
    <Modal
      visible={modalVisible}
      onRequestClose={() => onHandlerModalDelete({})}
    >
      <View>
        <Text>eliminar?: {taskSelected.title}</Text>
        <Button title="si" onPress={deleteTask} />
        <Button title="no" onPress={() => onHandlerModalDelete({})} />
      </View>
    </Modal>
  );
};
export default ModalDeleteTask;
const styles = StyleSheet.create({});
