import React from 'react';

import './assets.css';

const Assets = props => {
  const pics = props.pictures.map(picture => (
    <Asset
      key={picture.data[0].nasa_id}
      title={picture.data[0].title}
      url={picture.links[0].href}
    />
  ));
  return (
    <ul className="Asset-list">
      {pics}
    </ul>
  );

};

const Asset = props => (
  <li className="Asset-wrap">
    <a href={props.url}>
      <img
        src={props.url}
        title={props.title}
      />
    </a>
    <br />
  </li>
);

export default Assets;
