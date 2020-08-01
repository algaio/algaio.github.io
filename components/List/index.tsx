import styles from "./list.module.css";

const List = ({ list }: { list: Array<any> }) => (
  <>
    {list &&
      list.length > 0 &&
      list.map((item) => (
        <section className={styles.item}>
          <a href={item.href}>{item.text}</a>
          <p>, {item.date}</p>
        </section>
      ))}
  </>
);

export default List;
