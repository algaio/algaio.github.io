import Link from "next/link";
import { Posts } from "../../types/posts";
import Date from "../Date";
import styles from "./list.module.css";

const List = ({ list }: { list: Posts }) => (
  <>
    {list && (
      <ul className={styles.main}>
        {list.map(({ id, title, url, created }) => (
          <li className={styles.item} key={id}>
            <Link href='/posts/[id]' as={`/posts/${url}`}>
              <a>{title}</a>
            </Link>
            <small>
              <Date dateString={created} />
            </small>
          </li>
        ))}
      </ul>
    )}
    {list && list.length < 1 && <p>No available articles, but stay tuned!</p>}
  </>
);

export default List;
