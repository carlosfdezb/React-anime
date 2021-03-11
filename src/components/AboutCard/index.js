import React from 'react';
import { AboutContainer, AboutH1, AboutP, ImportantText, Link } from './styles';

export const AboutCard = () => {
  return (
    <AboutContainer>
      <AboutH1>Acerca de</AboutH1>
      <AboutP>
        ReactAnime nace desde la necesidad de aprender ReactJS, me pareció un buen proyecto construir una PWA para ver anime, usando principalmente
        de back-end una API subida a NPM que permitia obtener la mayoría de datos pertenecientes a animeflv y otros de MyAnimeList.
        No es el propósito de ReactAnime quitar 'público' a las anteriores páginas previamente mencionadas, como desarrollador de la app recomiendo fervientemente seguir
        usando y dando apoyo principalmente a animeflv, ya que el trabajo que hacen es verdaderamente ejemplar. Si bien el fuerte de ReactAnime es su versión móvil,
        también cuenta con una versión de escritorio, pero de nuevo, sugerimos que uses la página de animeflv.
      </AboutP>
      <AboutP>
        La app se encuentra hosteada en servicios gratuitos, firebase para el front-end y vercel para el back-end, por lo que no es posible asegurar el
        correcto funcionamiento.
      </AboutP>
      <AboutP>
        Sin más que agregar paso a detallar que se utilizó para realizar la PWA y un link a github con el repositorio a disposición de cualquiera para
        que lo modifiquen a gusto.
      </AboutP>
      <AboutP>
        Front-end (principales):
      </AboutP>
      <Link href='https://es.reactjs.org/'><ImportantText>1. React.JS</ImportantText></Link>
      <Link href='https://styled-components.com/'><ImportantText>2. Styled-components</ImportantText></Link>
      <Link href='https://www.npmjs.com/package/react-responsive'><ImportantText>3. React-responsive</ImportantText></Link>
      <Link href='https://www.npmjs.com/package/reactjs-localstorage'><ImportantText>4. Reactjs-localstorage</ImportantText></Link>
      <Link href='https://www.npmjs.com/package/@reach/router'><ImportantText>5. @Reach/router</ImportantText></Link>
      <Link href='https://babeljs.io/'><ImportantText>6. Babel</ImportantText></Link>
      <Link href='https://webpack.js.org/'><ImportantText>7. Webpack</ImportantText></Link>
      <Link href='https://www.npmjs.com/package/react-helmet'><ImportantText>8. React-helmet</ImportantText></Link>
    </AboutContainer>
  );
};
