import { StatusBar } from "expo-status-bar";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function startAtGoalHandler() {
    setShowModal(true);
  }

  function endAtGoalHandler() {
    setShowModal(false);
  }

  function addGoalHandler(enteredText) {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    setShowModal(false);
  }

  function deletGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id);
    });
  }


  console.log("Hello World")

  return (
    <>
      <StatusBar  style="light"/>
      <View style={styles.container}>
        <Button
          title="Add New Goal "
          color="#5e0acc"
          onPress={startAtGoalHandler}
        />

        <GoalInput
          onGoalAdded={addGoalHandler}
          showModal={showModal}
          endAtGoalHandler={endAtGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDelete={deletGoalHandler}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 50,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
