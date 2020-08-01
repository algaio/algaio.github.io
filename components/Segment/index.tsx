// import ReactHtmlParser from "react-html-parser";
// import List from "../List";
import styles from "./segment.module.css";
// import utilStyles from "../../styles/utils.module.css";

interface Props {
  contentHtml: string;
  id?: string;
  type: string;
}

const Segment = (props: Props) => {
  console.log(props);
  return (
    <article
      className={styles[props.type] || styles.main}
      dangerouslySetInnerHTML={{ __html: props.contentHtml }}
    />
  );
};

export default Segment;
