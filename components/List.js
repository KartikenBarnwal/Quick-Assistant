import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableHighlight,
} from "react-native";
import Quick from "./Quick";

export default function List({ todo, _onPressButton }) {

  return (
    <View style={styles.list}>
      <FlatList
        // numColumns='2'
        data={todo}
        keyExtractor={(quick) => quick.id}
        renderItem={({ item }) => (
          // <Text style={styles.quickText}>{item.task}</Text>
          <Quick item={item} _onPressButton={_onPressButton} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 8,
    backgroundColor: "black",
    margin: 10,
    padding: 10,
  },
});
