import React from "react";

const ListTable = (props) => {
  const { items, onUpdate, onDelete } = props;

  const renderRows = () => {
    return items.map((item) => {
      return (
        <tr key={item.id}>
          <th>{item.content}</th>
          <td>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => onUpdate(item)}
            >
              Update
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(item)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <table className="table">
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default ListTable;
