import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EvenList from "./components/EvenList";

function App() {
  const [evenList, setEvenList] = useState([
    { title: "hai ba bon", id: 1 },
    { title: "mot hai ba", id: 2 },
    { title: "hai ba bon", id: 3 },
    { title: "mot hai ba", id: 4 },
    { title: "hai ba bon", id: 5 },
  ]);
  const [showHideEvenList, setShowHideEvenList] = useState(true);
  const [showHideModal, setShowHideModal] = useState(false);

  function handelDeleteItemEvenList(id) {
    // setA(
    //   a.filter((item) => {
    //     return id !== item.id;
    //   })
    // );

    // recommend
    setEvenList((prevA) =>
      prevA.filter((item) => {
        return id !== item.id;
      })
    );
  }

  function handleModal() {
    setShowHideModal(!showHideModal);
  }

  return (
    <>
      <Title title="this is home page" />

      {!showHideEvenList && <button onClick={() => setShowHideEvenList(!showHideEvenList)}>show</button>}
      {showHideEvenList && <button onClick={() => setShowHideEvenList(!showHideEvenList)}>hide</button>}
      {showHideEvenList && <EvenList evenList={evenList} handelDeleteItemEvenList={handelDeleteItemEvenList} />}

      <button onClick={handleModal}>show modal</button>
      {showHideModal && (
        <Modal handleClose={handleModal}>
          <h2>this is modal</h2>
          <p>this is content of modal aaaaaaaaaaaa</p>
        </Modal>
      )}
    </>
  );
}

export default App;
