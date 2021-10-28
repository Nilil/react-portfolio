import React, {Fragment} from 'react';

import '../styles/SubProject.scss';

function SubProject(props) {
  return(
    <Fragment>
    <section className='project-container'>
      <div className='project__image'>
        <img src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <div className='project__text'>
        <h3>{props.title}</h3>
        <div className="text__paragraph">
          <p>{props.description}</p>
          <p>{props.used}</p>
        </div>
        <div className="project__text--links">
          <a href={props.linkLive}>En vivo</a>
          <a href={props.linkCode}>Código</a>
        </div>
      </div>
    </section>
    </Fragment>
  )
};

export {SubProject};