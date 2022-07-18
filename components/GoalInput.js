import { View, StyleSheet, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

export default function GoalInput({ onAddGoal, visible }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your Goal!"
          value={enteredGoalText}
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
    </Modal>
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
