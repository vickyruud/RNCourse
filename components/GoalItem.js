import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#200742" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "white",
    padding: 8,
  },
  pressedItem:{
    opacity: 0.5
  }
});
