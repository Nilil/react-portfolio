import React, {Fragment} from 'react';

import {SubSkill} from './SubSkill'

import '../styles/mobile/Skills.scss';
import '../styles/tablet/SkillsTablet.scss';

import sass from '../resources/sass.svg';
import css from '../resources/css.svg';
import html from '../resources/html.svg';
import js from '../resources/js.svg';
import pug from '../resources/pug.png';
import react from '../resources/react.svg';
import webcomponent from '../resources/webcomponent.svg';
import github from '../resources/github.svg';

function Skills() {
  return (
    <Fragment>
      <section className="skills">
        <h2 className="text__subtitle">Habilidades</h2>
        <section className='skills-areas'>
            <ul className='skills-areas__list'>
              <SubSkill
                img = {css}
                alt = 'CSS 3'
                text = 'CSS 3'
              />
              <SubSkill
                img = {html}
                alt = 'HTML 5'
                text = 'HTML 5'
              />
              <SubSkill
                img = {js}
                alt = 'Javascript (ECMAS 6)'
                text = 'Javascript (ECMAS 6)'
              />
            </ul>
            <ul className='skills-areas__list'>
              <SubSkill
                img = {github}
                alt = 'Github'
                text = 'Github'
              />
              <SubSkill
                img = {react}
                alt = 'React'
                text = 'React'
              />
              <SubSkill
                img = {sass}
                alt = 'SASS'
                text = 'SASS'
              />
            </ul>
            <ul className='skills-areas__list'>
              <SubSkill
                img = {pug}
                alt = 'PUG'
                text = 'PUG'
              />
              <SubSkill
                img = {webcomponent}
                alt = 'Webcomponents'
                text = 'Webcomponents'
              />
            </ul>
        </section>
      </section>
    </Fragment>
  )
};

export {Skills};