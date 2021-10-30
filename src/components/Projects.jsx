import React, {Fragment} from 'react';

import {SubProject} from './SubProject';

import '../styles/mobile/Proyects.scss';
import '../styles/tablet/ProyectsTablet.scss';
import '../styles/desktop/ProyectDesktop.scss';


function Projects() {
  return(
    <Fragment>
      <h2 className="text__subtitle">Proyectos</h2>
      <section className='project'>
        <div className='project-card'>
          <SubProject
            imgSrc = "https://i.imgur.com/xKenndE.png"
            imgAlt = 'Friends Finder'
            title = 'Friends Finder'
            description ='Badge reactivo al formulario y API para mostrar usuarios'
            used = 'Creado con JSX / React / API (Fetch) / CSS / HTML / Mobile Only'
            linkLive = 'https://react-19.vercel.app/'
            linkCode = 'https://github.com/Nilil/react-register'
          />
        </div>
        <div className='project-card'>
          <SubProject
            imgSrc = "https://i.imgur.com/t8NxZ6p.png"
            imgAlt = 'Juego CSS'
            title = 'Juego CSS'
            description ='¿Puedes juntar los 5 puntos?'
            used = 'Creado con CSS / HTML / Mobile Only'
            linkLive = 'https://animated-css-game.vercel.app/'
            linkCode = 'https://github.com/Nilil/animated_css_game'
          />
        </div>
        <div className='project-card'>
          <SubProject
            imgSrc = "https://i.imgur.com/HSoiYul.png"
            imgAlt = 'Pre build card (Webcomponent)'
            title = 'Pre build card (Webcomponent)'
            description ='Tarjeta con variables modificables para usarse como Webcomponent.'
            used = 'Creada con JS / Responsive (Mobile First) / Webcomponent / HTML / CSS'
            linkLive = 'https://basic-card-web-component.vercel.app/'
            linkCode = 'https://github.com/Nilil/basic-card_Web-Component'
          />
        </div>
        <div className='project-card'>
          <SubProject
            imgSrc = "https://i.imgur.com/Q1HoCC8.png"
            imgAlt = 'Column card'
            title = 'Column card'
            description ='Tarjeta creada con uso de Grid.'
            used = 'Creada con PUG / CSS / Responsive (Mobile First)'
            linkLive = 'https://fm-3-column-cards.vercel.app/'
            linkCode = 'https://github.com/Nilil/FM-3_column-cards'
          />
        </div>
        <div className='project-card'>
          <SubProject
            imgSrc = "https://i.imgur.com/9zMBgXB.png"
            imgAlt = 'Stats card'
            title = 'Stats card'
            description ='Carta responsiva.'
            used = 'Creada con PUG / CSS / Responsive (Mobile First)'
            linkLive = 'https://fm-1-stats-card.vercel.app/'
            linkCode = 'https://github.com/Nilil/FM-1_stats-card'
          />
        </div>
      </section>
    </Fragment>
  )
};

export {Projects};