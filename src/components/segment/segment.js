import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import List from '../list/list.js';
import './segment.scss';

class Segment extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isDesktop: null,
      isMobile: null,
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({
      isDesktop: window.innerWidth >= 769,
      isMobile: window.innerWidth <= 760,
    });
  }
  replaceBreakpoints(string) {
    string.replace('<br/>', '');
  }
  cleanInputOfBreakpoints(input) {
    if (Array.isArray(input)) {
      input.forEach(this.replaceBreakpoints);
      return input;
    } else {
      return this.replaceBreakpoints(input);
    }
  }
  render() {
    const { h1, list, text, style, type } = this.props.data;
    this.state.isMobile && text && this.cleanInputOfBreakpoints(text);
    return (
      <article
        className={`Segment ${type || ''}`}
        style={this.state.isDesktop ? style : {}}
      >
        {h1 && <h1 className="h1">{ReactHtmlParser(h1)}</h1>}
        {!list && text &&
          text.map((text, index) => (
            <p className="h1" key={`paragraph__${index}__${text}`}>
              {ReactHtmlParser(text)}
            </p>
          ))}
        {list && <List list={list} />}
      </article>
    );
  }
}

export default Segment;
