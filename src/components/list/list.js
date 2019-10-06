import React from 'react';
import './list.scss';

const List = ({ list }) => (
  <React.Fragment>
    {list &&
      list.length > 0 &&
      list.map(item => (
        <section class="list__item">
          <a href={item.href}>{item.text}</a>
          <p>, {item.date}</p>
        </section>
      ))}
  </React.Fragment>
);

export default List;
