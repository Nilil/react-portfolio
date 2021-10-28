import React, {Fragment} from 'react';

import {SubColaboration} from './SubColaboration';

import '../styles/mobile/Colaboration.scss';
import '../styles/tablet/ColaborationTablet.scss';

import github from '../resources/github.svg';
import linkedin from '../resources/linkedin.svg';
import twitter from '../resources/twitter.svg';
import gmail from '../resources/gmail.svg';

function Colaboration() {
  return (
    <Fragment>
      <section>
        <h2 className="text__subtitle">Colaboremos</h2>
          <ul className='colaboration-container'>
            <SubColaboration
              webpage = 'https://github.com/Nilil'
              imgLink = {github}
              description = 'GitHub'
            />
            <SubColaboration
              webpage = 'https://www.linkedin.com/in/nilec/'
              imgLink = {linkedin}
              description = 'Linkedin'
            />
            <SubColaboration
              webpage = 'https://twitter.com/NilthonEC'
              imgLink = {twitter}
              description = 'Twitter'
            />
            <SubColaboration
              webpage = 'mailto:nilthonec@gmail.com'
              imgLink = {gmail}
              description = 'Gmail'
            />
          </ul>
      </section>
    </Fragment>
  )
};

export {Colaboration};