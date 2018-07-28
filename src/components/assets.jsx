import React from 'react';

import './assets.css';

const Assets = Props => {
  const picArray = Props.pictures.map(picture => (
    <Asset
      key={picture.data[0].nasa_id}
      title={picture.data[0].title}
      url={picture.links[0].href}
    />
  ));
  return (
    <ul className="Asset-list">
      {picArray}
    </ul>
  );
};

const Asset = Props => (
  <li className="Asset-wrap">
    <img src={Props.url} title={Props.title} />
  </li>
);

export default Assets;
