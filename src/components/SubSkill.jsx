import React, {Fragment}from 'react';

import '../styles/SubSkill.scss';

function SubSkill(props) {
  return (
    <Fragment>
    <div className="skill-areas-border">
      <div>
        <img src={props.img} alt={props.alt} />
      </div>
        <p className='text__paragraph'>{props.text}</p>
    </div>
    </Fragment>
    
  )
};

export {SubSkill};