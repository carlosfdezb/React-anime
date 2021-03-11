import React from 'react';
import { MdHome, MdSearch, MdFavoriteBorder } from 'react-icons/md';
import { BiNews } from 'react-icons/bi';
import { Helmet } from 'react-helmet';
import { MarginBottom } from '../components/MarginBottom';
import { NavBar } from '../components/NavBar';
import { Link } from '../components/NavBar/styles';

import { ListOfNews } from '../components/ListOfNews';

const SIZE = '32px';
export const News = () => {
  return (
    <div>
      <Helmet>
        <title>Noticias - ReactAnime</title>
        <meta name='description' content='Con ReactAnime puedes ver las noticias relacionadas al anime' />
      </Helmet>
      <ListOfNews />
      <MarginBottom />
      <NavBar>
        <Link to='/'><MdHome size={SIZE} /></Link>
        <Link to='/favs'><MdFavoriteBorder size={SIZE} /></Link>
        <Link to='/search'><MdSearch size={SIZE} /></Link>
        <Link to='/news'><BiNews size={SIZE} /></Link>
      </NavBar>
    </div>
  );
};
