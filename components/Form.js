import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native-paper";

export default function Form({ _addNewQuick }) {
  const [tempText, handleTempText] = useState("");

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new quick!"
        onChangeText={(text) => {
          handleTempText(text);
        }}
        value={tempText}
      />
      <Button
        mode="contained"
        color="#40E0D0"
        dark="true"
        onPress={() => {
          _addNewQuick(tempText);
          handleTempText("");
        }}
      >
        Go!
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 5,
    paddingBottom: 10,
    flex: 1.2,
  },
  input: {
    paddingHorizontal: 7,
    backgroundColor: "white",
    height: 40,
  },
});
