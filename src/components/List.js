import React from 'react';

function List(props) {
  console.log(props);
  // Using the filter method, we can create a new array containing only groceries which haven't been purchased
  const notPurchased = props.groceries.filter((grocery) => !grocery.purchased);
  console.log(notPurchased);

  return (
    <ul className="list-group">
      {notPurchased.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
