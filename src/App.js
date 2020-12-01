import React, { Component } from "react";
import InputForm from "./components/InputForm";
import ListTable from "./components/ListTable";

class App extends Component {
  state = {
    toDoItems: [
      { id: 1, content: "Create a to do list" },
      { id: 2, content: "abc" },
      { id: 3, content: "Ct" },
    ],
  };

  deleteItem = (item) => {
    const toDoItems = this.state.toDoItems.filter((i) => i.id !== item.id);
    this.setState({ toDoItems });
  };

  addNewItem = (content) => {
    const item = { id: Date.now().toString(), content };
    const toDoItems = [...this.state.toDoItems];
    toDoItems.unshift(item);
    this.setState({ toDoItems });
  };

  render() {
    return (
      <div className="container mt-4">
        <InputForm onSubmit={this.addNewItem} />
        <ListTable
          items={this.state.toDoItems}
          onUpdate={this.updateItem}
          onDelete={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
