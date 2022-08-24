import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.goalStyle}>
        <Text style={styles.goalTextStyle}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalStyle: {
    borderColor: "#dcdcdc",
    borderRadius: 8,
    borderWidth: 2,
    margin: 6,
    backgroundColor: "#5e0acc",
  },
  goalTextStyle: {
    fontWeight: "700",
    color: "white",
    padding: 16,
  },

  pressedItem: {
    opacity: 0.5,
  },
});
