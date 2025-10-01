import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EvenList from "./components/EvenList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [evenList, setEventList] = useState([]);
  const [showHideEvenList, setShowHideEvenList] = useState(true);
  const [showHideModal, setShowHideModal] = useState(false);

  function handelDeleteItemEvenList(id) {
    // setEventList(
    //   evenList.filter((item) => {
    //     return id !== item.id;
    //   })
    // );

    // recommend
    setEventList((prevA) =>
      prevA.filter((item) => {
        return id !== item.id;
      })
    );
  }

  function showOrHideModal() {
    setShowHideModal(!showHideModal);
  }

  const addEvent = (event) => {
    setEventList((prevEvent) => {
      return [...prevEvent, event];
    });
    showOrHideModal();
  };

  return (
    <>
      <Title title="this is home page" />

      {!showHideEvenList && <button onClick={() => setShowHideEvenList(!showHideEvenList)}>show</button>}
      {showHideEvenList && <button onClick={() => setShowHideEvenList(!showHideEvenList)}>hide</button>}
      {showHideEvenList && <EvenList evenList={evenList} handelDeleteItemEvenList={handelDeleteItemEvenList} />}

      <button onClick={showOrHideModal}>Create event</button>
      {showHideModal && (
        <Modal handleClose={showOrHideModal} highLight={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
    </>
  );
}

export default App;
