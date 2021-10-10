import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Quick({ item, _onPressButton }) {
  return (
    <TouchableOpacity
      onPress={() => _onPressButton(item.id)}
      //   onLongPress={_onLongPressButton}
      underlayColor="grey"
    >
      <View style={styles.quickView}>
        <MaterialIcons name="delete-sweep" size={24} color="cyan" />
        <Text style={styles.quickText}>{item.task}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  quickView: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#40E0D0",
    margin: 10,
    padding: 10,
    flexDirection: "row"
  },
  quickText:{
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10
  }
});
