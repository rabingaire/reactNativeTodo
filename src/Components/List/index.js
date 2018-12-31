import React, { Component } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

class List extends Component {
  _onDelete = () => {
    this.props.onDelete(this.props.data);
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.text}>
          <Text>{this.props.data.title}</Text>
        </View>
        <View style={styles.delete}>
          <Button
            style={{ width: 200 }}
            onPress={this._onDelete}
            title="Delete "
            color="#c7004c"
            accessibilityLabel="Delete todo"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 20,
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    flexDirection: "row"
  },
  delete: {
    flexDirection: "row"
  }
});

export default List;
