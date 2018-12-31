import {
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import React, { Component } from "react";

import List from "../../Components/List";

import { getTodos, addTodo, deleteTodo } from "./actions";

class Home extends Component {
  state = {
    inputData: ""
  };

  componentDidMount() {
    this.props.getTodosData();
  }

  _onButtonPress = () => {
    if (this.state.inputData !== "") {
      this.props.addTodo({ title: this.state.inputData });
      this.setState({ inputData: "" });
    }
  };

  _onListDelete = todo => {
    this.props.deleteTodo(todo);
  };

  render() {
    const { wrapper, header, todoForm } = styles;
    return (
      <View style={wrapper}>
        <Text style={header}>Todos</Text>
        <View style={todoForm}>
          <TextInput
            placeholder="Your Todo"
            value={this.state.inputData}
            onChangeText={text => this.setState({ inputData: text })}
          />
          <Button
            onPress={() => this._onButtonPress()}
            title="Add"
            color="#841584"
            accessibilityLabel="Add to todo"
          />
        </View>
        <View>
          <FlatList
            data={this.props.todos}
            renderItem={({ item }) => (
              <List data={item} onDelete={this._onListDelete} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10
  },
  header: {
    fontSize: 20,
    alignSelf: "center"
  },
  todoForm: {
    margin: 20
  }
});

mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

mapDispatchToProps = dispatch => {
  return {
    getTodosData: () => dispatch(getTodos()),
    addTodo: todo => dispatch(addTodo(todo)),
    deleteTodo: todo => dispatch(deleteTodo(todo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
