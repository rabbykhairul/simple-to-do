import React, { Component } from "react";
import ListTable from "./components/ListTable";

class App extends Component {
  state = {
    toDoItems: [
      { id: 1, content: "Create a to do list" },
      { id: 2, content: "abc" },
      { id: 3, content: "Ct" },
    ],
  };

  render() {
    return (
      <div className="container">
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
