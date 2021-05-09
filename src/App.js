import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import GlobalStyles from './styles/GlobalStyles';

//import { Home } from './pages/Home';
//import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { Search } from './pages/Search';
import { Browse } from './pages/Browse';
// import { News } from './pages/News';
import { MoreInfo } from './pages/MoreInfo';
import { Episodes } from './pages/Episodes';
import { Related } from './pages/Related';
import { Player } from './pages/Player';
import { Releases } from './pages/Releases';

const Home = React.lazy(() => import('./pages/Home'));
const Detail = React.lazy(() => import('./pages/Detail'));

const App = () => {
  return (

    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Router>
        <Home path='/' />
        <Favs path='/favs' />
        <Browse path='/browse/:gen' />
        <Search path='/search' />
        <Search path='/search/:id' />
        {/* <News path='/news' /> */}
        <Detail path='/anime/:id' />
        <MoreInfo path='/anime/:id/info' />
        <Episodes path='/anime/:id/episodes' />
        <Related path='/anime/:id/related' />

        <Releases path='/releases' />
        <Player path='/watch/:id/:episode/:last' />
      </Router>

    </Suspense>
  );
};

export default App;
