import React from "react";

const ToDoList = () => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}

        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Gandertonsssssssssssssssssss</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
