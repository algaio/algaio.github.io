import { FunctionComponent } from "react";
import { TSegmentProps } from "../../types/props";
import styles from "./segment.module.css";

export const Segment: FunctionComponent<TSegmentProps> = ({
  contentHtml,
  children,
  type,
}) => (
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
