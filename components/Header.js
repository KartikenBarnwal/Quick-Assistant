import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <Entypo name="infinity" size={24} color="cyan" style={styles.logo} />
      <Text style={styles.heading}>iTrade</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    // height: "15%",
    flex: 2,
    // flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems:"center",
    backgroundColor: "black",
  },
  logo:{
    flex: 1,
  },
  heading: {
    flex: 2,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    padding: 2,
    margin:0,
  },
});
