import React from 'react';
import ReactHtmlParser from 'react-html-parser';
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
    const { h1, style, className, sections } = this.props.data;
    this.state.isMobile && this.cleanInputOfBreakpoints(h1);
    return (
      <article className={'Segment'} style={this.state.isDesktop ? style : {}}>
        <header className={className || 'Segment__header'}>
          {Array.isArray(h1) &&
            h1.map(h1 => <h1 key={h1}>{ReactHtmlParser(h1)}</h1>)}
          {typeof h1 === 'string' && <h1>{ReactHtmlParser(h1)}</h1>}
        </header>
        <section className={'Segment__section-container'}>
          {sections &&
            sections.map(section => (
              <section className={'Segment__section'} key={section.id}>
                {section.title}
              </section>
            ))}
        </section>
        <footer />
      </article>
    );
  }
}

export default Segment;
