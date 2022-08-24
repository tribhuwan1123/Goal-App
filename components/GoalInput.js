import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onGoalAdded(enteredGoalText);
    setEnteredGoalText("");
  }

  function endAtGoalHandler(){
    props.endAtGoalHandler();
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.showModal} animationType="fade">
      <View style={styles.addGoal}>

        <Image source={require('../assets/images/goal.png')} style = {styles.imgStyle} />

        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title="Add Goal" onPress={addGoalHandler} color = "#5e0acc"  />
          </View>

          <View style={styles.buttonStyle}>
            <Button title="Cancel" onPress={endAtGoalHandler} color = "#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  addGoal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 16,
    backgroundColor : '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 16,
    width : "100%",
    borderRadius : 8,
    backgroundColor : "#e4d0ff"
  },

  modalStyle: {},

  buttonContainer: {
    flexDirection: "row",
  },

  buttonStyle: {
    margin: 8,

    width: "30%",
  },

  imgStyle:{
    width : 100,
    height: 100,
    margin : 20
  }
});
