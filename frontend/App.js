import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import openSocket from "socket.io-client";

export default function App() {
  const socket = openSocket("http://localhost:3000");

  const [text, setText] = useState(false);

  function handleChange() {
    setText(!text);
    socket.emit("click-01");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChange} style={styles.button}>
        <Text style={styles.textButton}>
          {text ? "Acender luz" : "Apagar luz"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    padding: 14
  },

  textButton: {
    fontSize: 30
  }
});
