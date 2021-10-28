import React, {Fragment} from 'react';

import '../styles/mobile/Myself.scss';
import '../styles/tablet/MyselfTablet.scss';

function Myself () {
  return (
    <Fragment>
      <header className='profile'>
        <div className='profile__image'>
          <img src="https://thispersondoesnotexist.com/image" alt="Perfil" />
        </div>
        <div className='profile__text'>
          <h1>Nilthon E. C.</h1>
          <h2>Desarrollador Frontend</h2>
        </div>
      </header>
    </Fragment>
  )
};

export {Myself};