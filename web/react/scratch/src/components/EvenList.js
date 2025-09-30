import React from "react";

export default function EvenList({ evenList, handelDeleteItemEvenList }) {
  return (
    <>
      {evenList.map((item) => (
        <React.Fragment key={item.id}>
          <h2>
            {item.id} - {item.title}s
          </h2>
          <button onClick={() => handelDeleteItemEvenList(item.id)}>delete</button>
        </React.Fragment>
      ))}
    </>
  );
}
