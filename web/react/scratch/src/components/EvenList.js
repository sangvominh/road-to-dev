import style from "../assets/EventList.module.css";

export default function EvenList({ evenList, handelDeleteItemEvenList }) {
  return (
    <>
      {evenList.map((item) => (
        <div className={style.card} key={item.id}>
          <h2>{item.title}</h2>
          <button onClick={() => handelDeleteItemEvenList(item.id)}>delete</button>
        </div>
      ))}
    </>
  );
}
