import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";

export default function GoalInput({ goalInputHandler, addGoalHandler }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder="Your Goal!"
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#234FC7",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#234FC7",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
