import ReactHtmlParser from "react-html-parser";
import List from "../List";
import styles from "./segment.module.css";
import utilStyles from "../../styles/utils.module.css";

const Segment = (props: any) => {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     isDesktop: null,
  //     isMobile: null,
  //   };
  // }
  // componentDidMount() {
  //   window.addEventListener('resize', this.resize.bind(this));
  //   this.resize();
  // }

  // resize() {
  //   this.setState({
  //     isDesktop: window.innerWidth >= 769,
  //     isMobile: window.innerWidth <= 760,
  //   });
  // }
  const replaceBreakpoints = (string: string) => {
    string.replace("<br/>", "");
  };
  const cleanInputOfBreakpoints = (input: any) => {
    if (Array.isArray(input)) {
      input.forEach(replaceBreakpoints);
      return input;
    } else {
      return replaceBreakpoints(input);
    }
  };
  const { h1, list, text, style, type } = props.data;
  // this.state.isMobile && text && this.cleanInputOfBreakpoints(text);
  return (
    <article
      className={styles[type] || styles.main}
      // style={this.state.isDesktop ? style : {}}
    >
      {h1 && <h1 className={utilStyles.h1}>{ReactHtmlParser(h1)}</h1>}
      {!list &&
        text &&
        text.map((text: string, index: number) => (
          <p className={utilStyles.h1} key={`paragraph__${index}__${text}`}>
            {ReactHtmlParser(text)}
          </p>
        ))}
      {list && <List list={list} />}
    </article>
  );
};

export default Segment;
