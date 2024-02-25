import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import colors from "../../utils/globals/Color";
import { useState } from "react";

const Search = ({ handlerKeyword }) => {
  //guardamos en un estado
  const [input, setInput] = useState("");
  //que se guarde en el input
  const handlerInput = (t) => setInput(t);
  //funcion buscar
  const search = () => {
    handlerKeyword(input);
    //para cerrar el teclado
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar"
        style={styles.input}
        value={input}
        /*se pasa la funcion*/
        onChangeText={handlerInput}
      />
      <Pressable onPress={search}>
        <EvilIcons name="search" size={30} color="black " />
      </Pressable>
      <Pressable>
        <EvilIcons name="close-o" size={30} color="black " />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    flex: 1,
  },
  container: {
    backgroundColor: colors.orange3,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
});
