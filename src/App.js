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

    editMode: false,
    editItem: {},
  };

  deleteItem = (item) => {
    const toDoItems = this.state.toDoItems.filter((i) => i.id !== item.id);
    this.setState({ toDoItems });
  };

  allowEditing = (item) => {
    this.setState({ editMode: true, editItem: item });
  };

  updateItem = (content) => {
    const toDoItems = [...this.state.toDoItems];
    const targetItemIdx = toDoItems.findIndex(
      (item) => item.id === this.state.editItem.id
    );
    toDoItems[targetItemIdx].content = content;
    this.setState({ toDoItems, editMode: false, editItem: {} });
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
          onUpdate={this.allowEditing}
          onDelete={this.deleteItem}
        />
        {this.state.editMode && (
          <InputForm
            onSubmit={this.updateItem}
            content={this.state.editItem.content}
          />
        )}
      </div>
    );
  }
}

export default App;
