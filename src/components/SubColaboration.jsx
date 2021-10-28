import React , {Fragment}from 'react';

import '../styles/SubColaboration.scss';

function SubColaboration(props) {
  return (
    <Fragment>
      <li className='img-list'>
        <a href={props.webpage} target="_blank">
          <img src={props.imgLink} alt={props.description} />
        </a>
      </li>
    </Fragment>
  )
};

export {SubColaboration};