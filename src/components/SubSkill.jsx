import React, {Fragment}from 'react';

import '../styles/SubSkill.scss';

function SubSkill(props) {
  return (
    <Fragment>
      <li>
        <img src={props.img} alt={props.alt} />
      </li>
      <p className='text__paragraph'>{props.text}</p>
    </Fragment>
    
  )
};

export {SubSkill};