import React, {Fragment} from 'react';

import {Myself} from '../components/Myself';
import {Skills} from '../components/Skills';
import {Projects} from '../components/Projects';
import {Colaboration} from '../components/Colaboration';

import '../styles/desktop/Desktop.scss';
import '../styles/tablet/tablet.scss';
import '../styles/mobile/Mobile.scss';

function Mobile() {
  return(
    <Fragment>
      <Myself/>
      <Projects/>
      <Skills/>
      <Colaboration/>
    </Fragment>
  )
};

export {Mobile};