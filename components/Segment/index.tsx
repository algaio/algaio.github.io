import { FunctionComponent, ReactNode } from "react";
import styles from "./segment.module.css";

interface Props {
  contentHtml?: string;
  id?: string;
  type: string;
  children?: ReactNode;
}

const Segment: FunctionComponent<Props> = ({
  contentHtml,
  children,
  type,
}: Props) => {
  return (
    <>
      {contentHtml && (
        <section
          className={styles[type] || styles.main}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      )}
      {!contentHtml && (
        <section className={styles[type] || styles.main}>{children}</section>
      )}
    </>
  );
};

export default Segment;
