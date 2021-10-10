import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [todo, handleTodo] = useState([
    { task: "Go for a jog", id: "1" },
    { task: "Make a podcast", id: "2" },
    { task: "Do a fast today", id: "3" },
    { task: "Learn react native", id: "4" },
    { task: "Take no stress", id: "5" },
  ]);

  function _onPressButton(key) {
    handleTodo((prevTodo) => {
      return prevTodo.filter((item) => item.id != key);
    });
  }

  function _onLongPressButton() {
    console.log("long pressed");
  }

  const [count, setCount] = useState(todo.length);

  function _addNewQuick(tempTask) {
    if (tempTask.trim() != "") {
      // console.log("Quick added successfully! ", tempTask);
      handleTodo([{ task: tempTask, id: count + 1 + "" }, ...todo]);
      setCount(count + 1);
      
      Keyboard.dismiss();
    } else {
      // alert("Quick shouldn't be empty!");
      Alert.alert("Illegal Move!", "The quick can not be empty.", [
        { text: "I Understand" },
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />

        <Form _addNewQuick={_addNewQuick} />

        <List todo={todo} _onPressButton={_onPressButton} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
