import Link from "next/link";
import { Posts } from "../../types/posts";

// Components
import Date from "../Date";

// Styles
import styles from "./list.module.css";
import utilStyles from "../../styles/utils.module.css";

const List = ({ list }: { list: Posts }) => (
  <>
    {list && (
      <ul className={utilStyles.list}>
        {list.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href='/posts/[id]' as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
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
