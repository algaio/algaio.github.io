import Link from "next/link";
import { Posts } from "../../types/posts";
import Date from "../Date";
import styles from "./list.module.css";

const List = ({ list }: { list: Posts }) => (
  <>
    {list && (
      <ul className={styles.main}>
        {list.map(({ id, date, title }) => (
          <li className={styles.item} key={id}>
            <Link href='/posts/[id]' as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    )}
    {list && list.length < 1 && <p>No available articles, but stay tuned!</p>}
  </>
);

export default List;
