import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const storeData = async (value) => {
    try {
      const jsonGoals = JSON.stringify(value);
      await AsyncStorage.setItem("goals", jsonGoals);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const goals = await AsyncStorage.getItem("goals");
      const jsonGoalsLoad = JSON.parse(goals);
      if (jsonGoalsLoad !== null) {
        setCourseGoals(jsonGoalsLoad);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    storeData(courseGoals);
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  useEffect(() => {
    storeData(courseGoals);
    getData();
  }, [modalIsVisible]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContaier}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContaier: {
    flex: 5,
  },
});
